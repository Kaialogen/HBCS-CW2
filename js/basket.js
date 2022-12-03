
    //added to fix basket reloading
    function ClearBasket()
    {
      //Function to clear basket array and refresh page
      localStorage.setItem('basket', '[]');
      window.location.reload();
    }

    //check if basket is empty
    function CheckBasket()
    {
      if (document.getElementById("total-price").textContent == 0.0){
        alert("Basket is empty!")
      }
      else {
        window.location.href='http://localhost:8080/order.html';
      }
    }
    
    const basketContainer = document.getElementById("basket");

    function removemovie(movieinput){
      const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");
      const save = JSON.parse(localStorage.getItem("save") ?? "[]");
      const moviename = movieinput.split(".")[0];
      basket.splice(save.indexOf(moviename), 1);
      save.splice(save.indexOf(moviename), 1);
      localStorage.setItem("basket", JSON.stringify(basket));
      localStorage.setItem("save", JSON.stringify(save));
      window.location.reload();
      }
  
      function adddays(movieinput){
        const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");
        const save = JSON.parse(localStorage.getItem("save") ?? "[]");
        const moviename = movieinput.split(".")[0];
        if (basket[save.indexOf(moviename)].rentDays < 30){
            basket[save.indexOf(moviename)].rentDays += 1;
            localStorage.setItem("basket", JSON.stringify(basket));
            window.location.reload();
        }
        else{
            alert("Sorry you cannot rent a movie longer than 30 days.");
        }
        
    }
  
  function subdays(movieinput){
      const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");
      const save = JSON.parse(localStorage.getItem("save") ?? "[]");
      const moviename = movieinput.split(".")[0];
      if (basket[save.indexOf(moviename)].rentDays > 1){
          basket[save.indexOf(moviename)].rentDays -= 1;
          localStorage.setItem("basket", JSON.stringify(basket));
          window.location.reload();
      }
      else{
          basket.splice(save.indexOf(moviename), 1);
          save.splice(save.indexOf(moviename), 1);
          localStorage.setItem("basket", JSON.stringify(basket));
          localStorage.setItem("save", JSON.stringify(save));
          window.location.reload();
      }
      
  }

    const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");
    const save = JSON.parse(localStorage.getItem("save") ?? "[]");


    let totalPrice = 0.0;
    let itemPrice = 0.0;

    basket.forEach((basketItem) => {
        itemPrice = basketItem.price * basketItem.rentDays;
        itemPrice = itemPrice.toFixed(2);
        save.push(basketItem.name);
        index = save.indexOf(basketItem.name);
      basketContainer.insertAdjacentHTML(
        "beforeend",
        `
            <tr>
                <td><a id="${basketItem.name}.rem" onclick="removemovie(this.id)" class="red-x">x</a> ${basketItem.name}</td>
                <td><a id="${basketItem.name}.neg" onclick="subdays(this.id)" class="neg">-</a> ${basketItem.rentDays} <a id="${basketItem.name}.add" onclick="adddays(this.id)" class="add">+</a> </td>
                <td>£${itemPrice}</td>
            </tr>
        `
      );
      totalPrice += basketItem.price * basketItem.rentDays;
    });
    totalPrice = totalPrice.toFixed(2);
    //changed the value of 1.2 to 1 (no clue what the 1.2 did? maybe vat?)
    document.getElementById("total-price").textContent = totalPrice;
