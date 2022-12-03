function storeData() {
    // Create an array of the form input field ids
    const formInputs = ["fname", "lname", "email", "adr", "city", "county", "postcode", "cname", "ccnum", "expmonth", "expyear", "cvv"];
    // Initialize an object to store the form data
    const formData = {};
    // Loop through the form input ids
    formInputs.forEach((inputId) => {
    // Add the value of each form input to the form data object
      formData[inputId] = document.getElementById(inputId).value;
    })
    // Store the form data in local storage
    localStorage.setItem("paymentDetails", JSON.stringify(formData));
    // Return true to indicate that the data was successfully stored
    return true;
}

// Retrieve the HTML element for the shopping basket
const basketContainer = document.getElementById("basket");
// Retrieve the shopping basket from local storage
const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");

// Initialize the total price and item price to 0
let totalPrice = 0.0;
let itemPrice = 0.0;

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
// Update the total price in the HTML DOM
document.getElementById("total-price").textContent = totalPrice;
