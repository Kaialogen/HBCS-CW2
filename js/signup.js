function validateForm() { //Validate email address
    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signUp.email.value))) { //Check email address for correct characters
      let password = document.forms["signUp"]["password"].value;
      let password2 = document.forms["signUp"]["password2"].value;
      if (password == password2) { //Compare passwords to ensure they match
        return true;
      }
      else {
        alert("Passwords do not match")
        return false;
      }

    } 
    else {
      alert("Please enter a valid email address")
      return false;
    }
  }