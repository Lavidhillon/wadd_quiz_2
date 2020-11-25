class Food {
    constructor(description, price) {
        this.price = price;
        this.description = description;
    }
    changePrice(newPrice) {
        this.price = newPrice;
    }
}
const milk = new Food("Organic Cow's Milk", 6);
const avocado = new Food("Hass Avocado", 4.99);
console.log(milk);
console.log(avocado);
avocado.changePrice(3.49);
console.log(avocado);


class Supermarket {
    constructor(name) {
        this.name = name;
    }
    foods = [];
    add(food) {
        this.foods.push(food);
        return this;
    }
    filterByPrice(givenPrice){
    return this.foods.filter((food) => food.price <= givenPrice);
    }   
    catalogue(){
        return this.foods;
    }

}
const sam = new Supermarket("Sam's Supermarket");
sam.add(milk).add(avocado);
sam.catalogue();
console.log(sam);
