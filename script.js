// Hamburger Menu
let dropDown = document.getElementById("dropDownList");
let menu = document.getElementById("btnMenu");
let closebtn = document.getElementById("bxClose");

bntOpen = false;

menu.addEventListener('click', function() {

    if (bntOpen == false) {
        dropDownList.style.display = 'block'

        bntOpen = true
    }
    closebtn.addEventListener('click', () => {
        if (bntOpen == true) {
            dropDownList.style.display = 'none'
            bntOpen = false
        }
    })

})













// // Set the date we're counting down to
// var countDownDate = new Date("Mar 30, 2024 24:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Output the result in an element with id="demo"
//     document.getElementById("day").innerHTML = days
//     document.getElementById("hr").innerHTML = hours
//     document.getElementById("mm").innerHTML = minutes
//     document.getElementById("ss").innerHTML = seconds

//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("counter").innerHTML = "EXPIRED";
//     }
// }, 1000);





var countDownDate = new Date("2024-03-30T24:00:00Z").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);