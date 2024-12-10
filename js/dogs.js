// Dog breeds for the autofill functionality
const breeds = [
    "Labrador Retriever", 
    "German Shepherd", 
    "Golden Retriever", 
    "Bulldog", 
    "Poodle",
    "Beagle",
    "Dachshund",
    "Yorkshire Terrier",
    "Doberman Pinscher",
    "Boxer",
    "Rottweiler",
    "German Shorthaired Pointer",
    "Shih Tzu",
    "Pomeranian",
    "Great Dane"
];

// Search Functionality with Autofill
function searchBreed() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const list = document.getElementById('autocomplete-list');

    breedCards.forEach(card => {
        const breedName = card.querySelector('h3').innerText.toLowerCase();
        if (breedName.includes(input)) {
            card.style.display = 'block';
            currentIndex = Array.from(breedCards).indexOf(card);
        } else {
            card.style.display = 'none';
        }
    });
}

// Function for autofill
document.getElementById('searchInput').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const list = document.getElementById('autocomplete-list');
    list.innerHTML = ''; // Clear previous suggestions

    if (!input) return; // Exit if input is empty

    breeds.forEach(breed => {
        if (breed.toLowerCase().includes(input)) {
            const suggestion = document.createElement('div');
            suggestion.innerHTML = breed;
            suggestion.onclick = () => {
                document.getElementById('searchInput').value = breed;
                list.innerHTML = ''; // Clear the list after selection
                searchBreed(); // Trigger search on selection
            };
            list.appendChild(suggestion);
        }
    });
});

// Script for Carousel Navigation
let currentIndex = 0;
const breedCards = document.querySelectorAll('.breed-card');

function showBreed(index) {
    breedCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

function nextBreed() {
    currentIndex = (currentIndex + 1) % breedCards.length;
    showBreed(currentIndex);
}

function prevBreed() {
    currentIndex = (currentIndex - 1 + breedCards.length) % breedCards.length;
    showBreed(currentIndex);
}

// Show the first breed by default
showBreed(currentIndex);
