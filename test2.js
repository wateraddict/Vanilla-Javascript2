const title = document.querySelector("#abc");

const CLICKED_CLASS = "clicked";

function handlerClick () {
    //title 객체의 classname이 clicked와 같지 않으면
    //class값을 clicked로 주라는 말이고 같으면 공백
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}
//Unlike className, classList can use function that belongs to it.
function init() {
    title.addEventListener("click", handlerClick);
}
init();

//and there's some problems on the web page.
//If We define new class like btn on .html file, That class 'clicked' we already defined can't work anymore.
//So how we can ignore the previous one? 

//Let's go to the test3.js