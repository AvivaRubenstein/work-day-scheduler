// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on("click", function(event){
    //$(this) is referring to the exact element/button which triggered the event, in this case the exact save button which was clicked
    //we need to traverse the DOM with jquery's .parents to find the parent element(s) which contain the button that was pressed
    //so that we can ultimately identify which of the save buttons was pressed
    var slotClicked = $(this).parents("div");
    console.log(slotClicked);
    //this accesses the first index of slotClicked, which in this case refers to the div
    //which is the direct parent of the button, as opposed to index 1 which refers to the div
    //which surrounds the entire timeBlock section
    var hourClicked = slotClicked.eq(0);
    console.log(hourClicked);
    //this step targets the id attribute of the specific timeslot we clicked save on, so we can easily identify which hour was clicked
    var hourClickedId = hourClicked.attr("id");
    console.log(hourClickedId);

    localStorage.setItem(`$(hourClickedId)` , "");
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
