const title = document.querySelector("#abc");

const CLICKED_CLASS = "clicked";

function handlerClick () {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
      title.classList.add(CLICKED_CLASS);
  }  else {
      title.classList.remove(CLICKED_CLASS);
  }
}
//toggle is an method that works as function on javescript.
//So we can use toggle method to substitute our fuckin if, else grammer.
//For example, 
//function handlerClick () {
//  title.classList.toggle(CLICKED_CLASS);
//  }
//It means that when You click title, toggle adds class(.clicked) on your .html automatically
// !== : not equal
// ! : not

function init() {
    title.addEventListener("click", handlerClick);
}
init();