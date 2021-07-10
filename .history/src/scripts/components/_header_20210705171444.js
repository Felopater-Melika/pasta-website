const ham = document.querySelector(".toggle");
const cont = document.querySelector(".container");
ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    cont.classList.toggle("active");
});