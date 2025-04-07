document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.style.right === '0px') {
        menu.style.right = '-300px'; // Скрываем меню
    } else {
        menu.style.right = '0px'; // Показываем меню
    }
});
