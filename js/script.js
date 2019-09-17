//Set date to countdown to
let countDownDate = new Date("October 1, 2019 23:59:59").getTime();

//Update countdown every one second
let updateCountdown = setInterval(function() {

  //Get today's date and time
  let todaysDate = new Date().getTime();

  //Calculate the time between now and countDownDate
  const timeDifference = countDownDate - todaysDate;

  //Time calculation of days, hours, minutes, seconds
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  //Display the result in the element
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  //When countdown finishes
  if (timeDifference < 0) {
    clearInterval(updateCountdown);
  }
}, 1000);
