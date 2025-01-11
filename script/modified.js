let date = new Date();
let content = document.querySelector("#date_time");
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getSeconds();
content.innerHTML = `${day}/${month}/${year} ${hour}:${minutes}`


let toggle = document.getElementById("toggle");
let nav = document.querySelector(".navigation");
toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
})