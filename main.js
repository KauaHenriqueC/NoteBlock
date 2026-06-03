// Variables
var form = document.getElementById('form')  // Get the form
var input = document.querySelector('input') // Get the input


// Events
form.addEventListener("submit", function(event) {   // Calls the event when submited
    event.preventDefault();     // Cancel page reload

    console.log(input.value);   // Shows on console the value
});
