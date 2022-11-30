function storeData() {
    // Collect all form data for use in the invoice
    const formInputs = ["fname", "email", "adr", "city", "county", "postcode", "cname", "ccnum", "expname", "expyear", "cvv"];
    const formData = {};
    formInputs.forEach((inputId) => {
      formData[inputId] = document.getElementById(inputId).value;
    })
    localStorage.setItem("paymentDetails", JSON.stringify(formData));

    window.location.href='/invoice.html';
  }

  const container = document.getElementById("payment-details");
  const paymentDetails = JSON.parse(localStorage.getItem("paymentDetails"));


  const basketContainer = document.getElementById("basket");
  const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");

  let totalPrice = 0.0;
  let itemPrice = 0.0;

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
  document.getElementById("total-price").textContent = totalPrice;
