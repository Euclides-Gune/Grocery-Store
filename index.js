let showListBtn = document.getElementById('show-links');
let linksList = document.getElementsByClassName('links')[0];
let navbar = document.getElementsByTagName('nav')[0];

showListBtn.addEventListener('click', () => {
    if(linksList.style.display == "none") {
        navbar.style.height = '120px';
        linksList.style.display = 'block';
    } else {
        navbar.style.height = '50px';
        linksList.style.display = 'none';
    }
});

let cartButton = document.getElementsByClassName('cart-button')[0];

cartButton.addEventListener('click', () => {
    let cartProductsList = document.getElementsByClassName('cart-products-list')[0];
    if(cartProductsList.style.display == "none") {
        cartProductsList.style.display = "block";
    } else {
        cartProductsList.style.display = "none"
    }
});

let cartProducts = document.getElementsByClassName('cart-products')[0];

let displayTotal = document.getElementsByClassName('cart-products-list')[0].children[1].children[0].children[0];

let total = Number(document.getElementsByClassName('cart-products-list')[0].children[1].children[0].children[0].textContent);

function addToCart(element) {
    let image = element.parentElement.parentElement.children[0].children[0].getAttribute('src');
    let title = element.parentElement.children[0].textContent;
    let price = Number(element.parentElement.children[1].children[0].textContent);

    cartProducts.innerHTML += `<div class="cart-product">
                <img src="${image}" alt="">

                <div class="details">
                    <span class="cart-name">${title}</span>
                <span class="material-symbols-outlined remove" onclick="removeProduct(this)">
                    delete
                </span>
                </div>
            </div>`;
    total += price;
    displayTotal.textContent = total;
}

function removeProduct(element) {
    let product = element.parentElement.parentElement;

    product.remove();

}