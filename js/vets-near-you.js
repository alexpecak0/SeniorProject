// Store map globally
let globalMap;

// Initialize map function that will be called when Google Maps loads
function initMap() {
    console.log('Map initialized');
    globalMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: 40.7128, lng: -74.0060 } // Default to New York
    });
}

// Function to get the user's location
function getLocation() {
    console.log('Getting location...');
    const vetsList = document.getElementById('vets-list');
    
    if (navigator.geolocation) {
        vetsList.innerHTML = '<div class="loading">Getting your location...</div>';
        navigator.geolocation.getCurrentPosition(showVetsNearby, showError);
    } else {
        vetsList.innerHTML = '<div class="error">Geolocation is not supported by this browser.</div>';
    }
}

// Error handling for geolocation
function showError(error) {
    const vetsList = document.getElementById('vets-list');
    console.error('Geolocation error:', error);
    switch(error.code) {
        case error.PERMISSION_DENIED:
            vetsList.innerHTML = "<div class='error'>Location access denied. Please allow location access to find vets near you.</div>";
            break;
        case error.POSITION_UNAVAILABLE:
            vetsList.innerHTML = "<div class='error'>Location information unavailable.</div>";
            break;
        case error.TIMEOUT:
            vetsList.innerHTML = "<div class='error'>Location request timed out.</div>";
            break;
        default:
            vetsList.innerHTML = "<div class='error'>An unknown error occurred.</div>";
            break;
    }
}

// Callback function on successful location retrieval
function showVetsNearby(position) {
    console.log('Location received:', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Update map to show user's location
    const userLocation = new google.maps.LatLng(latitude, longitude);
    globalMap.setCenter(userLocation);
    
    fetchNearbyVets(latitude, longitude);
}

// Function to fetch nearby vets
function fetchNearbyVets(lat, lng) {
    console.log('Fetching vets at:', lat, lng);
    
    const location = new google.maps.LatLng(lat, lng);
    const request = {
        location: location,
        radius: 16093, // 10 miles
        type: ['veterinary_care']
    };

    const service = new google.maps.places.PlacesService(globalMap);
    service.nearbySearch(request, (results, status) => {
        console.log('Search Results:', results);
        console.log('Search Status:', status);
        if (status === google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
            handleResults(results, status);
        } else {
            console.error('Places API error:', status);
            document.getElementById('vets-list').innerHTML = 
                '<div class="error">No veterinarians found within a 10-mile radius.</div>';
        }
    });
}

// Function to fetch detailed information about a specific vet
function fetchVetDetails(placeId, detailsContainer) {
    const request = {
        placeId: placeId,
        fields: ['formatted_phone_number', 'website', 'opening_hours', 'reviews', 'photos', 'url']
    };

    const service = new google.maps.places.PlacesService(globalMap);
    service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            detailsContainer.style.display = 'block';
            
            // Build the details HTML
            let detailsHtml = '<div class="expanded-details">';
            
            // Phone number
            if (place.formatted_phone_number) {
                detailsHtml += `
                    <div class="detail-item">
                        <strong>Phone:</strong> 
                        <a href="tel:${place.formatted_phone_number}">${place.formatted_phone_number}</a>
                    </div>`;
            }
            
            // Website
            if (place.website) {
                detailsHtml += `
                    <div class="detail-item">
                        <strong>Website:</strong> 
                        <a href="${place.website}" target="_blank">Visit Website</a>
                    </div>`;
            }

            // Hours
            if (place.opening_hours && place.opening_hours.weekday_text) {
                detailsHtml += `
                    <div class="detail-item hours-list">
                        <strong>Hours:</strong>
                        <ul>
                            ${place.opening_hours.weekday_text.map(day => `<li>${day}</li>`).join('')}
                        </ul>
                    </div>`;
            }

            // Google Maps link
            if (place.url) {
                detailsHtml += `
                    <div class="detail-item">
                        <a href="${place.url}" target="_blank" class="maps-link">View on Google Maps</a>
                    </div>`;
            }

            // Reviews
            if (place.reviews && place.reviews.length > 0) {
                detailsHtml += `
                    <div class="detail-item reviews-section">
                        <strong>Recent Reviews:</strong>
                        <div class="reviews-list">
                            ${place.reviews.slice(0, 2).map(review => `
                                <div class="review">
                                    <div class="review-rating">Rating: ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
                                    <div class="review-text">"${review.text.substring(0, 150)}${review.text.length > 150 ? '...' : ''}"</div>
                                    <div class="review-author">- ${review.author_name}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>`;
            }

            detailsHtml += '</div>';
            detailsContainer.innerHTML = detailsHtml;
        } else {
            detailsContainer.innerHTML = '<div class="error">Failed to load details</div>';
        }
    });
}

// Handle the results from the Places API
function handleResults(results, status) {
    const vetsList = document.getElementById('vets-list');
    
    if (status === google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
        console.log(`Found ${results.length} veterinarians`);
        displayVets(results);
        
        // Center map on first result
        globalMap.setCenter(results[0].geometry.location);
        globalMap.setZoom(11);
        
        // Add markers for each vet
        results.forEach((vet, index) => {
            const marker = new google.maps.Marker({
                position: vet.geometry.location,
                map: globalMap,
                title: vet.name,
                label: {
                    text: (index + 1).toString(),
                    color: 'white'
                }
            });
        });
    } else {
        vetsList.innerHTML = '<div class="error">No veterinarians found in your area.</div>';
    }
}

// Function to display the list of vets
function displayVets(vets) {
    const vetsList = document.getElementById('vets-list');
    vetsList.innerHTML = ''; // Clear previous results

    vets.forEach((vet, index) => {
        const distance = google.maps.geometry.spherical.computeDistanceBetween(
            globalMap.getCenter(),
            vet.geometry.location
        ) * 0.000621371; // Convert meters to miles

        const vetCard = document.createElement('div');
        vetCard.className = 'vet-card';
        vetCard.id = `vet-${index}`;

        // Create stars display for rating
        const stars = vet.rating ? '★'.repeat(Math.round(vet.rating)) + '☆'.repeat(5 - Math.round(vet.rating)) : '';
        
        vetCard.innerHTML = `
            <div class="vet-number">${index + 1}</div>
            <div class="vet-info">
                <h3>${vet.name}</h3>
                <p class="vet-address">${vet.vicinity}</p>
                <div class="vet-details">
                    <span class="vet-rating">${stars} ${vet.rating || 'N/A'}</span>
                    <span class="vet-distance">${distance.toFixed(1)} miles</span>
                </div>
                ${vet.opening_hours ? 
                    `<p class="vet-status ${vet.opening_hours.isOpen() ? 'open' : 'closed'}">
                        ${vet.opening_hours.isOpen() ? 'Open' : 'Closed'}
                    </p>` : ''
                }
                <button class="view-details-btn">View Details</button>
                <div class="vet-details-expanded" style="display: none;">
                    <div class="loading-details">Loading details...</div>
                </div>
            </div>
        `;

        // Add click event for details button
        const detailsBtn = vetCard.querySelector('.view-details-btn');
        detailsBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click event
            const detailsSection = vetCard.querySelector('.vet-details-expanded');
            if (detailsSection.style.display === 'none') {
                fetchVetDetails(vet.place_id, detailsSection);
                detailsBtn.textContent = 'Hide Details';
            } else {
                detailsSection.style.display = 'none';
                detailsBtn.textContent = 'View Details';
            }
        });

        // Add click event to center map on this vet
        vetCard.addEventListener('click', () => {
            globalMap.setCenter(vet.geometry.location);
            globalMap.setZoom(15);
        });

        vetsList.appendChild(vetCard);
    });
}