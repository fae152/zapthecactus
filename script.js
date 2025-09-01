/*const before_loading = 
    document.getElementById("content-before-loading");
before_loading.style.display = "block";
let c = 0;
function getInformation() {
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            const new_div = document.createElement("div");
            new_div.className = "sub-block";
            new_div.innerHTML = `Card ${c}${i}`;
            before_loading.appendChild(new_div);
        }
        c++;
    }, 1000);
}

window.addEventListener("scroll", () => {
    if (
        document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
    ) {
        getInformation();
    }
});
getInformation();*/

//Time and Date
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let date = today.getDate();
  // Convert the string to a Date object
  let dateObj = new Date(date);
  // Array of weekday names
  const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  // Get the day of the week (0-6) and find the corresponding day name
  let dayName = weekdays[dateObj.getDay()];
  let monthName =month[today.getMonth()];
  // convert hours to 12-hour format
  h = h % 12;
  h = h ? h : 12;
  // add am/pm suffix
  let amPm = h >= 12 ? 'pm' : 'am';
  m = checkTime(m);
  document.getElementById('time').innerHTML =  h + ":" + m + " " + amPm;
  document.getElementById('date').innerHTML = dayName + " • " + date + " " + monthName;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

/*Load Content*/
function loadProgress() {
fetch('progress.html')
    .then(response => response.text())
    .then(text => document.getElementById('content').innerHTML = text);
    newPageTitle = 'Progress Photos';
    document.title = newPageTitle;
    const element = document.getElementById("body");
    element.classList.remove("body");
    element.classList.remove("weavingBG");
    element.classList.add("progressBG");
}
function loadWeaving() {
fetch('weaving.html')
    .then(response => response.text())
    .then(text => document.getElementById('content').innerHTML = text);
    newPageTitle = 'Warped Peach Weaving';
    document.title = newPageTitle;
    const element = document.getElementById("body");
    element.classList.remove("body");
    element.classList.remove("progressBG");
    element.classList.add("weavingBG");
    
}

/*Top Button*/
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}