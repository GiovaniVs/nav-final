const menu = document.getElementById('menu');
const sidevar = document.getElementById('sidevar');
const menuIcon = menu.firstElementChild;
const main = document.getElementById('main'); 
const userBtn = document.getElementById('userBtn');
const dropdown = document.querySelector('.dropdown-menu');


// agregar lel vento clik al manu
menu.addEventListener('click', () => {
    sidevar.classList.toggle('menu-toggle');
    main.classList.toggle('menu-toggle'); 
    if (menuIcon.textContent.trim() === 'menu') {
        menuIcon.textContent = 'arrow_left_alt';
    } else {
        menuIcon.textContent = 'menu';
    }
});
//agregar el evento click al boton de usuario para desplegar el 
userBtn.addEventListener('click', (e) => {
     e.preventDefault(); // evita salto del <a>
    dropdown.classList.toggle('active');
}); 