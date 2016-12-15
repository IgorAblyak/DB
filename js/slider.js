// просто запрашиваем DOM... будто просим разрешение у босса!
var links = document.querySelectorAll(".switch-item");
var wrapper = document.querySelector(".slider-content");

// activeLink обеспечивает метку для активного элемента
var activeLink = 0;

// устанавливаем отслеживание событий
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    // определяем элемент для activeLink
    link.itemID = i;
}

// устанавливаем первый элемент в качестве активного
links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();
    resetTimer();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

// Обработчик изменяет позицию слайдера, после того, как мы убедились,
// что в качестве активной обозначена нужная нам ссылка.
function changePosition(link) {
    link.classList.add("active");

    var position = link.getAttribute("data-pos");
    wrapper.style.left = position;
}

//
// Код для автоматической смены слайдов
//
var timeoutID;

function startTimer() {
    // ожидание в течение 2 секунд перед вызовом goInactive
    timeoutID = window.setInterval(nextItem, 7500);
}
startTimer();

function resetTimer() {
    window.clearInterval(timeoutID);
    startTimer();
}

function nextItem() {
    removeActiveLinks();

    if (activeLink < links.length - 1) {
        activeLink++;
    } else {
        activeLink = 0;
    }

    var newLink = links[activeLink];
    changePosition(newLink);
}