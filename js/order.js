function storeData() {
    // Collect all form data for use in the invoice
    const formInputs = ["fname", "lname", "email", "adr", "city", "county", "postcode", "cname", "ccnum", "expmonth", "expyear", "cvv"];
    const formData = {};
    formInputs.forEach((inputId) => {
      formData[inputId] = document.getElementById(inputId).value;
    })
    localStorage.setItem("paymentDetails", JSON.stringify(formData));
    return true;
}


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

function validateData(){
    var postcode_check = document.getElementById("postcode").value;
    var postcode_regex = /^(GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\d{1,4})$/;
    var postcodes = String(postcode_check).match(postcode_regex);
    var first_check = document.getElementById("fname").value;
    var last_check = document.getElementById("lname").value;
    var payment_name_check = document.getElementById("cname").value;
    var check_card_number = document.getElementById("ccnum").value;
    var check_card_number1 = document.getElementById("cardnumber1").value;
    var check_card_number2 = document.getElementById("cardnumber2").value;
    var check_card_number3 = document.getElementById("cardnumber3").value;
    var check_expiration_month = document.getElementById("expmonth").value;
    var check_expiration_year = document.getElementById("expyear").value;
    var ccv_check = document.getElementById("ccv").value;
    var country_check = document.getElementById("county").value;
    let deliveryname = title_check + " " + first_check + " " + last_check;
    let nameRegex = /^[a-z ,.'-]+$/i
    let cardNumberRegex = /[^<>%\$a-zA-Z]{4,4}/  // just numbers and only 4 characters regex
    let date = new Date();
    var mm = date.getMonth();
    var yyyy = date.getFullYear();
    //currentYear = mm + " " + yyyy
    cardyear = check_expiration_month + " " + check_expiration_year
    let ccvRegex = /^[0-9]{3}$/
    
    if (nameRegex.test(deliveryname) == false){
        alert("Please enter a valid order name");
        event.preventDefault();
        return false;
    }
    else if (nameRegex.test(payment_name_check) == false){
        alert("Please enter a valid cardholder name");
        event.preventDefault();
        return false;
    }
    else if (cardNumberRegex.test(check_card_number) == false || cardNumberRegex.test(check_card_number1) == false || cardNumberRegex.test(check_card_number2) == false || cardNumberRegex.test(check_card_number3) == false){
        alert("Please enter a valid card number");
        event.preventDefault();
        return false;
    }
    else if ((yyyy > check_expiration_year) || (yyyy == check_expiration_year & mm < check_expiration_month)){
        alert("Please enter a valid expiration date");
        event.preventDefault();
        return false;
    }
    else if (ccvRegex.test(ccv_check) == false){
        alert("Please enter a valid ccv");
        event.preventDefault();
        return false;
    }
    else if (postcodes == null){
        if (country_check == "United Kingdom") {
            alert("Please enter a valid postcode");
            event.preventDefault();
            return false;
        }
    }
    else{
        storeData();
        return true;
    }
}