function addToBasket(movieId) {
    // Get the movie from data and add to the basket
    const movie = movies.find((movie) => movie.id === movieId);
    var exists = 0;
    if (!movie) return;

    // Get the basket from local storage, or just an empty array if it doesn't exist
    const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");
    const save = JSON.parse(localStorage.getItem("save") ?? "[]");
    if (save.indexOf(movie.name) == -1){
        save.push(movie.name);
    }
    else{
        exists = 1;
    }

    // Add the amount of days they want to rent
    if (movie.rentDays == null){
        movie.rentDays = 0;
    }
    var additional = 0;
    var ifalert = 0;
    var rentDays = document.getElementById("days-to-rent-" + movieId).value;
    if (isNaN(parseFloat(rentDays))){
        alert("Please ensure that the days inputted is a number.");
        return;
    }
    if (rentDays == 0){
        alert("Sorry you cannot rent a movie for 0 days.");
        return;
    }
    additional += parseInt(rentDays);
    //movie.rentDays += parseInt(document.getElementById("days-to-rent-" + movieId).value);
    if (additional > 30) {
        movie.rentDays = 30;
        alert("Sorry you cannot rent a movie longer than 30 days.  Rent time has been changed to 30 days.");
        ifalert = 1;
        }
    else{
        movie.rentDays = additional;
    }


    basket.push(movie);
    localStorage.setItem("basket", JSON.stringify(basket));
    
  }