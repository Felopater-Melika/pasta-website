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

// console.log(addToCart[6].getAttribute('product-variant'));
cart.getState().then(state => {
    console.log(`Cart State: ${state}`);
});


// console.info(cart);

function atc(event) {

    let items = event.target.getAttribute('product-id');
    console.log(cart.getItem);

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
addToCart[0].addEventListener('click', () => console.log('added to cart'))