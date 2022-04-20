
const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketUl = document.querySelector('.basket-list');
const delBtn = document.querySelector('.btn-buy-all');

const basket = new Basket();


const createBasketUi = () => {
    basketUl.innerText = '';
    const summary = basket.showBasket();
    for(const oneProductInfo of summary){
        const newLi = document.createElement('li');
        newLi.innerText= oneProductInfo;
        basketUl.appendChild(newLi);
    }

}

for (const btn of buyBtns){
    btn.addEventListener('click', event => {
        const name = event.target.dataset.name;
        const price = Number(event.target.dataset.price);

        const newProduct = new Product(name, price);
        basket.add(newProduct);
        createBasketUi();
    });
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
