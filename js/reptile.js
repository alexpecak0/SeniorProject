const breeds = [
    {
        name: "Bearded Dragon",
        image: "../images/bearded-dragon.jpg",
        diet: "Omnivorous: insects, vegetables, and fruits.",
        activityLevel: "Moderate, enjoys basking and exploring.",
        care: "Requires UVB lighting, heat lamps, and a spacious enclosure.",
        cost: "$40 - $100",
        vetVisits: "Annual checkups, parasite screenings.",
        healthConditions: "Metabolic bone disease, respiratory infections."
    },
    {
        name: "Leopard Gecko",
        image: "../images/leopard-gecko.jpg",
        diet: "Insectivorous: crickets, mealworms.",
        activityLevel: "Low to moderate, nocturnal habits.",
        care: "Needs a warm hide, heating pad, and calcium supplementation.",
        cost: "$20 - $50",
        vetVisits: "Check for parasites, annual exams.",
        healthConditions: "Impaction, metabolic bone disease."
    },
    {
        name: "Ball Python",
        image: "../images/ball-python.jpg",
        diet: "Carnivorous: mice and rats.",
        activityLevel: "Low, mostly inactive during the day.",
        care: "Requires controlled temperature and humidity, secure enclosure.",
        cost: "$40 - $150",
        vetVisits: "Annual exams, mite checks.",
        healthConditions: "Respiratory infections, scale rot."
    },
    {
        name: "Corn Snake",
        image: "../images/corn-snake.jpg",
        diet: "Carnivorous: mice and small rodents.",
        activityLevel: "Moderate, enjoys exploring at night.",
        care: "Needs a secure enclosure with hiding places, heat source.",
        cost: "$30 - $80",
        vetVisits: "Annual checkups, parasite checks.",
        healthConditions: "Respiratory infections, mites."
    },
    {
        name: "Red-Eared Slider",
        image: "../images/red-eared-slider.jpg",
        diet: "Omnivorous: aquatic plants, insects, fish.",
        activityLevel: "Moderate, requires swimming space.",
        care: "Needs aquatic tank with basking area and UVB lighting.",
        cost: "$10 - $30",
        vetVisits: "Shell and health examinations annually.",
        healthConditions: "Shell rot, respiratory infections."
    },
    {
        name: "Green Iguana",
        image: "../images/green-iguana.jpg",
        diet: "Herbivorous: leafy greens, vegetables.",
        activityLevel: "High, needs space to climb and explore.",
        care: "Requires large enclosure, UVB lighting, high humidity.",
        cost: "$20 - $50",
        vetVisits: "Regular checkups, bone density monitoring.",
        healthConditions: "Metabolic bone disease, parasites."
    },
    {
        name: "Crested Gecko",
        image: "../images/crested-gecko.jpg",
        diet: "Omnivorous: fruit-based diet and insects.",
        activityLevel: "Moderate, nocturnal climbers.",
        care: "Needs vertical space with plants, moderate humidity.",
        cost: "$40 - $100",
        vetVisits: "Annual exams, fecal tests.",
        healthConditions: "Calcium deficiency, shedding issues."
    },
    {
        name: "Chameleon",
        image: "../images/chameleon.jpg",
        diet: "Insectivorous: crickets, worms, flies.",
        activityLevel: "Moderate, slow-moving arboreal.",
        care: "Requires precise humidity, UVB lighting, live plants.",
        cost: "$50 - $150",
        vetVisits: "Regular health monitoring.",
        healthConditions: "Stress-related illnesses, dehydration."
    },
    {
        name: "Sulcata Tortoise",
        image: "../images/sulcata-tortoise.jpg",
        diet: "Herbivorous: grasses, hay, leafy greens.",
        activityLevel: "Moderate, requires large roaming area.",
        care: "Needs UVB lighting, warm temperatures, outdoor space.",
        cost: "$50 - $200",
        vetVisits: "Regular shell and health checks.",
        healthConditions: "Pyramiding, metabolic bone disease."
    },
    {
        name: "Blue-Tongued Skink",
        image: "../images/blue-tongued-skink.jpg",
        diet: "Omnivorous: insects, fruits, vegetables.",
        activityLevel: "Low to moderate, ground-dwelling.",
        care: "Requires UVB lighting, heat source, hiding places.",
        cost: "$150 - $250",
        vetVisits: "Annual health checkups.",
        healthConditions: "Respiratory infections, parasites."
    },
    {
        name: "Russian Tortoise",
        image: "../images/russian-tortoise.jpg",
        diet: "Herbivorous: leafy greens, weeds.",
        activityLevel: "Moderate, enjoys burrowing.",
        care: "Needs dry environment, UVB lighting, outdoor enclosure preferred.",
        cost: "$100 - $200",
        vetVisits: "Shell health, parasite screenings.",
        healthConditions: "Respiratory infections, shell rot."
    },
    {
        name: "King Snake",
        image: "../images/king-snake.jpg",
        diet: "Carnivorous: rodents, other snakes.",
        activityLevel: "Moderate, active explorer.",
        care: "Secure enclosure, temperature gradient, hiding spots.",
        cost: "$50 - $100",
        vetVisits: "Annual exams, mite checks.",
        healthConditions: "Respiratory infections, mites."
    },
    {
        name: "Tokay Gecko",
        image: "../images/tokay-gecko.jpg",
        diet: "Insectivorous: crickets, mealworms.",
        activityLevel: "High, nocturnal climbers.",
        care: "Vertical space, high humidity, hiding spots.",
        cost: "$20 - $50",
        vetVisits: "Health checks, parasite screenings.",
        healthConditions: "Calcium deficiency, skin infections."
    },
    {
        name: "Uromastyx",
        image: "../images/uromastyx.jpg",
        diet: "Herbivorous: leafy greens, seeds.",
        activityLevel: "Moderate, basking behavior.",
        care: "High-temperature basking area, UVB lighting.",
        cost: "$100 - $200",
        vetVisits: "Annual health checks.",
        healthConditions: "Metabolic bone disease, dehydration."
    },
    {
        name: "Garter Snake",
        image: "../images/garter-snake.jpg",
        diet: "Carnivorous: fish, worms, rodents.",
        activityLevel: "Moderate, diurnal activity.",
        care: "Moist substrate, water dish, hiding places.",
        cost: "$20 - $50",
        vetVisits: "Annual exams, parasite checks.",
        healthConditions: "Mouth rot, parasites."
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
