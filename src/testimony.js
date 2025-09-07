const cards = document.querySelectorAll("#testimonial-slider .testimonial-card");
const dots = document.querySelectorAll("#dots span");

let currentIndex = 1; // middle card active

function updateSlider(index) {
    cards.forEach((card, i) => {
        card.classList.remove("shadow-lg", "-translate-y-6", "z-10");
        card.classList.add("shadow-md", "translate-y-0");

        if (i === index) {
            card.classList.add("shadow-lg", "-translate-y-6", "z-10");
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.remove("bg-purple-600");
        dot.classList.add("bg-gray-400");
        if (i === index) {
            dot.classList.add("bg-purple-600");
        }
    });

    currentIndex = index;
}

// Dots navigation
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => updateSlider(i));
});

// Auto cycle every 5s
setInterval(() => {
    let nextIndex = (currentIndex + 1) % cards.length;
    updateSlider(nextIndex);
}, 5000);

// Init
updateSlider(currentIndex);
