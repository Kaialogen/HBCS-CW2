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
    // Retrieve the number of days the user wants to rent the movie for
    var days_rent = document.getElementById("days-to-rent-" + movieId).value;
    // Check if the number of days is a valid number
    if (isNaN(parseFloat(days_rent))){
        // If the number of days is not a number, display an alert to the user
        alert("Please ensure that the days inputted is a number.");
        return;
    }
    // Check if the number of days is 0
    if (days_rent == 0){
        // If the number of days is 0, display an alert to the user
        alert("Sorry you cannot rent a movie 0 days.");
        return;
    }
    // Parse the number of days to an integer
    additional += parseInt(days_rent);


    if (additional > 30) {
         // If the number of additional rental days is greater than 30, set the rental days to 30
        movie.rentDays = additional;
        // Display an alert to the user
        alert("Sorry you cannot rent a movie longer than 30 days.  Rent time has been changed to 30 days.");
        // Set the ifalert flag to 1
        ifalert = 1;
        }
    else{
        // If the number of additional rental days is less than or equal to 30, set the rental days to the specified value
        movie.rentDays = additional;
    }

    /* Splice Algorithm - breaks everything */
    if (exists == 1){
        basket[save.indexOf(movie.name)].rentDays += additional;
        if (basket[save.indexOf(movie.name)].rentDays < 1){
            alert("Item has been removed from the basket.");
            basket.splice(save.indexOf(movie.name), 1);
            save.splice(save.indexOf(movie.name), 1);
        }

        else if (basket[save.indexOf(movie.name)].rentDays > 30){
            if (ifalert == 0){
                alert("Sorry you cannot rent a movie longer than 30 days.  Rent time has been changed to 30 days.");
            }
            basket[save.indexOf(movie.name)].rentDays = 30;
            alert(movie.name + " has been added to the basket.\nYou have chosen to rent this movie for " + basket[save.indexOf(movie.name)].rentDays + " days.")
        }
        
        else{
            alert(movie.name + " has been added to the basket.\nYou have chosen to rent this movie for " + basket[save.indexOf(movie.name)].rentDays + " days.")
        }
    }
    else
    {
        if (movie.rentDays < 1) {
            movie.rentDays = 1;
            alert("Sorry you cannot rent a movie for less than a day.  Rent time has been changed to 1 day.");
            }
        basket.push(movie);
        alert(movie.name + " has been added to basket");
    }

    
    localStorage.setItem("save", JSON.stringify(save));
    localStorage.setItem("basket", JSON.stringify(basket));
}
