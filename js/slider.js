
var links = document.querySelectorAll(".switch-item");
var wrapper = document.querySelector(".slider-content");

var activeLink = 0;

for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    link.itemID = i;
}

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