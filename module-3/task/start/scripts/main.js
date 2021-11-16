console.log('Hello');

//Single line comment

/*--------
Multi line comment
--------*/

let productName = 'nathaniel';
let price = '10.00';
let quantity = 3;
let inStock = true;
let discountAmount = 2;

console.log(productName);
console.log(price);
console.log(quantity);
console.log(inStock);
console.log(discountAmount);

function showProductName(){
    console.log(productName);
}
showProductName();

function totalPrice(productPrice=0, productQuantity=0){
    productPrice = parseFloat(productPrice);
    productQuantity = parseFloat(productQuantity);
    let totalProductPrice = productPrice * productQuantity;
    console.log(totalProductPrice)
}

totalPrice(price, quantity);


//showing the difference between a regular function and an arrow function
function squareNumber(num=0){
    let sum = num * num;
    return sum;
}

var square = num => num * num;

let squaredNumber = squareNumber(3);
console.log(squaredNumber);

let squared = square(3);
console.log(squared)
//showing the difference between a regular function and an arrow function

function productDiscount(){
    let sum;
    if (quantity > 1){
        sum = price * quantity; 
        let discount = discountAmount * quantity;
        sum = sum - discount;
    }else{
        sum = price * quantity;
    }
    console.log(sum);
}
productDiscount();
