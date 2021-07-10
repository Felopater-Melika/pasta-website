import * as header from './components/header';

console.log(header.ham);
header.ham.addEventListener("click", () => {
    header.ham.classList.toggle("active");
    header.cont.classList.toggle("active");
});