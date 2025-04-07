document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.style.right === '0px') {
        menu.style.right = '-300px'; // Скрываем меню
    } else {
        menu.style.right = '0px'; // Показываем меню
    }
});



// Получаем модальное окно
var modal = document.getElementById("contact-modal");
// Получаем кнопку, которая открывает модальное окно
var btn = document.getElementById("open-modal");
// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];
// Когда пользователь нажимает на кнопку, открывается модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}
// Когда пользователь нажимает на <span> (x), закрывается модальное окно
span.onclick = function() {
    modal.style.display = "none";
}
// Когда пользователь нажимает в любом месте вне модального окна, оно закрывается
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Обработчик для кнопки "Отправить"
document.getElementById("submit-button").onclick = function() {
    // Здесь можно добавить логику для обработки отправки формы
    alert("Форма отправлена!");
    modal.style.display = "none"; // Закрываем модальное окно после отправки
}
