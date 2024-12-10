const hamsterBreeds = [
    {
        name: "Syrian Hamster",
        image: "../images/syrian-hamster.jpg",
        diet: "High-quality hamster pellets and fresh vegetables.",
        activityLevel: "Moderate, enjoys running in a wheel and exploring.",
        care: "Needs a large cage with plenty of bedding and hiding places.",
        cost: "$10 - $25",
        vetVisits: "Annual health checks, check teeth regularly.",
        healthConditions: "Respiratory infections, wet tail."
    },
    {
        name: "Roborovski Hamster",
        image: "../images/roborovski-hamster.jpg",
        diet: "Pellets, fresh fruits, and vegetables.",
        activityLevel: "High, very active and fast runners.",
        care: "Requires a spacious cage with tunnels and wheels.",
        cost: "$15 - $25",
        vetVisits: "Occasional checkups for health issues.",
        healthConditions: "Diarrhea, respiratory issues."
    },
    {
        name: "Campbell's Dwarf Hamster",
        image: "../images/campbells-dwarf-hamster.jpg",
        diet: "Pellets, small seeds, and occasional vegetables.",
        activityLevel: "Moderate, active but enjoys burrowing.",
        care: "Needs a cage with plenty of tunnels and deep bedding.",
        cost: "$10 - $20",
        vetVisits: "Check teeth and nails regularly.",
        healthConditions: "Diabetes, obesity."
    },
    {
        name: "Winter White Dwarf Hamster",
        image: "../images/winter-white-hamster.jpg",
        diet: "Pellets, seeds, and leafy greens.",
        activityLevel: "Moderate, active in the evening.",
        care: "Needs a small wheel and tunnels.",
        cost: "$10 - $25",
        vetVisits: "Occasional checkups for infections.",
        healthConditions: "Diabetes, wet tail."
    },
    {
        name: "Chinese Hamster",
        image: "../images/chinese-hamster.jpg",
        diet: "Pellets, seeds, and occasional vegetables.",
        activityLevel: "Moderate, enjoys running in tunnels.",
        care: "Needs a large cage with deep bedding.",
        cost: "$12 - $20",
        vetVisits: "Check teeth regularly, look for respiratory issues.",
        healthConditions: "Respiratory infections, tumors."
    },
    {
        name: "European Hamster",
        image: "../images/european-hamster.jpg",
        diet: "Seeds, grains, and fresh vegetables.",
        activityLevel: "Low to moderate, active at night.",
        care: "Requires a spacious cage with burrowing opportunities.",
        cost: "$15 - $25",
        vetVisits: "Occasional health checkups.",
        healthConditions: "Respiratory infections, dental problems."
    },
    {
        name: "Teddy Bear Hamster",
        image: "../images/teddy-bear-hamster.jpg",
        diet: "Pellets, seeds, and fresh vegetables.",
        activityLevel: "Moderate, enjoys being handled and active play.",
        care: "Requires regular grooming due to their long fur.",
        cost: "$12 - $20",
        vetVisits: "Check for fur-related skin issues.",
        healthConditions: "Fur tangling, respiratory issues."
    },
    {
        name: "Siberian Hamster",
        image: "../images/siberian-hamster.jpg",
        diet: "Hamster pellets, seeds, and small portions of vegetables.",
        activityLevel: "Moderate, enjoys running on a wheel.",
        care: "Needs a warm and stable environment with deep bedding.",
        cost: "$10 - $20",
        vetVisits: "Occasional checkups for dental and respiratory issues.",
        healthConditions: "Wet tail, fur loss."
    },
    {
        name: "Albino Hamster",
        image: "../images/albino-hamster.jpg",
        diet: "Pellets, small seeds, and fresh vegetables.",
        activityLevel: "Moderate, prefers hiding and burrowing.",
        care: "Needs a cage with plenty of tunnels and burrows.",
        cost: "$15 - $25",
        vetVisits: "Annual health checks for infections.",
        healthConditions: "Respiratory infections, dental issues."
    },
    {
        name: "Black Bear Hamster",
        image: "../images/black-bear-hamster.jpg",
        diet: "Pellets, seeds, and small portions of fresh vegetables.",
        activityLevel: "Moderate, enjoys being handled and playing.",
        care: "Requires a large cage with tunnels and toys.",
        cost: "$10 - $20",
        vetVisits: "Occasional checkups for infections.",
        healthConditions: "Respiratory issues, wet tail."
    },
    {
        name: "Russian Dwarf Hamster",
        image: "../images/russian-dwarf-hamster.jpg",
        diet: "Pellets, grains, and vegetables.",
        activityLevel: "High, active and playful.",
        care: "Needs a spacious cage with plenty of bedding and a wheel.",
        cost: "$10 - $20",
        vetVisits: "Check for signs of infections.",
        healthConditions: "Diabetes, respiratory issues."
    },
    {
        name: "Panda Bear Hamster",
        image: "../images/panda-bear-hamster.jpg",
        diet: "Pellets, seeds, and small portions of fresh vegetables.",
        activityLevel: "Moderate, enjoys being handled and exploring.",
        care: "Needs a clean cage with regular maintenance.",
        cost: "$10 - $20",
        vetVisits: "Regular checkups for infections.",
        healthConditions: "Wet tail, respiratory issues."
    },
    {
        name: "Angora Hamster",
        image: "../images/angora-hamster.jpg",
        diet: "Pellets, seeds, and small portions of fruits and vegetables.",
        activityLevel: "Moderate, enjoys running on a wheel and exploring.",
        care: "Requires regular grooming due to long fur.",
        cost: "$12 - $25",
        vetVisits: "Check for fur-related issues.",
        healthConditions: "Fur tangling, respiratory infections."
    },
    {
        name: "Fancy Hamster",
        image: "../images/fancy-hamster.jpg",
        diet: "Hamster pellets, grains, and vegetables.",
        activityLevel: "Moderate, enjoys playing and exploring tunnels.",
        care: "Needs a large cage with plenty of toys.",
        cost: "$10 - $20",
        vetVisits: "Regular checkups for signs of infections.",
        healthConditions: "Respiratory infections, wet tail."
    },
    {
        name: "Djungarian Hamster",
        image: "../images/djungarian-hamster.jpg",
        diet: "Hamster pellets, seeds, and vegetables.",
        activityLevel: "Moderate, enjoys burrowing and playing.",
        care: "Needs deep bedding and tunnels for burrowing.",
        cost: "$10 - $25",
        vetVisits: "Annual health checks.",
        healthConditions: "Diabetes, respiratory infections."
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
hamsterBreeds.forEach((hamster, index) => {
    const breedCard = document.createElement('div');
    breedCard.classList.add('breed-card');
    breedCard.innerHTML = `
        <img src="${hamster.image}" alt="${hamster.name}">
        <h2>${hamster.name}</h2>
        <p><strong>Diet:</strong> ${hamster.diet}</p>
        <p><strong>Activity Level:</strong> ${hamster.activityLevel}</p>
        <p><strong>Care:</strong> ${hamster.care}</p>
        <p><strong>Cost:</strong> ${hamster.cost}</p>
        <p><strong>Vet Visits:</strong> ${hamster.vetVisits}</p>
        <p><strong>Common Health Conditions:</strong> ${hamster.healthConditions}</p>
    `;
    carouselInner.appendChild(breedCard);
});

let currentIndex = 0;
showBreed(currentIndex);

// Carousel navigation
function prevSlide() {
    currentIndex = (currentIndex === 0) ? hamsterBreeds.length - 1 : currentIndex - 1;
    showBreed(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === hamsterBreeds.length - 1) ? 0 : currentIndex + 1;
    showBreed(currentIndex);
}

// Search functionality
function searchBreed() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const breedIndex = hamsterBreeds.findIndex(hamster => hamster.name.toLowerCase() === searchTerm);
    if (breedIndex !== -1) {
        showBreed(breedIndex);
    }
}

// Autofill functionality
const searchInput = document.getElementById('searchInput');
const autocompleteList = document.getElementById('autocomplete-list');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    autocompleteList.innerHTML = ''; 
    if (searchTerm.length === 0) return;

    hamsterBreeds.forEach(hamster => {
        if (hamster.name.toLowerCase().includes(searchTerm)) {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = hamster.name;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = hamster.name;
                autocompleteList.innerHTML = ''; 
                showBreed(hamsterBreeds.findIndex(h => h.name === hamster.name));
            });
            autocompleteList.appendChild(suggestionItem);
        }
    });
});
