import * as header from './components/header';
import * as cart from '@shopify/theme-cart';
header.ham.addEventListener("click", () => {
    header.ham.classList.toggle("is-active");
    header.cont.classList.toggle("is-active");
});

for (let i = 0; i < 2; i++) {
    header.show[i].addEventListener("click", () => {
        header.hide[i].classList.toggle('hidden')
    })
}

const addToCart = document.querySelectorAll('.cart');

function atc(event) {

    let items = event.target.getAttribute('product-id');

    return fetch('/cart/add.js', {
        body: JSON.stringify({ items }),
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'xmlhttprequest'
        },
        method: 'POST'
    }).then((res) => res.json()).catch((error) => error);
}

addToCart[6].addEventListener('click', cart.getState())