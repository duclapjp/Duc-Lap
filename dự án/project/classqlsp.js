class Product {
    //Tên sản phẩm	Gía thành	Số lượng	Mô tả
    constructor(name,price,quantity,description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
    getName(name){
        return this.name;
    }
    getPrice(price){
        return this.price;
    }
    getQuantity(quantity){
        return this.quantity;
    }
    getDescription(description){
        return this.description;
    }
    setName(newName){
        this.name = newName;
    }
    setPrice(newPrice){
        this.price = newPrice;
    }
    setQuantity(newQuantity){
        this.quantity = newQuantity;
    }
    setDescription(newDescription){
        this.description = newDescription;
    }
}