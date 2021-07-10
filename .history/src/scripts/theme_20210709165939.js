import * as header from './components/header';

ham.addEventListener("click", () => {
    ham.classList.toggle("is-active");
    cont.classList.toggle("is-active");
});
for (let i = 0; i < 2; i++) {
    show[i].addEventListener("click", () => {
        hidden[i].classList.toggle('hide')
    })

}