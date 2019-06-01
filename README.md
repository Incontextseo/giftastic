# giftastic
Homework 6
https://incontextseo.github.io/giftastic/

HTML
 - H1
 - DIV id="button-holder"
 - input field id="new-button"
 - BUTTON id="new-button"

 CSS
 - Use the same CSS from responsive-portfolio/Trivia Game

 Javascript
 VARIABLES
 - Create an array to populate initial set of buttons
 - Variable to hold text entered in text field to create buttons
 - Variable to hold each image created
 - Create queryURL with api-key and limit of 10 gifs

 FUNCTIONS
 - Create createButton function
 - Loop over the array and use the createButton function to create each button in the array.
 - AJAX Get-Promise to pull gifs from queryURL
 - When "Submit" is clicked:
    - Grab text from the text field
    - Use the createButton function
    - Append button to the list on the page
 - Click listener attached to the body since buttons are created on page load and more are added later.
    - When buttons are clicked retrieve 10 gifs from the giphy API
    - Gifs should be static on load
        - When clicked they animate
        - When clicked again they stop.
