const breeds = [
    {
        name: "Holland Lop",
        image: "../images/holland-lop.jpg",
        diet: "High-quality hay, fresh vegetables, and pellets.",
        activityLevel: "High, needs plenty of exercise.",
        care: "Requires space to hop, regular grooming.",
        cost: "$20 - $100",
        vetVisits: "Annual checkups, dental care.",
        healthConditions: "Dental issues, ear infections."
    },
    {
        name: "Netherland Dwarf",
        image: "../images/netherland-dwarf.jpg",
        diet: "Hay-based diet with fresh greens and limited pellets.",
        activityLevel: "Moderate, enjoys playtime.",
        care: "Needs social interaction, minimal grooming.",
        cost: "$30 - $80",
        vetVisits: "Regular health checks, dental exams.",
        healthConditions: "Respiratory issues, dental problems."
    },
    {
        name: "Mini Lop",
        image: "../images/mini-lop.jpg",
        diet: "High-quality hay, fresh vegetables, limited pellets.",
        activityLevel: "High, playful and active.",
        care: "Regular exercise, grooming, social interaction.",
        cost: "$35 - $100",
        vetVisits: "Annual checkups, dental care.",
        healthConditions: "Obesity, ear infections."
    },
    {
        name: "Lionhead",
        image: "../images/lionhead.jpg",
        diet: "Hay, fresh veggies, small amount of pellets.",
        activityLevel: "Moderate, enjoys exploring.",
        care: "Regular grooming due to long fur.",
        cost: "$25 - $80",
        vetVisits: "Routine health checks.",
        healthConditions: "Wool block, dental issues."
    },
    {
        name: "Flemish Giant",
        image: "../images/flemish-giant.jpg",
        diet: "Large amounts of hay, vegetables, and pellets.",
        activityLevel: "Moderate, needs space due to size.",
        care: "Requires large housing, regular grooming.",
        cost: "$50 - $150",
        vetVisits: "Regular vet visits, joint checks.",
        healthConditions: "Obesity, sore hocks."
    },
    {
        name: "Rex",
        image: "../images/rex.jpg",
        diet: "Hay-based diet with veggies and pellets.",
        activityLevel: "Moderate, friendly and calm.",
        care: "Minimal grooming, regular exercise.",
        cost: "$20 - $60",
        vetVisits: "Annual exams, dental care.",
        healthConditions: "Skin issues, respiratory problems."
    },
    {
        name: "English Lop",
        image: "../images/english-lop.jpg",
        diet: "High-quality hay, fresh greens, limited pellets.",
        activityLevel: "Low to moderate, laid-back temperament.",
        care: "Regular ear checks, grooming.",
        cost: "$40 - $100",
        vetVisits: "Routine health checks, ear care.",
        healthConditions: "Ear infections, dental issues."
    },
    {
        name: "Dutch",
        image: "../images/dutch.jpg",
        diet: "Hay, fresh vegetables, small amount of pellets.",
        activityLevel: "High, active and sociable.",
        care: "Needs exercise, minimal grooming.",
        cost: "$20 - $50",
        vetVisits: "Annual checkups.",
        healthConditions: "Dental problems, snuffles."
    },
    {
        name: "American Fuzzy Lop",
        image: "../images/american-fuzzy-lop.jpg",
        diet: "Hay-based diet with fresh greens and pellets.",
        activityLevel: "Moderate, playful.",
        care: "Regular grooming due to wooly coat.",
        cost: "$30 - $80",
        vetVisits: "Routine exams, dental care.",
        healthConditions: "Wool block, ear infections."
    },
    {
        name: "Californian",
        image: "../images/californian.jpg",
        diet: "Quality hay, vegetables, limited pellets.",
        activityLevel: "Moderate, friendly demeanor.",
        care: "Requires exercise, minimal grooming.",
        cost: "$20 - $60",
        vetVisits: "Regular health checks.",
        healthConditions: "Ear mites, respiratory issues."
    },
    {
        name: "Angora",
        image: "../images/angora.jpg",
        diet: "Hay-based diet, fresh greens, pellets.",
        activityLevel: "Low to moderate, gentle nature.",
        care: "Daily grooming to prevent matting.",
        cost: "$50 - $120",
        vetVisits: "Routine health checks.",
        healthConditions: "Wool block, skin infections."
    },
    {
        name: "Harlequin",
        image: "../images/harlequin.jpg",
        diet: "Hay, fresh vegetables, limited pellets.",
        activityLevel: "High, curious and active.",
        care: "Needs space to play, minimal grooming.",
        cost: "$20 - $60",
        vetVisits: "Annual exams.",
        healthConditions: "Digestive issues, dental problems."
    },
    {
        name: "Checkered Giant",
        image: "../images/checkered-giant.jpg",
        diet: "Large amounts of hay, veggies, pellets.",
        activityLevel: "High, requires space due to size.",
        care: "Regular exercise, minimal grooming.",
        cost: "$50 - $100",
        vetVisits: "Regular health checks.",
        healthConditions: "Obesity, sore hocks."
    },
    {
        name: "Silver Marten",
        image: "../images/silver-marten.jpg",
        diet: "Quality hay, fresh greens, pellets.",
        activityLevel: "Moderate, friendly and active.",
        care: "Needs exercise, minimal grooming.",
        cost: "$20 - $50",
        vetVisits: "Routine checkups.",
        healthConditions: "Dental issues, snuffles."
    },
    {
        name: "French Lop",
        image: "../images/french-lop.jpg",
        diet: "Hay-based diet with vegetables and pellets.",
        activityLevel: "Moderate, docile temperament.",
        care: "Requires space, regular grooming.",
        cost: "$40 - $100",
        vetVisits: "Annual exams, ear care.",
        healthConditions: "Ear infections, obesity."
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
