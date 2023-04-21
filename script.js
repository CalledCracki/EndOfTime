// Set the date we're counting down to
var countDownDate = new Date("January 19, 2038 03:14:08").getTime();
const additionalTextHeading = document.getElementById('additional-text');
const additionalTextContent = document.getElementById('additional-text-content');

// Update the countdown every second
var x = setInterval(function() {

    // Get the current time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes and seconds left
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the relevant span element
    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";
    document.getElementById("seconds").innerHTML = seconds + "s";

    // If the countdown is over, display the message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Update the countdown text every second
var y = setInterval(function() {

    // Get the current time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Calculate years and months left
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

    // Construct the text to display
    var countdownText = "or " + years + " years and " + months + " months";

    // Update the text below the countdown
    document.getElementById("countdown-text").innerHTML = countdownText;
}, 1000);

additionalTextHeading.addEventListener('click', function() {
    additionalTextContent.classList.toggle('hidden');
  });