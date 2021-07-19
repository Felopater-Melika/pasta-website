import * as header from './components/header';
import * as hero from './components/hero';


header.ham.addEventListener("click", () => {
    header.ham.classList.toggle("is-active");
    header.cont.classList.toggle("is-active");

});
for (let i = 0; i < 2; i++) {
    header.show[i].addEventListener("click", () => {
        header.hide[i].classList.toggle('hidden')
    })

}

hero.down.addEventListener('click', function() {
    window.scrollTo({
        top: 500,
        left: 0,
        behavior: 'slow'
    })
})