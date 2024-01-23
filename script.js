$(document).ready(function () {

    // Display the current day at the top of the calendar when a user opens the planner.
    // var advancedFormat = require('dayjs/plugin/advancedFormat')
    dayjs.extend(window.dayjs_plugin_advancedFormat)

    $("#currentDay").text(dayjs().format('dddd, MMMM Do'));

    // Present timeblocks for standard business hours when the user scrolls down.   
    function generateTimeBlocks() {
        for (var hour = 0; hour <= 23; hour++) {
            var timeBlock = $("<div>").addClass("row time-block");
            var hourcol = $("div").addClass("col-md-1 hour").text(dayjs({ hour }).format("H:OO"));
            var testArea = $("<testarea>").addClass("col-md-10 description");

            // Color - code each timeblock based on past, present, and future when the timeblock is viewed.
            if (hour >= 9 && hour <= 17) {
                if (hour < dayjs().hour()) {
                    textArea.addClass("past");
                }
                else if (hour === dayjs().hour()) {
                    textArea.addClass("present");
                }
                else {
                    textArea.addClass("future");
                }
            } else {
                textArea.addClass("non-business");
            }
        }
    }


    // Allow a user to enter an event when they click a timeblock

    // Save the event in local storage when the save button is clicked in that timeblock.

    // Persist events between refreshes of a page
});




