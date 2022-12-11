// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hourClicked;
var storedText;
var textArray;
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on("click", function (event) {
    //$(this) is referring to the exact element/button which triggered the event, in this case the exact save button which was clicked
    //we need to traverse the DOM with jquery's .parents to find the parent element(s) which contain the button that was pressed
    //so that we can ultimately identify which of the save buttons was pressed
    var slotClicked = $(this).parents("div");
    console.log(slotClicked);
    //this accesses the first index of slotClicked, which in this case refers to the div
    //which is the direct parent of the button, as opposed to index 1 which refers to the div
    //which surrounds the entire timeBlock section
    hourClicked = slotClicked.eq(0);
    console.log(hourClicked);
    //this step targets the id attribute of the specific timeslot we clicked save on, so we can easily identify which hour was clicked
    var hourClickedId = hourClicked.attr("id");
    console.log(hourClickedId);
    var textArea = hourClicked.children("textarea");

    //TODO figure out how to access the text input the user actually entered so that we can store it in local storage
    console.log(textArea.attr("name"));
    var inputTask = textArea.val();
    console.log(inputTask);

    //This creates an object containing the id of the hour clicked and the text input by the user next to that hour 
    var storeText = {
      hour: hourClickedId,
      inputText: inputTask
    };
    //here we set up an empty array to contain the contents of multiple storeText objects
    textArray = [];
    //here we set existing storage equal to anything that is contained in local storage under the key "taskStorage"
    var existingStorage = JSON.parse(localStorage.getItem("taskStorage"));
    //this if statement checks whether anything is already stored in local storage under that key
    //if there is nothing stored, we push whatever is CURRENTLY stored in the storeText object (meaning the most recent thing we clicked save on)
    //into our textArray array
    if (existingStorage === null){
      textArray.push(storeText);
    //If there wasn't anything already stored in local storage with this key, we set it up so that there IS something now stored there
    //we take the textArray containing the most recent content in the storeText object, and set that array up to be stored in local storage as a JSON string
    localStorage.setItem("taskStorage", JSON.stringify(textArray));
    //if there WAS already something stored in local storage under "taskStorage" key,
    //we push the most recent content in the storeText object (or the most recently saved text) into the textArray 
    //and then we set the local storage to be the NEW content of the the textArray array
    //this will include all the past items saved in local storage along with the most recently saved 
    } else {textArray = existingStorage;
    textArray.push(storeText);
    localStorage.setItem("taskStorage", JSON.stringify(textArray)); }

  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  //this block of code sets the current hour, and compares it to an hour slot from the HTML page
  //depending on whether the current hour is before/after/during the hour slot, we add/remove classes for styling those slots
  var currentHour = dayjs().hour();
  console.log(currentHour);

  if (currentHour > 9) {
    $("#hour-9").addClass("past");
    $("#hour-9").removeClass("present");
    $("#hour-9").removeClass("future");
  } else if (currentHour < 9) {
    $("#hour-9").addClass("future");
    $("#hour-9").removeClass("past");
    $("#hour-9").removeClass("present");
  } else {
    $("#hour-9").addClass("present");
    $("#hour-9").removeClass("past");
    $("#hour-9").removeClass("future");
  }
  if (currentHour > 10) {
    $("#hour-10").addClass("past");
    $("#hour-10").removeClass("present");
    $("#hour-10").removeClass("future");
  } else if (currentHour < 10) {
    $("#hour-10").addClass("future");
    $("#hour-10").removeClass("past");
    $("#hour-10").removeClass("present");
  } else {
    $("#hour-10").addClass("present");
    $("#hour-10").removeClass("past");
    $("#hour-10").removeClass("future");
  }
  if (currentHour > 11) {
    $("#hour-11").addClass("past");
    $("#hour-11").removeClass("present");
    $("#hour-11").removeClass("future");
  } else if (currentHour < 11) {
    $("#hour-11").addClass("future");
    $("#hour-11").removeClass("past");
    $("#hour-11").removeClass("present");
  } else {
    $("#hour-11").addClass("present");
    $("#hour-11").removeClass("past");
    $("#hour-11").removeClass("future");
  }
  if (currentHour > 12) {
    $("#hour-12").addClass("past");
    $("#hour-12").removeClass("present");
    $("#hour-12").removeClass("future");
  } else if (currentHour < 12) {
    $("#hour-12").addClass("future");
    $("#hour-12").removeClass("past");
    $("#hour-12").removeClass("present");
  } else {
    $("#hour-12").addClass("present");
    $("#hour-12").removeClass("past");
    $("#hour-12").removeClass("future");
  }
  if (currentHour > 13) {
    $("#hour-13").addClass("past");
    $("#hour-13").removeClass("present");
    $("#hour-13").removeClass("future");
  } else if (currentHour < 13) {
    $("#hour-13").addClass("future");
    $("#hour-13").removeClass("past");
    $("#hour-13").removeClass("present");
  } else {
    $("#hour-13").addClass("present");
    $("#hour-13").removeClass("past");
    $("#hour-13").removeClass("future");
  }
  if (currentHour > 14) {
    $("#hour-14").addClass("past");
    $("#hour-14").removeClass("present");
    $("#hour-14").removeClass("future");
  } else if (currentHour < 14) {
    $("#hour-14").addClass("future");
    $("#hour-14").removeClass("past");
    $("#hour-14").removeClass("present");
  } else {
    $("#hour-14").addClass("present");
    $("#hour-14").removeClass("past");
    $("#hour-14").removeClass("future");
  }
  if (currentHour > 15) {
    $("#hour-15").addClass("past");
    $("#hour-15").removeClass("present");
    $("#hour-15").removeClass("future");
  } else if (currentHour < 15) {
    $("#hour-15").addClass("future");
    $("#hour-15").removeClass("past");
    $("#hour-15").removeClass("present");
  } else {
    $("#hour-15").addClass("present");
    $("#hour-15").removeClass("past");
    $("#hour-15").removeClass("future");
  }
  if (currentHour > 16) {
    $("#hour-16").addClass("past");
    $("#hour-16").removeClass("present");
    $("#hour-16").removeClass("future");
  } else if (currentHour < 16) {
    $("#hour-16").addClass("future");
    $("#hour-16").removeClass("past");
    $("#hour-16").removeClass("present");
  } else {
    $("#hour-16").addClass("present");
    $("#hour-16").removeClass("past");
    $("#hour-16").removeClass("future");
  }
  if (currentHour > 17) {
    $("#hour-17").addClass("past");
    $("#hour-17").removeClass("present");
    $("#hour-17").removeClass("future");
  } else if (currentHour < 17) {
    $("#hour-17").addClass("future");
    $("#hour-17").removeClass("past");
    $("#hour-17").removeClass("present");
  } else {
    $("#hour-17").addClass("present");
    $("#hour-17").removeClass("past");
    $("#hour-17").removeClass("future");
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //this outer for loop loops through all of the elements with the timeBlock class, and 
  //gets the id attribute attached to each one -- this allows us to target each of the hours individually
 var allHourBlocks = document.querySelectorAll(".time-block");
 for (i=0; i< allHourBlocks.length; i++){
  // console.log(allHourBlocks[i]);
  //this targets the individual ids for each of the hour block divs
  var getTextBoxId = allHourBlocks[i].getAttribute("id");
  // console.log(getTextBoxId);

  //if there is something stored in our local storage already, we loop through each object in the stored array
  var existingStorage = JSON.parse(localStorage.getItem("taskStorage"));
  if (existingStorage !== null ) {
    for (j=0; j< existingStorage.length; j++)
    {
  //for each object stored in the array we look to see if the hour id we stored in the object matches one of the textBoxIds
      if (getTextBoxId === existingStorage[j].hour)
      {
  //when we find an object with an associated hour id, we make the text content of the textarea for that hour
  //equal to the inputText in the object associated with that hour
  //now, when we refresh, the website automatically repopulates the textareas to contain what we saved into them using local storage
        console.log('we have something stored at ' + existingStorage[j].hour);
        var usedTextArea = allHourBlocks[i].querySelector(".input");
        usedTextArea.textContent = existingStorage[j].inputText;
        
      }
    }
  }
 

 }
  // displays the current date in the header of the page.
  var dateSlot = $("#currentDay");
  var today = dayjs().format("dddd[,] MMMM D[,] YYYY");
  dateSlot.text(today);

});
