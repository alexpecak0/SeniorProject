const birdSpecies = [
    {
        name: "Budgerigar",
        image: "../images/budgerigar.jpg",
        diet: "Seeds, fruits, and vegetables.",
        activityLevel: "High, enjoys flying and playing.",
        care: "Needs a spacious cage with perches and toys.",
        cost: "$10 - $50",
        vetVisits: "Annual health checkups.",
        healthConditions: "Respiratory issues, feather plucking."
    },
    {
        name: "Cockatiel",
        image: "../images/cockatiel.jpg",
        diet: "Pellets, seeds, and fresh vegetables.",
        activityLevel: "Moderate, enjoys interaction and play.",
        care: "Needs a cage with plenty of room to fly.",
        cost: "$50 - $150",
        vetVisits: "Regular checkups for health.",
        healthConditions: "Obesity, respiratory infections."
    },
    {
        name: "African Grey Parrot",
        image: "../images/african-grey-parrot.jpg",
        diet: "Pellets, fresh fruits, and vegetables.",
        activityLevel: "High, needs mental stimulation and play.",
        care: "Requires a large cage and regular social interaction.",
        cost: "$500 - $1,500",
        vetVisits: "Routine vet visits for long-term health.",
        healthConditions: "Feather plucking, respiratory infections."
    },
    {
        name: "Lovebird",
        image: "../images/lovebird.jpg",
        diet: "Seeds, pellets, fruits, and vegetables.",
        activityLevel: "High, enjoys being with companions.",
        care: "Needs a spacious cage and social interaction.",
        cost: "$40 - $100",
        vetVisits: "Annual vet checkups.",
        healthConditions: "Feather plucking, respiratory infections."
    },
    {
        name: "Canary",
        image: "../images/canary.jpg",
        diet: "Seeds and leafy greens.",
        activityLevel: "Moderate, enjoys singing and flying.",
        care: "Requires a spacious cage and perches.",
        cost: "$20 - $150",
        vetVisits: "Occasional health checkups.",
        healthConditions: "Obesity, respiratory infections."
    },
    {
        name: "Macaw",
        image: "../images/macaw.jpg",
        diet: "Pellets, seeds, fruits, and vegetables.",
        activityLevel: "High, needs lots of space and stimulation.",
        care: "Requires a large aviary and daily interaction.",
        cost: "$1,000 - $5,000",
        vetVisits: "Routine checkups for long-term health.",
        healthConditions: "Beak malformations, feather plucking."
    },
    {
        name: "Parakeet",
        image: "../images/parakeet.jpg",
        diet: "Seeds, pellets, and vegetables.",
        activityLevel: "High, loves playing and flying.",
        care: "Needs a large cage and interaction.",
        cost: "$10 - $60",
        vetVisits: "Annual checkups.",
        healthConditions: "Obesity, respiratory issues."
    },
    {
        name: "Cockatoo",
        image: "../images/cockatoo.jpg",
        diet: "Pellets, seeds, and fresh produce.",
        activityLevel: "High, requires mental and physical stimulation.",
        care: "Needs a large cage and lots of socialization.",
        cost: "$500 - $2,000",
        vetVisits: "Routine checkups for long-term health.",
        healthConditions: "Feather plucking, beak issues."
    },
    {
        name: "Finch",
        image: "../images/finch.jpg",
        diet: "Seeds, greens, and occasional fruits.",
        activityLevel: "Moderate, enjoys flying around the cage.",
        care: "Requires a spacious cage with perches and toys.",
        cost: "$10 - $100",
        vetVisits: "Annual checkups for health.",
        healthConditions: "Respiratory infections, malnutrition."
    },
    {
        name: "Parrotlet",
        image: "../images/parrotlet.jpg",
        diet: "Seeds, pellets, and vegetables.",
        activityLevel: "High, enjoys flying and playing with toys.",
        care: "Needs a large cage and interaction.",
        cost: "$100 - $300",
        vetVisits: "Annual vet visits for health.",
        healthConditions: "Feather plucking, respiratory infections."
    },
    {
        name: "Conure",
        image: "../images/conure.jpg",
        diet: "Pellets, seeds, and fresh produce.",
        activityLevel: "High, needs lots of mental stimulation.",
        care: "Requires a large cage with toys and interaction.",
        cost: "$150 - $500",
        vetVisits: "Annual health checkups.",
        healthConditions: "Feather plucking, respiratory issues."
    },
    {
        name: "Quaker Parrot",
        image: "../images/quaker-parrot.jpg",
        diet: "Pellets, seeds, and vegetables.",
        activityLevel: "High, enjoys flying and interaction.",
        care: "Needs a large cage with space to fly.",
        cost: "$300 - $500",
        vetVisits: "Routine checkups.",
        healthConditions: "Obesity, respiratory infections."
    },
    {
        name: "Eclectus Parrot",
        image: "../images/eclectus-parrot.jpg",
        diet: "Fruits, vegetables, and pellets.",
        activityLevel: "High, requires mental stimulation and exercise.",
        care: "Needs a large cage and regular interaction.",
        cost: "$1,000 - $3,000",
        vetVisits: "Routine checkups.",
        healthConditions: "Feather plucking, respiratory infections."
    },
    {
        name: "Ringneck Parrot",
        image: "../images/ringneck-parrot.jpg",
        diet: "Pellets, fruits, and vegetables.",
        activityLevel: "High, enjoys playing and interacting.",
        care: "Needs a large cage and regular interaction.",
        cost: "$200 - $600",
        vetVisits: "Routine checkups.",
        healthConditions: "Obesity, respiratory issues."
    },
    {
        name: "Lorikeet",
        image: "../images/lorikeet.jpg",
        diet: "Nectar, fruits, and vegetables.",
        activityLevel: "High, enjoys flying and interacting.",
        care: "Requires a spacious cage with plenty of space to fly.",
        cost: "$300 - $800",
        vetVisits: "Annual health checkups.",
        healthConditions: "Beak malformations, respiratory issues."
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
birdSpecies.forEach((bird, index) => {
    const breedCard = document.createElement('div');
    breedCard.classList.add('breed-card');
    breedCard.innerHTML = `
        <img src="${bird.image}" alt="${bird.name}">
        <h2>${bird.name}</h2>
        <p><strong>Diet:</strong> ${bird.diet}</p>
        <p><strong>Activity Level:</strong> ${bird.activityLevel}</p>
        <p><strong>Care:</strong> ${bird.care}</p>
        <p><strong>Cost:</strong> ${bird.cost}</p>
        <p><strong>Vet Visits:</strong> ${bird.vetVisits}</p>
        <p><strong>Common Health Conditions:</strong> ${bird.healthConditions}</p>
    `;
    carouselInner.appendChild(breedCard);
});

let currentIndex = 0;
showBreed(currentIndex);

// Carousel navigation
function prevSlide() {
    currentIndex = (currentIndex === 0) ? birdSpecies.length - 1 : currentIndex - 1;
    showBreed(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === birdSpecies.length - 1) ? 0 : currentIndex + 1;
    showBreed(currentIndex);
}

// Search functionality
function searchBreed() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const breedIndex = birdSpecies.findIndex(bird => bird.name.toLowerCase() === searchTerm);
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

    birdSpecies.forEach(bird => {
        if (bird.name.toLowerCase().includes(searchTerm)) {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = bird.name;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = bird.name;
                autocompleteList.innerHTML = ''; 
                showBreed(birdSpecies.findIndex(b => b.name === bird.name));
            });
            autocompleteList.appendChild(suggestionItem);
        }
    });
});
