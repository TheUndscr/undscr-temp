const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const logoElement = document.getElementById("logo");

setTimeout(() => {
    titleElement.setAttribute("style", `opacity: ${easeOutExpo(i)};`)
}, 1000)