const addProductForm = document.querySelector(".form-add-product");
const nameInput=document.querySelector('[name="product-name"]');
const srcInput=document.querySelector('[name="product-url"]');
const priceInput=document.querySelector('[name="product-price"]');
const productUl = document.querySelector('.products-list');

const addProductToShop = event => {
    event.preventDefault();
    const name = nameInput.value;
    const src_url = srcInput.value;
    const price = Number(priceInput.value);
    const newRow = document.createElement('div');
    const newCol = document.createElement('div');
    const newLi = document.createElement("li");
    const newStrong = document.createElement("strong");
    const newBtn = document.createElement("button");
    const newBr = document.createElement("br");
    const newImg = document.createElement("img");
    const newPrice = document.createTextNode(`  ${price.toFixed(2)} zł`);
    newRow.classList.add('row');
    newCol.classList.add('col');
    newImg.classList.add('img');
    newBtn.classList.add('btn-buy-product');
    newImg.src = src_url;
    newImg.style = "width:100%";
    newBtn.dataset.name = name;
    newBtn.dataset.price = String(price);
    newStrong.innerText = name;
    newRow.appendChild(newCol);
    newCol.appendChild(newLi);
    newLi.appendChild(newStrong);
    newLi.appendChild(newPrice);
    newLi.appendChild(newImg);
    newLi.appendChild(newBr);
    newLi.appendChild(newBtn);
    newBtn.innerText = "Dodaj do koszyka";
    newBtn.addEventListener('click', event => {
        const name = event.target.dataset.name;
        const price = Number(event.target.dataset.price);

        const newProduct = new Product(name, price);
        basket.add(newProduct);
        createBasketUi();
    });
    productUl.appendChild(newCol);

};

addProductForm.addEventListener("submit", addProductToShop);