const menu = document.getElementById('menu');
const sidevar = document.getElementById('sidevar');
const menuIcon = menu.firstElementChild;
const main = document.getElementById('main'); 

menu.addEventListener('click', () => {
    sidevar.classList.toggle('menu-toggle');
    main.classList.toggle('menu-toggle'); 
    if (menuIcon.textContent.trim() === 'menu') {
        menuIcon.textContent = 'arrow_left_alt';
    } else {
        menuIcon.textContent = 'menu';
    }
});
