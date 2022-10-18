const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

// Open menu when clicking the menu button
menuBtn.addEventListener('click', function () {
    if (menuBtn.classList.contains('open')) {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
    }
    else {
        menu.classList.add('open');
        menuBtn.classList.add('open');
    }
});

// Close menu when clicking on any item
menu.addEventListener('click', function () {
    if (menuBtn.classList.contains('open')) {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
    }
    else {
        menu.classList.add('open');
        menuBtn.classList.add('open');
    }
});