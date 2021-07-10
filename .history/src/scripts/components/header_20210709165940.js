export const ham = document.querySelector(".hamburger");
export const cont = document.querySelector("ul");
export const show = document.querySelectorAll(".show");
export const hidden = document.querySelectorAll(".hidden")
ham.addEventListener("click", () => {
    ham.classList.toggle("is-active");
    cont.classList.toggle("is-active");
});
for (let i = 0; i < 2; i++) {
    show[i].addEventListener("click", () => {
        hidden[i].classList.toggle('hide')
    })

}