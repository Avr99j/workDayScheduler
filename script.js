$(document).ready(function () {
    // var advancedFormat = require('dayjs/plugin/advancedFormat')
    dayjs.extend(window.dayjs_plugin_advancedFormat)

    $("#currentDay").text(dayjs().format('dddd, MMMM Do'));
});

// Present timeblocks for standard business hours when the user scrolls down.

// Color - code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page