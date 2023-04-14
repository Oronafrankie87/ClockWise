var saveBtn = $(".saveBtn"); //Select & store all DOM elements with class name saveBtn in this variable with same name

$("#currentDay").text(moment().format("dddd MMMM Do YYYY [at] hh:mm:ss a"));
//The current day and time is displayed at the top of the page under the title and above the calendar

function timeBlockColor() {
  var currentHour = Daysjs().hour();
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));

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

  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".plan").val();

  localStorage.setItem(time, plan);
});


//Saved text is still on the page when refreshed
function usePlanner() {
  $(".hour").each(function () {
    var currHour = $(this).text();
    var currPlan = localStorage.getItem(currHour);
    if (currPlan !== null) {
      $(this).siblings(".plan").val(currPlan);
    }
  });
}




















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

