const toggleMenu = document.getElementById('toggleMenu');

toggleMenu.addEventListener('click' , function(){
   const NavbarMenu = document.getElementById('NavbarMenu');
   NavbarMenu.classList.toggle('active')
})