class Basket {
    constructor(){
        this.items= [];
        this.totalValue= 0;
    }

    add(item){
        this.items.push(item);
    }
    getTotalValue(){
        return this.items.reduce((prev, curr) => prev + curr.price, 0);
    }
    showBasket(){
        return this.items
            .map((product, i) => `${i+1} - ${product.name} - ${product.price.toFixed(2)} zł`)

    }
    remove(no){
        this.items.splice(no-1, 1);
    }
}

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    setNewPrice(newPrice){
        this.price = newPrice;
    }
}

