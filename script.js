const stars = document.querySelectorAll('.star');
const starContainer = document.getElementById('star-container');
const ratingValueDisplay = document.getElementById('rating-value');
const resetBtn = document.getElementById('reset-btn');

// Selected rating ko state me store karne ke liye variable
let selectedRating = 0;

// 1. Hover Effect (Mouseenter)
stars.forEach(star => {
    star.addEventListener('mouseenter', (e) => {
        const hoverValue = parseInt(e.target.getAttribute('data-value'));
        highlightStars(hoverValue, 'hovered');
    });
});

// 2. Mouse leave hone par hover reset karke clicked rating waapas dikhana
starContainer.addEventListener('mouseleave', () => {
    clearClass('hovered');
    highlightStars(selectedRating, 'filled');
});

// 3. Rating Select Karna (Click)
stars.forEach(star => {
    star.addEventListener('click', (e) => {
        selectedRating = parseInt(e.target.getAttribute('data-value'));
        ratingValueDisplay.textContent = selectedRating;
        
        clearClass('hovered');
        highlightStars(selectedRating, 'filled');
    });
});

// 4. Reset Functionality (Interview Question Answers ke liye help karega)
resetBtn.addEventListener('click', () => {
    selectedRating = 0;
    ratingValueDisplay.textContent = 0;
    clearClass('filled');
    clearClass('hovered');
});

// Helper Function: Stars ko highlight karne ke liye
function highlightStars(val, className) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= val) {
            star.classList.add(className);
        } else {
            star.classList.remove(className);
        }
    });
}

// Helper Function: Extra classes hatane ke liye
function clearClass(className) {
    stars.forEach(star => star.classList.remove(className));
}