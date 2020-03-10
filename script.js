const execute = document.getElementById("like");
execute.style.color = "red";
execute.textContent = "Get out!";

if ("nomu" === "nomuhyun") {
    console.log("ungi");
}
else if ("owl" === "owl") {
    console.log("alive")
}
else {
    console.log("nondoorung");
}
//노무와 노무현이 같으면 운지 출력
//다르면 부엉이랑 부엉이가 같냐? 를 보고
//같으면 얼라이브 출력 아니면 논두렁 출력

if ("nomu" === "MB" || 7>4) {
    //|| stands for OR
    //&& stands for AND
    console.log("prisoner");
}
else {
    console.log("ungi");
}

const age = prompt('How old are you?');

if (age >= 18 && age <= 21) {
    console.log("You can drink but you should not");
} else if (age > 21) {
    console.log("You can drink!");
} else {
    console.log("You cant");
}

const selectTitle = document.querySelector('#like');

const BASE_COLOR = "red";
const OTHER_COLOR = "grey";

function handleClick() {
    if (selectTitle.style.color === BASE_COLOR) {
        selectTitle.style.color = OTHER_COLOR;
    } else {
        selectTitle.style.color = BASE_COLOR;
    }
}

function init() {
    selectTitle.style.color = BASE_COLOR;
    selectTitle.addEventListener("click", handleClick);
}
init();
