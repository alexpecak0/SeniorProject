const breeds = [
    {
        name: "American Guinea Pig",
        image: "../images/american-guinea-pig.jpg",
        diet: "High-quality hay, fresh vegetables, and fortified pellets.",
        activityLevel: "Moderate, enjoys exploring and interaction.",
        care: "Needs daily social interaction, regular cage cleaning.",
        cost: "$20 - $40",
        vetVisits: "Annual checkups, dental care.",
        healthConditions: "Scurvy, respiratory infections."
    },
    {
        name: "Abyssinian Guinea Pig",
        image: "../images/abyssinian-guinea-pig.jpg",
        diet: "Hay-based diet with fresh greens and pellets.",
        activityLevel: "High, very active and playful.",
        care: "Requires regular grooming due to rosettes.",
        cost: "$25 - $45",
        vetVisits: "Routine health checks.",
        healthConditions: "Skin issues, respiratory problems."
    },
    {
        name: "Peruvian Guinea Pig",
        image: "../images/peruvian-guinea-pig.jpg",
        diet: "Hay, fresh vegetables, limited pellets.",
        activityLevel: "Moderate, enjoys socializing.",
        care: "Needs daily grooming due to long hair.",
        cost: "$30 - $50",
        vetVisits: "Annual exams, dental care.",
        healthConditions: "Matted fur, scurvy."
    },
    {
        name: "Silkie Guinea Pig",
        image: "../images/silkie-guinea-pig.jpg",
        diet: "Quality hay, veggies, and guinea pig pellets.",
        activityLevel: "Moderate, calm temperament.",
        care: "Regular grooming to maintain coat.",
        cost: "$30 - $50",
        vetVisits: "Routine checkups.",
        healthConditions: "Skin infections, dental issues."
    },
    {
        name: "Teddy Guinea Pig",
        image: "../images/teddy-guinea-pig.jpg",
        diet: "Hay-based diet with fresh greens and fruits.",
        activityLevel: "High, curious and active.",
        care: "Minimal grooming, regular cage cleaning.",
        cost: "$25 - $45",
        vetVisits: "Annual health checks.",
        healthConditions: "Dry skin, respiratory infections."
    },
    {
        name: "Texel Guinea Pig",
        image: "../images/texel-guinea-pig.jpg",
        diet: "High-quality hay, fresh vegetables, pellets.",
        activityLevel: "Moderate, friendly demeanor.",
        care: "Daily grooming to prevent matting.",
        cost: "$35 - $60",
        vetVisits: "Routine exams.",
        healthConditions: "Skin issues, scurvy."
    },
    {
        name: "Rex Guinea Pig",
        image: "../images/rex-guinea-pig.jpg",
        diet: "Hay, veggies, small amount of pellets.",
        activityLevel: "Moderate, enjoys interaction.",
        care: "Minimal grooming, regular socialization.",
        cost: "$25 - $45",
        vetVisits: "Annual checkups.",
        healthConditions: "Skin conditions, dental problems."
    },
    {
        name: "Himalayan Guinea Pig",
        image: "../images/himalayan-guinea-pig.jpg",
        diet: "Hay-based diet, fresh greens, limited fruits.",
        activityLevel: "Moderate, sociable and calm.",
        care: "Minimal grooming, sensitive to cold.",
        cost: "$30 - $50",
        vetVisits: "Regular health checks.",
        healthConditions: "Respiratory issues, scurvy."
    },
    {
        name: "Coronet Guinea Pig",
        image: "../images/coronet-guinea-pig.jpg",
        diet: "Quality hay, vegetables, guinea pig pellets.",
        activityLevel: "Moderate, enjoys companionship.",
        care: "Regular grooming due to long hair.",
        cost: "$35 - $60",
        vetVisits: "Routine checkups.",
        healthConditions: "Matted fur, dental issues."
    },
    {
        name: "Skinny Pig",
        image: "../images/skinny-pig.jpg",
        diet: "Hay, fresh veggies, limited pellets.",
        activityLevel: "High, very active.",
        care: "Needs warm environment, skin care.",
        cost: "$50 - $80",
        vetVisits: "Regular health checks.",
        healthConditions: "Skin infections, sunburn."
    },
    {
        name: "Baldwin Guinea Pig",
        image: "../images/baldwin-guinea-pig.jpg",
        diet: "Hay-based diet with vegetables and fruits.",
        activityLevel: "Moderate, friendly nature.",
        care: "Requires warm habitat, skin moisturization.",
        cost: "$60 - $90",
        vetVisits: "Routine exams.",
        healthConditions: "Skin issues, temperature sensitivity."
    },
    {
        name: "Sheba Mini Yak",
        image: "../images/sheba-mini-yak.jpg",
        diet: "High-quality hay, greens, small amount of pellets.",
        activityLevel: "Moderate, playful.",
        care: "Daily grooming due to messy coat.",
        cost: "$40 - $70",
        vetVisits: "Annual checkups.",
        healthConditions: "Matted fur, skin problems."
    },
    {
        name: "Merino Guinea Pig",
        image: "../images/merino-guinea-pig.jpg",
        diet: "Hay, fresh vegetables, guinea pig pellets.",
        activityLevel: "Moderate, enjoys attention.",
        care: "Regular grooming to maintain curly coat.",
        cost: "$35 - $60",
        vetVisits: "Routine health checks.",
        healthConditions: "Skin conditions, scurvy."
    },
    {
        name: "Cuy Guinea Pig",
        image: "../images/cuy-guinea-pig.jpg",
        diet: "Large amounts of hay, veggies, pellets.",
        activityLevel: "Low to moderate, larger size.",
        care: "Requires larger cage, minimal grooming.",
        cost: "$50 - $80",
        vetVisits: "Regular health screenings.",
        healthConditions: "Obesity, respiratory issues."
    },
    {
        name: "Lunkarya Guinea Pig",
        image: "../images/lunkarya-guinea-pig.jpg",
        diet: "Quality hay, fresh greens, limited pellets.",
        activityLevel: "Moderate, sociable.",
        care: "Daily grooming to prevent matting.",
        cost: "$40 - $70",
        vetVisits: "Annual exams.",
        healthConditions: "Skin problems, scurvy."
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
