# To-Do List 

Date Due 9/12/2022

For 50%
- You apply HTML to the code provided to make basic changes improving usability.
- You fix minimum of 10 issues.
- For all the fixed issues, the work demonstrates suitable quality and level of complexity.
- You demonstrate developing understanding of usability in relation to fixed and/or identified issues, including implications for security.

For 70%
- You apply HTML to the code provided to make basic changes improving usability.
- You also apply JavaScript to the code provided to make more advanced changes.
- You fix minimum of 20 issues.
- Majority of fixed issues are of high severity.
- For all the fixed issues, the work demonstrates suitable quality and level of complexity.
- You demonstrate sound understanding of usability in relation to fixed and identified issues, including implications for security. 
- You make appropriate recommendations on minimum security requirements.

For 100%
- You apply HTML to the code provided to make basic changes improving usability.
- You also apply JavaScript to the code provided to make sophisticated changes.
- All issues are fixed to the highest standard so that the prototype could be successfully launched in real life.
- You demonstrate sophisticated understanding of usability in relation to fixed and identified issues, including implications for security.
- You make appropriate, comprehensive recommendations on security requirements against the OWASP benchmark.


# Issues:

 ## General issues:
 - [x] Change login.html to shop.html for the front page, this makes the website more user friendly as they can see content before a restriction.
 - [ ] Movies can be added multiple times to the basket
 - [x] Nav bar is fixed, not dynamic leading to user issues.

 ## Shop:
 - [x] Images Missing and are not of same size.
 - [x] Prices are not displayed in the shop page - this means users have to add items to basket before knowing price.
 - [ ] Some movie Posters are in different languages (was joke, need to change) (**PLEASE CHANGE THE PICS BEFORE SUBMISSION**)
 - [ ] Days to rent has no input sanitation~aand has no cap on number of days to add.
 - [ ] Add to basket button has no feedback at whether a item has been added or not.
 - [ ] Genres have a big presence but has no functionality.

 ## Movies:
 - [ ] Some descriptions in movies.js are not very descriptive - are lacking suitable discriptions.
 - [ ] Style of movies page is still very basic
 - [ ] No options to add movie to basket from this page

 ## Basket:
 - [x] Clear basket button does not work.
 - [x] Continue shopping button does not go back to shop.html
 - [x] Go to payment link is bland and just a link.
 - [x] Time should be changed to days to give a user quantifiable data.
 - [x] Column headers are not lined up.
 - [x] Price column is lacking currency indicator.
 - [x] Nav bar is not present. 
 - [x] Prices of movies are different when added to basket (logic error with decimal points)
 - [x] clear basket button too small.
 - [ ] Able to continue to payment with nothing in the basket

 ## Order:
 - [x] Input boxes are not lined up.
 - [x] Input boxes are not clearly labelled, with one being unlabelled.
 - [x] no suggestion data is present within the input boxes.
 - [x]  Buttons are too small.
 - [x] Card number input box has the wrong input type.
 - [x] Lack of navbar.
 - [x] No indicator of what is in the basket currently.
 - [x] No indicator of cost.
 - [x] Missing input boxes such as name on card, email.
 - [x] Input boxes are not in logical order.
 - [x] Cancel button goes back to shop.html, it should go back to basket.html
 - [ ] Search text is not formatted correctly

# Stuff changed:
- Added index.html page with a redirect to shop.html to help users get to the right page (Kaialogen)
- Updated every page with doctype and better lang support (Kaialogen) 
- Give each Page a subdirectory/css file and add image folder. (Kaialogen)
- Done some changes to the header section in shop.html (Kaialogen)
- Removed all `<p>` tags from shop.html as this information is obsolete as it can be found in movie.html (Kaialogen) 
- Added images and added a css class in shop.css to size all images to width 250px and height 350px (Kaialogen)
- Added price label to each sector in shop.html (Kaialogen)
- Added ClearBasket function in basket.html (Kaialogen)
- Added a nvigation bar to all relevent pages (Kaialogen)
- Changed shop.html inputs to number types (Kaialogen)  
- Edited some descriptions in movies.js to be more descriptive (Ernie)
- New Nav bar (Kaialogen)
- Payment form (Kaialogen)
- Added category dropdown (Kaialogen)
- Changed Login form (Ernie)
- Added Signup form (Ernie)
- Added email validation to sign in and sign up forms (Ernie)
- Added password comparison in sign up form (Ernie)
- Added FAQ (Louis)

# Future stuff
- Store basket information in local storage - [https://stackoverflow.com/questions/64149597/add-items-to-basket-and-store-in-localstorage-with-javascript]
- Create a invoice solution
- Make logo
- Implement search function
- Fix search bar on order.html page
- Decide how to display films on shop.html
- Change parameters for the payment form
- Visual indicator for when items are added to basket
- Custom 404 page
