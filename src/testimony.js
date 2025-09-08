const cards = document.querySelectorAll("#testimonial-slider .testimonial-card");
const dots = document.querySelectorAll("#dots span");

let groupIndex = 0; // 0 = first 3, 1 = last 3
const groupSize = 3;
const totalGroups = Math.ceil(cards.length / groupSize);

function showGroup(index, animate = true) {
  // Hide all cards first
  cards.forEach(card => {
    card.style.display = "none";
    card.classList.remove("shadow-lg", "-translate-y-6", "z-10", "opacity-0", "opacity-100", "transition-all", "duration-500");
  });

  // Show only the group of 3
  for (let i = 0; i < groupSize; i++) {
    const cardIdx = index * groupSize + i;
    if (cards[cardIdx]) {
      cards[cardIdx].style.display = "";
      // Animation
      if (animate) {
        cards[cardIdx].classList.add("opacity-0", "transition-all", "duration-500");
        setTimeout(() => {
          cards[cardIdx].classList.remove("opacity-0");
          cards[cardIdx].classList.add("opacity-100");
        }, 10);
      } else {
        cards[cardIdx].classList.add("opacity-100");
      }
      // Middle card raised
      if (i === 1) {
        cards[cardIdx].classList.add("shadow-lg", "-translate-y-6", "z-10");
      } else {
        cards[cardIdx].classList.add("shadow-md", "translate-y-0");
      }
    }
  }

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.remove("bg-purple-600");
    dot.classList.add("bg-gray-400");
    if (i === index) {
      dot.classList.add("bg-purple-600");
      dot.classList.remove("bg-gray-400");
    }
  });

  groupIndex = index;

  cards.forEach(card => card.classList.remove('js-hide'));
}

// Dots navigation
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showGroup(i));
});

// Auto cycle every 5s
let interval = setInterval(() => {
  let nextGroup = (groupIndex + 1) % totalGroups;
  showGroup(nextGroup);
}, 5000);

// Pause auto cycle on hover
cards.forEach(card => {
  card.addEventListener('mouseenter', () => clearInterval(interval));
  card.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      let nextGroup = (groupIndex + 1) % totalGroups;
      showGroup(nextGroup);
    }, 5000);
  });
});

// Responsive: always show all on desktop
function handleResize() {
  if (window.innerWidth >= 768) {
    // Show all cards, raise the middle one in each group
    cards.forEach((card, i) => {
      card.style.display = "";
      card.classList.remove("opacity-0", "opacity-100", "transition-all", "duration-500");
      card.classList.remove("shadow-lg", "-translate-y-6", "z-10", "shadow-md", "translate-y-0");
      // Raise the middle card of each group of 3
      if (i % 3 === 1) {
        card.classList.add("shadow-lg", "-translate-y-6", "z-10");
      } else {
        card.classList.add("shadow-md", "translate-y-0");
      }
    });
    // Highlight first dot
    dots.forEach((dot, i) => {
      dot.classList.remove("bg-purple-600");
      dot.classList.add("bg-gray-400");
      if (i === 0) {
        dot.classList.add("bg-purple-600");
        dot.classList.remove("bg-gray-400");
      }
    });
  } else {
    showGroup(groupIndex, false);
  }
}

window.addEventListener('resize', handleResize);

// Init
handleResize();

// Remove js-hide from all cards after JS runs (so slider works)
cards.forEach(card => card.classList.remove('js-hide'));
