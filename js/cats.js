const breeds = [
    {
        name: "Maine Coon",
        image: "../images/maine-coon.jpg",
        diet: "High-quality diet with high protein.",
        activityLevel: "Moderate, needs regular play.",
        care: "Grooming 2-3 times a week.",
        cost: "$1,000 - $1,500",
        vetVisits: "Annual checkups, dental cleanings.",
        healthConditions: "Hip dysplasia, hypertrophic cardiomyopathy."
    },
    {
        name: "Ragdoll",
        image: "../images/ragdoll.jpg",
        diet: "Balanced diet with protein and healthy fats.",
        activityLevel: "Low, enjoys lounging.",
        care: "Brush once a week.",
        cost: "$800 - $1,200",
        vetVisits: "Annual wellness exams.",
        healthConditions: "Bladder stones, hypertrophic cardiomyopathy."
    },
    {
        name: "Persian",
        image: "../images/persian.jpg",
        diet: "High-protein diet with minimal carbs.",
        activityLevel: "Low, requires minimal exercise.",
        care: "Daily brushing, eye cleaning.",
        cost: "$1,200 - $1,800",
        vetVisits: "Regular eye and dental checkups.",
        healthConditions: "Respiratory issues, dental disease."
    },
    {
        name: "Siamese",
        image: "../images/siamese.jpg",
        diet: "High-protein, grain-free diet.",
        activityLevel: "High, enjoys active play.",
        care: "Minimal grooming.",
        cost: "$600 - $800",
        vetVisits: "Annual checkups, vaccinations.",
        healthConditions: "Respiratory issues, gastrointestinal problems."
    },
    {
        name: "Bengal",
        image: "../images/bengal.jpg",
        diet: "Grain-free, high-protein diet.",
        activityLevel: "High, very active breed.",
        care: "Minimal grooming, regular play.",
        cost: "$1,000 - $1,500",
        vetVisits: "Annual checkups, parasite prevention.",
        healthConditions: "Heart disease, hip dysplasia."
    },
    {
        name: "British Shorthair",
        image: "../images/british-shorthair.jpg",
        diet: "Balanced, high-protein diet.",
        activityLevel: "Moderate activity level.",
        care: "Weekly brushing.",
        cost: "$1,000 - $1,200",
        vetVisits: "Annual health screenings.",
        healthConditions: "Hypertrophic cardiomyopathy."
    },
    {
        name: "Exotic Shorthair",
        image: "../images/exotic-shorthair.jpg",
        diet: "Moderate protein, grain-free diet.",
        activityLevel: "Moderate activity, enjoys playtime.",
        care: "Regular grooming, especially around eyes.",
        cost: "$1,200 - $1,500",
        vetVisits: "Annual checkups and eye exams.",
        healthConditions: "Respiratory issues, tear duct problems."
    },
    {
        name: "American Shorthair",
        image: "../images/american-shorthair.jpg",
        diet: "Balanced diet with high protein and healthy fats.",
        activityLevel: "Moderate, needs regular play.",
        care: "Minimal grooming.",
        cost: "$600 - $800",
        vetVisits: "Routine vaccinations and checkups.",
        healthConditions: "Obesity, hypertrophic cardiomyopathy."
    },
    {
        name: "Sphynx",
        image: "../images/sphynx.jpg",
        diet: "High-protein, grain-free diet.",
        activityLevel: "Very active, requires daily exercise.",
        care: "Weekly bathing, ear cleaning.",
        cost: "$1,500 - $3,000",
        vetVisits: "Regular health checkups, skin condition monitoring.",
        healthConditions: "Heart disease, respiratory issues."
    },
    {
        name: "Devon Rex",
        image: "../images/devon-rex.jpg",
        diet: "High-quality, grain-free diet.",
        activityLevel: "Very active and playful.",
        care: "Minimal grooming, occasional baths.",
        cost: "$1,000 - $1,500",
        vetVisits: "Regular vet visits for checkups.",
        healthConditions: "Skin issues, ear infections."
    },
    {
        name: "Scottish Fold",
        image: "../images/scottish-fold.jpg",
        diet: "High-protein diet.",
        activityLevel: "Moderate activity, needs playtime.",
        care: "Regular grooming and ear cleaning.",
        cost: "$1,500 - $3,000",
        vetVisits: "Annual checkups, eye and ear exams.",
        healthConditions: "Joint issues, ear infections."
    },
    {
        name: "Russian Blue",
        image: "../images/russian-blue.jpg",
        diet: "Balanced diet, rich in protein.",
        activityLevel: "Moderate, loves playtime.",
        care: "Minimal grooming, weekly brushing.",
        cost: "$800 - $1,200",
        vetVisits: "Regular vet visits for wellness checks.",
        healthConditions: "Dental disease, obesity."
    },
    {
        name: "Birman",
        image: "../images/birman.jpg",
        diet: "High-quality protein diet.",
        activityLevel: "Moderate activity level, enjoys play.",
        care: "Brush once a week.",
        cost: "$700 - $1,200",
        vetVisits: "Routine vaccinations and checkups.",
        healthConditions: "Heart disease, skin allergies."
    },
    {
        name: "Burmese",
        image: "../images/burmese.jpg",
        diet: "Protein-rich diet.",
        activityLevel: "High, loves active play.",
        care: "Minimal grooming, brush occasionally.",
        cost: "$600 - $1,000",
        vetVisits: "Routine vaccinations and annual checkups.",
        healthConditions: "Respiratory issues, diabetes."
    },
    {
        name: "Norwegian Forest Cat",
        image: "../images/norwegian-forest-cat.jpg",
        diet: "High-protein, grain-free diet.",
        activityLevel: "High, requires regular play and exercise.",
        care: "Brush 2-3 times a week.",
        cost: "$800 - $1,200",
        vetVisits: "Annual checkups, dental care.",
        healthConditions: "Hip dysplasia, heart disease."
    }
];

// Show breed function (based on search or navigation)
function showBreed(index) {
    const breedCard = document.getElementsByClassName('breed-card')[index];
    Array.from(document.getElementsByClassName('breed-card')).forEach(card => card.style.display = 'none');
    breedCard.style.display = 'block';
}

// Populate the carousel
const carouselInner = document.getElementById('breed-carousel');
breeds.forEach((breed, index) => {
    const breedCard = document.createElement('div');
    breedCard.classList.add('breed-card');
    breedCard.innerHTML = `
        <img src="${breed.image}" alt="${breed.name}">
        <h2>${breed.name}</h2>
        <p><strong>Diet:</strong> ${breed.diet}</p>
        <p><strong>Activity Level:</strong> ${breed.activityLevel}</p>
        <p><strong>Care:</strong> ${breed.care}</p>
        <p><strong>Cost:</strong> ${breed.cost}</p>
        <p><strong>Vet Visits:</strong> ${breed.vetVisits}</p>
        <p><strong>Common Health Conditions:</strong> ${breed.healthConditions}</p>
    `;
    carouselInner.appendChild(breedCard);
});

let currentIndex = 0;
showBreed(currentIndex);

// Carousel navigation
function prevSlide() {
    currentIndex = (currentIndex === 0) ? breeds.length - 1 : currentIndex - 1;
    showBreed(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === breeds.length - 1) ? 0 : currentIndex + 1;
    showBreed(currentIndex);
}

// Search functionality
function searchBreed() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const breedIndex = breeds.findIndex(breed => breed.name.toLowerCase() === searchTerm);
    if (breedIndex !== -1) {
        showBreed(breedIndex);
    }
}

// Autofill functionality
const searchInput = document.getElementById('searchInput');
const autocompleteList = document.getElementById('autocomplete-list');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    autocompleteList.innerHTML = ''; // Clear previous suggestions
    if (searchTerm.length === 0) return;

    breeds.forEach(breed => {
        if (breed.name.toLowerCase().includes(searchTerm)) {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = breed.name;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = breed.name;
                autocompleteList.innerHTML = ''; // Clear suggestions
                showBreed(breeds.findIndex(b => b.name === breed.name)); // Show the selected breed
            });
            autocompleteList.appendChild(suggestionItem);
        }
    });
});
