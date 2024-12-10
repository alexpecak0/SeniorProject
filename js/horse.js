const breeds = [
    {
        name: "American Quarter Horse",
        image: "../images/american-quarter-horse.jpg",
        diet: "High-quality hay and grains, access to fresh water.",
        activityLevel: "High, suitable for riding and work.",
        care: "Requires daily exercise, regular grooming.",
        cost: "$2,500 - $10,000",
        vetVisits: "Regular checkups, vaccinations, dental care.",
        healthConditions: "Navicular disease, laminitis."
    },
    {
        name: "Thoroughbred",
        image: "../images/thoroughbred.jpg",
        diet: "High-energy feed, quality hay, supplements as needed.",
        activityLevel: "Very high, bred for racing.",
        care: "Intensive training, regular grooming, stabling.",
        cost: "$5,000 - $30,000",
        vetVisits: "Frequent health checks, joint care.",
        healthConditions: "Bleeding lungs, tendon injuries."
    },
    {
        name: "Arabian",
        image: "../images/arabian.jpg",
        diet: "Balanced diet with hay, grains, and minerals.",
        activityLevel: "High endurance, needs regular exercise.",
        care: "Regular grooming, mental stimulation.",
        cost: "$5,000 - $20,000",
        vetVisits: "Routine exams, dental care.",
        healthConditions: "SCID (genetic immune deficiency), laminitis."
    },
    {
        name: "Appaloosa",
        image: "../images/appaloosa.jpg",
        diet: "Quality hay, grains, fresh water.",
        activityLevel: "Moderate to high, versatile breed.",
        care: "Regular exercise, grooming, hoof care.",
        cost: "$3,000 - $10,000",
        vetVisits: "Routine health checks, eye exams.",
        healthConditions: "Equine recurrent uveitis, night blindness."
    },
    {
        name: "Paint Horse",
        image: "../images/paint-horse.jpg",
        diet: "High-quality forage, grains, access to water.",
        activityLevel: "Moderate, used for riding and work.",
        care: "Regular grooming, exercise, social interaction.",
        cost: "$3,000 - $12,000",
        vetVisits: "Regular checkups, vaccinations.",
        healthConditions: "Genetic disorders like OLWS."
    },
    {
        name: "Miniature Horse",
        image: "../images/miniature-horse.jpg",
        diet: "Hay, minimal grains, careful with overfeeding.",
        activityLevel: "Low to moderate, suitable for small spaces.",
        care: "Regular grooming, hoof care, dental checks.",
        cost: "$1,000 - $7,000",
        vetVisits: "Regular health screenings.",
        healthConditions: "Obesity, dental issues."
    },
    {
        name: "Morgan",
        image: "../images/morgan.jpg",
        diet: "Quality hay, grains, supplements as needed.",
        activityLevel: "Moderate, versatile in disciplines.",
        care: "Regular exercise, grooming, hoof care.",
        cost: "$2,500 - $15,000",
        vetVisits: "Routine exams, dental care.",
        healthConditions: "Insulin resistance, laminitis."
    },
    {
        name: "Tennessee Walking Horse",
        image: "../images/tennessee-walking-horse.jpg",
        diet: "High-quality forage, grains.",
        activityLevel: "Moderate, known for smooth gait.",
        care: "Regular exercise, grooming, hoof care.",
        cost: "$3,000 - $10,000",
        vetVisits: "Routine checkups, hoof inspections.",
        healthConditions: "Equine polysaccharide storage myopathy."
    },
    {
        name: "Clydesdale",
        image: "../images/clydesdale.jpg",
        diet: "Large amounts of hay, grains, supplements.",
        activityLevel: "Moderate, draft work.",
        care: "Requires spacious housing, regular grooming.",
        cost: "$5,000 - $25,000",
        vetVisits: "Regular health checks, hoof care.",
        healthConditions: "Chronic progressive lymphedema."
    },
    {
        name: "American Saddlebred",
        image: "../images/american-saddlebred.jpg",
        diet: "Quality hay, grains, fresh water.",
        activityLevel: "High, used in show riding.",
        care: "Regular exercise, grooming, mental stimulation.",
        cost: "$4,000 - $15,000",
        vetVisits: "Routine exams, dental care.",
        healthConditions: "Lordosis (swayback)."
    },
    {
        name: "Friesian",
        image: "../images/friesian.jpg",
        diet: "Quality forage, grains, supplements.",
        activityLevel: "Moderate, used in dressage.",
        care: "Regular grooming, especially mane and tail.",
        cost: "$7,000 - $30,000",
        vetVisits: "Regular checkups, feather care.",
        healthConditions: "Megaesophagus, dwarfism."
    },
    {
        name: "Gypsy Vanner",
        image: "../images/gypsy-vanner.jpg",
        diet: "High-quality hay, grains, access to pasture.",
        activityLevel: "Moderate, suitable for various disciplines.",
        care: "Extensive grooming, feather care.",
        cost: "$8,000 - $25,000",
        vetVisits: "Routine health checks.",
        healthConditions: "Scratches (skin condition), mites."
    },
    {
        name: "Belgian Draft",
        image: "../images/belgian-draft.jpg",
        diet: "Large quantities of hay, grains.",
        activityLevel: "Moderate, used for draft work.",
        care: "Spacious housing, regular grooming.",
        cost: "$5,000 - $15,000",
        vetVisits: "Regular checkups, hoof care.",
        healthConditions: "JEB (Junctional Epidermolysis Bullosa)."
    },
    {
        name: "Shetland Pony",
        image: "../images/shetland-pony.jpg",
        diet: "Hay, minimal grains, avoid overfeeding.",
        activityLevel: "Moderate, good for children.",
        care: "Regular grooming, hoof care.",
        cost: "$500 - $3,000",
        vetVisits: "Routine exams, dental care.",
        healthConditions: "Obesity, laminitis."
    },
    {
        name: "Warmblood",
        image: "../images/warmblood.jpg",
        diet: "High-quality forage, grains, supplements.",
        activityLevel: "High, used in competitive sports.",
        care: "Regular training, grooming, stabling.",
        cost: "$10,000 - $50,000",
        vetVisits: "Frequent health checks, joint care.",
        healthConditions: "OCD (Osteochondritis Dissecans)."
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
