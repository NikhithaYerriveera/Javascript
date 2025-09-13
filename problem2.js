let total = 19.5;
let price = 0;

if (total <= 4) {
    price = 30;
} else if (total <= 9) {
    price = 30 + 10;
} else if (total <= 19) {
    price = 30 + 10 + 15;
} else {
    price = 30 + 10 + 15 + 20;
}

console.log("Total Distance: " + total + " km");
console.log("Total Price   : ₹" + price);
