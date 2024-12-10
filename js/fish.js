const fishSpecies = [
    {
        name: "Betta Fish",
        image: "../images/betta-fish.jpg",
        diet: "High-protein diet, preferably pellets or frozen food.",
        activityLevel: "Moderate, loves swimming around the tank.",
        care: "Needs a tank with warm water and plants.",
        cost: "$5 - $20",
        vetVisits: "Annual health checks for infections.",
        healthConditions: "Fin rot, Ich disease."
    },
    {
        name: "Goldfish",
        image: "../images/goldfish.jpg",
        diet: "Flakes or pellets with occasional treats like brine shrimp.",
        activityLevel: "Moderate, active swimmers.",
        care: "Requires a spacious tank and good filtration.",
        cost: "$1 - $50",
        vetVisits: "Annual health checkups.",
        healthConditions: "Swim bladder issues, fin rot."
    },
    {
        name: "Guppy",
        image: "../images/guppy.jpg",
        diet: "Flakes or pellets, along with occasional brine shrimp.",
        activityLevel: "High, loves to swim around.",
        care: "Requires a planted tank with good filtration.",
        cost: "$3 - $15",
        vetVisits: "Routine checkups for infections.",
        healthConditions: "Ich, fin rot."
    },
    {
        name: "Neon Tetra",
        image: "../images/neon-tetra.jpg",
        diet: "Flake food or freeze-dried daphnia.",
        activityLevel: "High, very active swimmers.",
        care: "Prefers a tank with plants and low light.",
        cost: "$2 - $5",
        vetVisits: "Occasional checkups for parasitic infections.",
        healthConditions: "Neon Tetra disease."
    },
    {
        name: "Angelfish",
        image: "../images/angelfish.jpg",
        diet: "Flakes, frozen foods, and live foods.",
        activityLevel: "Moderate, enjoys swimming and exploring.",
        care: "Needs a tall tank with warm water.",
        cost: "$5 - $30",
        vetVisits: "Annual checkups for infections.",
        healthConditions: "Parasites, fin rot."
    },
    {
        name: "Molly Fish",
        image: "../images/molly.jpg",
        diet: "Flakes, pellets, and occasional vegetables.",
        activityLevel: "Moderate, enjoys swimming and interacting with others.",
        care: "Needs a tank with stable water conditions.",
        cost: "$2 - $10",
        vetVisits: "Routine checkups for infections.",
        healthConditions: "Ich, fin rot."
    },
    {
        name: "Zebra Danio",
        image: "../images/zebra-danio.jpg",
        diet: "Flakes or freeze-dried food.",
        activityLevel: "Very active, enjoys swimming in schools.",
        care: "Requires a well-oxygenated tank.",
        cost: "$2 - $5",
        vetVisits: "Routine checkups for parasitic infections.",
        healthConditions: "Ich, fungal infections."
    },
    {
        name: "Platy Fish",
        image: "../images/platy.jpg",
        diet: "Flakes and vegetables like zucchini or peas.",
        activityLevel: "High, enjoys swimming and playing in groups.",
        care: "Requires a stable, warm tank environment.",
        cost: "$2 - $5",
        vetVisits: "Annual checkups for infections.",
        healthConditions: "Ich, fungal infections."
    },
    {
        name: "Oscar Fish",
        image: "../images/oscar.jpg",
        diet: "High-protein diet, including pellets and live foods.",
        activityLevel: "Moderate, enjoys swimming and hiding in caves.",
        care: "Needs a large tank with stable water conditions.",
        cost: "$15 - $30",
        vetVisits: "Routine checkups for infections.",
        healthConditions: "Hole in the head disease, parasites."
    },
    {
        name: "Discus Fish",
        image: "../images/discus.jpg",
        diet: "Protein-rich food like flakes, pellets, and bloodworms.",
        activityLevel: "Moderate, enjoys swimming and exploring.",
        care: "Requires a large tank with stable water conditions.",
        cost: "$50 - $100",
        vetVisits: "Routine health checkups.",
        healthConditions: "Parasites, fin rot."
    },
    {
        name: "Clownfish",
        image: "../images/clownfish.jpg",
        diet: "Flake food, brine shrimp, and mysis shrimp.",
        activityLevel: "Moderate, enjoys swimming in anemones.",
        care: "Requires a saltwater tank with good filtration.",
        cost: "$15 - $25",
        vetVisits: "Annual health checkups.",
        healthConditions: "Ich, parasites."
    },
    {
        name: "Corydoras Catfish",
        image: "../images/corydoras-catfish.jpg",
        diet: "Sinking pellets and live foods.",
        activityLevel: "Moderate, bottom dwellers that enjoy scavenging.",
        care: "Requires a tank with smooth gravel and stable water.",
        cost: "$5 - $15",
        vetVisits: "Annual checkups for infections.",
        healthConditions: "Parasites, fin rot."
    },
    {
        name: "Kuhli Loach",
        image: "../images/kuhli-loach.jpg",
        diet: "Sinking pellets and live or frozen foods.",
        activityLevel: "Moderate, nocturnal bottom dwellers.",
        care: "Needs a well-planted tank with hiding spots.",
        cost: "$5 - $10",
        vetVisits: "Routine checkups for infections.",
        healthConditions: "Parasites, fungal infections."
    },
    {
        name: "Gourami",
        image: "../images/gourami.jpg",
        diet: "Flakes, pellets, and live foods.",
        activityLevel: "Moderate, enjoys swimming near the surface.",
        care: "Needs a tank with stable, warm water.",
        cost: "$5 - $20",
        vetVisits: "Routine checkups for infections.",
        healthConditions: "Parasites, fin rot."
    },
    {
        name: "Swordtail Fish",
        image: "../images/swordtail-fish.jpg",
        diet: "Flakes, live food, and algae-based foods.",
        activityLevel: "High, enjoys swimming and playing in groups.",
        care: "Requires a well-maintained tank with stable conditions.",
        cost: "$3 - $10",
        vetVisits: "Routine checkups for infections.",
        healthConditions: "Ich, fin rot."
    }
];

// Show fish species function (based on search or navigation)
function showBreed(index) {
    const breedCard = document.getElementsByClassName('breed-card')[index];
    Array.from(document.getElementsByClassName('breed-card')).forEach(card => card.style.display = 'none');
    breedCard.style.display = 'block';
}

// Populate the carousel
const carouselInner = document.getElementById('breed-carousel');
fishSpecies.forEach((fish, index) => {
    const breedCard = document.createElement('div');
    breedCard.classList.add('breed-card');
    breedCard.innerHTML = `
        <img src="${fish.image}" alt="${fish.name}">
        <h2>${fish.name}</h2>
        <p><strong>Diet:</strong> ${fish.diet}</p>
        <p><strong>Activity Level:</strong> ${fish.activityLevel}</p>
        <p><strong>Care:</strong> ${fish.care}</p>
        <p><strong>Cost:</strong> ${fish.cost}</p>
        <p><strong>Vet Visits:</strong> ${fish.vetVisits}</p>
        <p><strong>Common Health Conditions:</strong> ${fish.healthConditions}</p>
    `;
    carouselInner.appendChild(breedCard);
});

let currentIndex = 0;
showBreed(currentIndex);

// Carousel navigation
function prevSlide() {
    currentIndex = (currentIndex === 0) ? fishSpecies.length - 1 : currentIndex - 1;
    showBreed(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === fishSpecies.length - 1) ? 0 : currentIndex + 1;
    showBreed(currentIndex);
}

// Search functionality
function searchBreed() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const breedIndex = fishSpecies.findIndex(fish => fish.name.toLowerCase() === searchTerm);
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

    fishSpecies.forEach(fish => {
        if (fish.name.toLowerCase().includes(searchTerm)) {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = fish.name;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = fish.name;
                autocompleteList.innerHTML = ''; 
                showBreed(fishSpecies.findIndex(f => f.name === fish.name));
            });
            autocompleteList.appendChild(suggestionItem);
        }
    });
});
