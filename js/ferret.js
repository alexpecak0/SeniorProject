const breeds = [
    {
        name: "Sable Ferret",
        image: "../images/sable-ferret.jpg",
        diet: "High-protein, meat-based ferret food.",
        activityLevel: "Very high, requires daily playtime.",
        care: "Needs spacious cage, social interaction.",
        cost: "$100 - $200",
        vetVisits: "Annual checkups, vaccinations.",
        healthConditions: "Adrenal disease, insulinoma."
    },
    {
        name: "Albino Ferret",
        image: "../images/albino-ferret.jpg",
        diet: "Carnivorous diet rich in animal protein.",
        activityLevel: "High, enjoys exploring.",
        care: "Sensitive to bright light, needs shaded areas.",
        cost: "$100 - $200",
        vetVisits: "Regular health checks, eye exams.",
        healthConditions: "Sun sensitivity, adrenal disease."
    },
    {
        name: "Cinnamon Ferret",
        image: "../images/cinnamon-ferret.jpg",
        diet: "Premium ferret kibble or raw diet.",
        activityLevel: "High, very playful.",
        care: "Requires mental stimulation, toys.",
        cost: "$120 - $250",
        vetVisits: "Annual exams, dental care.",
        healthConditions: "Insulinoma, digestive issues."
    },
    {
        name: "Chocolate Ferret",
        image: "../images/chocolate-ferret.jpg",
        diet: "High-quality ferret food rich in fats and proteins.",
        activityLevel: "High, needs interactive play.",
        care: "Social interaction, spacious environment.",
        cost: "$100 - $200",
        vetVisits: "Routine checkups, vaccinations.",
        healthConditions: "Adrenal disease, heart issues."
    },
    {
        name: "Black Sable Ferret",
        image: "../images/black-sable-ferret.jpg",
        diet: "Meat-based diet, avoid carbohydrates.",
        activityLevel: "Very active, requires supervision.",
        care: "Ferret-proofed play area, companionship.",
        cost: "$150 - $300",
        vetVisits: "Regular health screenings.",
        healthConditions: "Lymphoma, dental disease."
    },
    {
        name: "Silver Ferret",
        image: "../images/silver-ferret.jpg",
        diet: "High-protein ferret kibble, fresh water.",
        activityLevel: "High, curious nature.",
        care: "Needs enrichment activities, socialization.",
        cost: "$120 - $250",
        vetVisits: "Annual vet visits, parasite prevention.",
        healthConditions: "Adrenal disease, insulinoma."
    },
    {
        name: "Blaze Ferret",
        image: "../images/blaze-ferret.jpg",
        diet: "Specialized ferret diet, avoid sweets.",
        activityLevel: "High, enjoys climbing and tunneling.",
        care: "Interactive toys, regular handling.",
        cost: "$150 - $300",
        vetVisits: "Routine exams, hearing tests.",
        healthConditions: "Waardenburg syndrome, deafness."
    },
    {
        name: "Panda Ferret",
        image: "../images/panda-ferret.jpg",
        diet: "Balanced ferret food with high protein.",
        activityLevel: "Active, loves to play.",
        care: "Requires attention, social environment.",
        cost: "$150 - $300",
        vetVisits: "Regular checkups, vaccinations.",
        healthConditions: "Deafness, adrenal disease."
    },
    {
        name: "Dark-Eyed White Ferret",
        image: "../images/dark-eyed-white-ferret.jpg",
        diet: "Meat-rich diet, high in fat.",
        activityLevel: "High, needs daily exercise.",
        care: "Spacious cage, playtime outside the cage.",
        cost: "$100 - $250",
        vetVisits: "Annual exams, dental care.",
        healthConditions: "Adrenal disease, insulinoma."
    },
    {
        name: "Champagne Ferret",
        image: "../images/champagne-ferret.jpg",
        diet: "High-quality ferret kibble, raw meats optional.",
        activityLevel: "Active, enjoys interaction.",
        care: "Regular playtime, mental stimulation.",
        cost: "$120 - $250",
        vetVisits: "Routine health checks.",
        healthConditions: "Digestive issues, adrenal disease."
    },
    {
        name: "Siamese Ferret",
        image: "../images/siamese-ferret.jpg",
        diet: "Protein-rich diet, minimal carbs.",
        activityLevel: "Very active, inquisitive.",
        care: "Ferret-proofed home, interactive toys.",
        cost: "$100 - $200",
        vetVisits: "Annual checkups, parasite control.",
        healthConditions: "Insulinoma, heart disease."
    },
    {
        name: "Black Ferret",
        image: "../images/black-ferret.jpg",
        diet: "Carnivorous diet, avoid grains.",
        activityLevel: "High, needs plenty of exercise.",
        care: "Social interaction, safe play areas.",
        cost: "$150 - $300",
        vetVisits: "Regular vet visits.",
        healthConditions: "Adrenal disease, lymphoma."
    },
    {
        name: "Roan Ferret",
        image: "../images/roan-ferret.jpg",
        diet: "High-protein ferret food, fresh water.",
        activityLevel: "Active, loves to explore.",
        care: "Enrichment activities, companionship.",
        cost: "$120 - $250",
        vetVisits: "Annual exams, dental checks.",
        healthConditions: "Dental disease, adrenal issues."
    },
    {
        name: "Mutt Ferret",
        image: "../images/mutt-ferret.jpg",
        diet: "Balanced diet suitable for all ferrets.",
        activityLevel: "Varies, generally active.",
        care: "Needs attention, safe environment.",
        cost: "$80 - $150",
        vetVisits: "Routine health screenings.",
        healthConditions: "Common ferret ailments."
    },
    {
        name: "White Ferret",
        image: "../images/white-ferret.jpg",
        diet: "Meat-based diet, high in protein and fat.",
        activityLevel: "High, playful nature.",
        care: "Regular interaction, playtime.",
        cost: "$100 - $200",
        vetVisits: "Annual checkups, eye exams.",
        healthConditions: "Sun sensitivity, adrenal disease."
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
