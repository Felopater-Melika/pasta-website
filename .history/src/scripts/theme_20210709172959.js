import * as header from './components/header';


header.ham.addEventListener("click", () => {
    header.ham.classList.toggle("is-active");
    header.cont.classList.toggle("is-active");
});
for (let i = 0; i < 2; i++) {
    header.show[i].addEventListener("click", () => {
        header.hidden[i].classList.toggle('hide')
    })

}