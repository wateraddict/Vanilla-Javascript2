const title = document.querySelector("#abc");

const acolor = "rgb(154, 18, 179)";
const bcolor = "grey";

function handlerClick() {
    const currentColor = title.style.color;
    if (currentColor === acolor) {
        title.style.color = bcolor;
    } else {
        title.style.color = acolor;
    }
}

function init() {
    title.style.color = acolor;
    title.addEventListener("mouseenter", handlerClick);
}
init();