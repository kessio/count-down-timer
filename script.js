const monthDisplay = document.getElementById('month')
const daysDisplay = document.getElementById('day')
const hoursDisplay = document.getElementById('hours')
const minutesDisplay = document.getElementById('minutes')
const secondsDisplay = document.getElementById('seconds')

let countDownDate = new Date("Dec 31, 2022 00:00:00").getTime();

// Update the count down every 1 second
const timer = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the timeleft between now and the count down date
  let timeleft = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var months = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
monthDisplay.innerHTML    = months
daysDisplay.innerHTML     = days
hoursDisplay.innerHTML    = hours
minutesDisplay.innerHTML  = minutes
secondsDisplay.innerHTML  = seconds
  //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //+ minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (timeleft < 0) {
    clearInterval(timer);
    newyear.style.display = "block"
  }
}, 1000);





