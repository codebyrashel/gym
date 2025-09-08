// Mobile Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleMenu = document.getElementById('toggleMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (toggleMenu && mobileMenu) {
    toggleMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }
  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }
});