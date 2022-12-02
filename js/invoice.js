const container = document.getElementById("payment-details");
const paymentDetails = JSON.parse(localStorage.getItem("paymentDetails"));

const basketContainer = document.getElementById("basket");
const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");

let totalPrice = 0.0;
let itemPrice = 0.0;

// Get all the prices of the movie in the basket
basket.forEach((basketItem) => {
    itemPrice = basketItem.price * basketItem.rentDays;
    itemPrice = itemPrice.toFixed(2);
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
    totalPrice += basketItem.price * basketItem.rentDays;

});
totalPrice = totalPrice.toFixed(2);

// Update the DOM with the payment details
document.getElementById("fname").textContent = paymentDetails.fname;
document.getElementById("lname").textContent = paymentDetails.lname;
document.getElementById("email").textContent = paymentDetails.email;
document.getElementById("adr").textContent = paymentDetails.adr;
document.getElementById("city").textContent = paymentDetails.city;
document.getElementById("county").textContent = paymentDetails.county;
document.getElementById("postcode").textContent = paymentDetails.postcode;

document.getElementById("total-price").textContent = totalPrice;

localStorage.clear();