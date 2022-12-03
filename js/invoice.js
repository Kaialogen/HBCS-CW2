// Retrieve the payment details from local storage
const paymentDetails = JSON.parse(localStorage.getItem("paymentDetails"));
// Retrieve the HTML element for the shopping basket
const basketContainer = document.getElementById("basket");
// Retrieve the shopping basket from local storage
const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");

// Initialize the total price and item price to 0
let totalPrice = 0.0;
let itemPrice = 0.0;

// Create a date object and retrieve the day, month, and year
let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

// Format the payment date
let paymentDate = `${day}-${month}-${year}`;

// Generate four random numbers for the payment order reference
let paymentOrderRef1 = Math.floor(Math.random() * 9) + 1;
let paymentOrderRef2 = Math.floor(Math.random() * 9) + 1;
let paymentOrderRef3 = Math.floor(Math.random() * 9) + 1;
let paymentOrderRef4 = Math.floor(Math.random() * 9) + 1;

// Loop through each item in the shopping basket
basket.forEach((basketItem) => {
    // Calculate the item price by multiplying the price and number of rental days
    itemPrice = basketItem.price * basketItem.rentDays;
    // Format the item price to two decimal places
    itemPrice = itemPrice.toFixed(2);
    // Insert the item details into the shopping basket in the HTML DOM
    basketContainer.insertAdjacentHTML(
                "beforeend",
                `
                    <tr>
                        <td>${basketItem.name}</td>
                        <td>${basketItem.rentDays}</td>
                        <td>£${itemPrice}</td>
                    </tr>
                `
              );
    // Add the item price to the total price
    totalPrice += basketItem.price * basketItem.rentDays;

});
// Format the total price to two decimal places
totalPrice = totalPrice.toFixed(2);

// Update the payment details in the HTML DOM with the user's payment details
document.getElementById("fname").textContent = paymentDetails.fname;
document.getElementById("lname").textContent = paymentDetails.lname;
document.getElementById("email").textContent = paymentDetails.email;
document.getElementById("adr").textContent = paymentDetails.adr;
document.getElementById("city").textContent = paymentDetails.city;
document.getElementById("county").textContent = paymentDetails.county;
document.getElementById("postcode").textContent = paymentDetails.postcode;

// Update the payment details in the HTML DOM with the payment information, date and order reference
document.getElementById("total-price").textContent = totalPrice;
document.getElementById("payment-date").textContent = paymentDate;
document.getElementById("payment-order-ref-1").textContent = paymentOrderRef1;
document.getElementById("payment-order-ref-2").textContent = paymentOrderRef2;
document.getElementById("payment-order-ref-3").textContent = paymentOrderRef3;
document.getElementById("payment-order-ref-4").textContent = paymentOrderRef4;

// Clear the local storage
localStorage.clear();