function validateEmail() { //Validate email address
    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signIn.email.value))) { //Check email address for correct characters
      return true;
    } 
    else {
      alert("Please enter a valid email address")
      return false;
    }
  }