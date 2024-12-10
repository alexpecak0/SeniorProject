// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Click-to-Reveal Fun Facts
document.addEventListener('DOMContentLoaded', () => {
    const factButtons = document.querySelectorAll('.reveal-fact');

    factButtons.forEach(button => {
        button.addEventListener('click', () => {
            const factContent = button.nextElementSibling; // The following sibling is the fact content
            factContent.classList.toggle('visible'); // Toggle visibility
        });
    });
});

// Vets Near You Feature

// Function to get the user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showVetsNearby, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Callback function on successful location retrieval
function showVetsNearby(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Fetch nearby vets using Google Maps Places API
    fetchNearbyVets(latitude, longitude);
}

// Error handling for geolocation
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("You denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get your location timed out.");
            break;
        default:
            alert("An unknown error occurred.");
            break;
    }
}

// Function to fetch nearby vets using Google Maps Places API
function fetchNearbyVets(lat, lng) {
    const radius = 80467; // 50 miles in meters (50 miles * 1609.34 meters/mile)

    const location = new google.maps.LatLng(lat, lng);
    const request = {
        location: location,
        radius: radius,
        type: ['veterinary_care']
    };

    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(request, handleResults);
}

// Handle the results from the Places API
function handleResults(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        displayVets(results);
    } else {
        alert('No veterinarians found within a 50-mile radius.');
    }
}

// Function to display the list of vets
function displayVets(vets) {
    const vetsList = document.getElementById('vets-list');
    vetsList.innerHTML = ''; // Clear previous results

    vets.forEach(vet => {
        const vetItem = document.createElement('div');
        vetItem.className = 'vet-item';

        vetItem.innerHTML = `
            <h3>${vet.name}</h3>
            <p>${vet.vicinity}</p>
            <p>Rating: ${vet.rating || 'N/A'}</p>
        `;

        vetsList.appendChild(vetItem);
    });
}
