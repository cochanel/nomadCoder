const title = document.querySelector("#title");

function handelClick() {
    title.style.color = "yellow";
}

title.addEventListener("click",handelClick);