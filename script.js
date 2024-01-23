$(document).ready(function () {

    // Display the current day at the top of the calendar when a user opens the planner.
    // var advancedFormat = require('dayjs/plugin/advancedFormat')
    dayjs.extend(window.dayjs_plugin_advancedFormat)

    $("#currentDay").text(dayjs().format('dddd, MMMM Do'));
    function generateTimeBlocks() {
        var currentHour = dayjs().hour();
        var container = $(".container");

        //Clearing existing content
        container.empty();

        // Present timeblocks for standard business hours when the user scrolls down.   

        for (var hour = 0; hour <= 23; hour++) {
            // var hourlyTime = $("<div>").addClass("col-md-1 hour").text()
            var timeBlock = $("<div>").addClass("time-block row");
            var hourCol = $("<div>").addClass("col-md-1 hour").text(dayjs().set('hour', hour).format("h A"));

            // Allow a user to enter an event when they click a timeblock
            var textArea = $("<textarea>").addClass("col-md-10 description");

            // console.log(timeBlock)
            // console.log(hourCol)
            // console.log(textArea)

            // timeBlock.append(hourCol, textArea, saveBtn);
            // container.append(timeBlock);

            // Color - code each timeblock based on past, present, and future when the timeblock is viewed.
            if (hour >= 9 && hour <= 18) {
                if (hour < currentHour) {
                    textArea.addClass("past");
                } else if (hour === currentHour) {
                    textArea.addClass("present");
                } else {
                    textArea.addClass("future");
                }
            } else {
                textArea.addClass("non-business");
            }

            var saveBtn = $("<button>").addClass("col-md-1 saveBtn").html("<i class='fas fa-save'></i>");

            // Save the event in local storage when the save button is clicked in that timeblock.

            saveBtn.on('click', function () {
                var eventText = $(this).siblings(".description").val();
                var eventHour = $(this).siblings(".hour").text();
                //     console.log(eventText)
                //     console.log(eventHour)

                localStorage.setItem("event_" + dayjs().format("DD-MM-YYYY HH:mm:ss"), eventText);

                //Load event from local storage
                var savedEvent = localStorage.getItem("event_" + hour);
                if (savedEvent) {
                    var timeBlock = $("#timeblock_" + hour);
                    timeBlock.find(".description").val(savedEvent);
                }

            });
            timeBlock.append(hourCol, textArea, saveBtn);
            container.append(timeBlock);
        }
    }

    generateTimeBlocks();
    // Persist events between refreshes of a page
});




