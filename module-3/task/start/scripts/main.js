console.log('Hello');

//Single line comment

/*--------
Multi line comment
--------*/

let productName = 'ball';
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
    } else {
        sum = price * quantity;
    }
    console.log(sum);
}
productDiscount();












//Create a function called drink order that takes 2 parameters {size} and {drink}
function drinkOrder(size,drink){
    // VALIDATE the variables passed through
    if(size != 'small' && size != 'medium' && size != 'large'){
        console.log('You have ordered a size we don\'t sell')
        return;
    }
    let message = 'You have ordered a ' + size;
    //SWITCH {drink}
    switch(drink){
        case 'cola':
            message += ' Coca-Cola';
            break;
        case 'lemon':
            message += ' Schwepps';
            break;
        case 'orange':
            message += ' Tango';
            break;
        default:
            message = 'You have ordered a size we don\'t sell';
            break;
    }
    //RETURN message
    console.log(message);
}

drinkOrder('grande');
drinkOrder('small','cola');
drinkOrder('medium','orange');
drinkOrder('large','lemon')


//FUNCTION calculator {num1} {num2}{operator}
function calculator(num1,num2,operator){
    //VALIDATE all data
    if(isNaNValidator(num1)){
       return 'Number 1 is not a number';
    }
    if(isNaNValidator(num2)){
        return 'Number 2 is not a number';
    } 
    //SWITCH {operator}
    let sum;
    switch(operator){
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '/':
            sum = num1 / num2;
            break;
        case '*':
            sum = num1 * num2;
            break;
        case '%':
            sum = num1 % num2;
            break;
        default:
            return 'Operator is not recognised';
    }
    //RETRUN sum
    return sum;
 
}

function isNaNValidator(number){
    return isNaN(number)

}


let sum1=calculator(10,2,'+');
let sum2=calculator(10,2,'-');
let sum3=calculator(10,2,'/');
let sum4=calculator(10,2,'*');
let sum5=calculator(10,2,'%');
let sum6=calculator(1,'nathaniel');
let sum7=calculator('nathaniel');
let sum8=calculator(1,1,'nathaniel');
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);
console.log(sum6);
console.log(sum7);
console.log(sum8);



let arrProductData = [
    productName,
    price,
    quantity,
    inStock,
    discountAmount,
];

console.log(arrProductData);
console.log(arrProductData[0]);
console.log(arrProductData[4]);

let objProductData = {
    'productName':productName,
    'price':price,
    'quantity':quantity,
    'inStock':inStock,
    'discountAmount':discountAmount,
};
console.log(objProductData.productName);
objProductData['productName'] = 'light bulbs';
console.log(objProductData.productName);

objProductData.nathanielExample1 = 'this is new data'
objProductData['nathanielExample2'] = 'wahoo';
console.log(objProductData);


function outputTimesTable(number){
    for(counter=1;counter<=12;counter++){
        let sum = counter * number;
        let strMessage = counter + '*' + number + '=' + sum;
        console.log(strMessage)
    }
}

for(multiplyer=1;multiplyer<=12;multiplyer++){
    outputTimesTable(multiplyer);
} 
