var saveBtn = $(".saveBtn"); //Select & store all DOM elements with class name saveBtn in this variable with same name

$("#currentDay").text(dayjs().format("dddd MMMM D YYYY"));
// The current day and is displayed at the top of the page under the title and above the calendar

//The following code was written with the help of a tutor, google and a bootcamp TA.  It was later put through Chatgpt to deconstruct it and learn how it works. lines 7-51.
//Time block  function
function timeBlockColor() {
  var currentHour = dayjs().hour();
  // console.log(currentHour)
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));
    // console.log(blockHour)
    //If the block hour is greater than current hour it is future
    //Else if the block hour is equal to the current hour it is present
    //Else it is the past
    if (blockHour > currentHour) {
      $(this).addClass("future");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}


//Save button clicked and text for the event is saved in local storage
saveBtn.on("click", function () {
  // console.log("hello");
  var time = $(this).parent(".time-block").attr("id");
  var plan = $(this).siblings(".plan").val();
  console.log(time)
  console.log(plan)
  
  localStorage.setItem(time, plan);
  $(this).siblings("plan").val(plan);
  
});


//Saved text is still on the page when refreshed
function retrieveSavedData() {
  $(".time-block").each(function () {
    var currHour = $(this).attr("id");
    var currPlan = localStorage.getItem(currHour);
    if (currPlan !== null) {
      $(this).find(".plan").val(currPlan);
    }
  });
}




//Call functions
timeBlockColor();
retrieveSavedData();

















  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
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

