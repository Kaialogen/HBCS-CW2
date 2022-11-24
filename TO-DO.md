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

1. ~~Change login.html to shop.html for the front page, this makes the website more user friendly as they can see content before a restriction.~~
3. ~~Images Missing and are not of same size.~~
5. ~~Prices are not displayed in the shop page - this means users have to add items to basket before knowing price.~~
6. Some movie Posters are in different languages (was joke, need to change)
7. Some descriptions in movies.js are not very descriptive - are lacking suitable discriptions.
9. Movies can be added multiple times to the basket
10. Days to rent has ~~no input sanitation~~ aand has no cap on number of days to add.
11. Add to basket button has no feedback at whether a item has been added or not.
12. Genres have a big presence but has no functionality. 
13. ~~Nav bar is fixed, not dynamic leading to user issues.~~

 ## Basket:
 1. ~~Clear basket button does not work.~~
 2. ~~Continue shopping button does not go back to shop.html~~
 3. ~~Go to payment link is bland and just a link.~~
 4. ~~Time should be changed to days to give a user quantifiable data.~~
 5. ~~Column headers are not lined up.~~
 6. ~~Price column is lacking currency indicator.~~
 7. ~~Nav bar is not present. ~~
 8. ~~Prices of movies are different when added to basket (logic error with decimal points)~~
 9. ~~clear basket button too small.~~

 ## Order:
 1. ~~Input boxes are not lined up.~~
 2. ~~Input boxes are not clearly labelled, with one being unlabelled.~~
 3. ~~no suggestion data is present within the input boxes.~~
 4. ~~ Buttons are too small.~~
 5. ~~Card number input box has the wrong input type.~~
 6. ~~Lack of navbar.~~
 7. ~~No indicator of what is in the basket currently.~~
 8. ~~No indicator of cost.~~
 9. ~~Missing input boxes such as name on card, email.~~
 10. ~~ Input boxes are not in logical order.~~
 11. ~~Cancel button goes back to shop.html, it should go back to basket.html~~


- [x] 
- [] 
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