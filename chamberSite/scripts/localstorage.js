// Initialize display element and date
const timeDisplay = document.querySelector(".lastVisitTime");
const time = date.getTime();

// Get last visit time from localStorage
let lastTime = localStorage.getItem('lastTime');

// Calculate time since last visit
let msDiff = time - lastTime;
let sDiff = Math.floor(msDiff / 1000);
let mDiff = Math.floor(sDiff / 60);
let hDiff = Math.floor(mDiff / 60);

sDiff = sDiff % 60;
mDiff = mDiff % 60;

let timeDifference = `${hDiff}:${mDiff}:${sDiff}`;

// update localStorage and display timeDifference
localStorage.setItem('lastTime', time);
timeDisplay.textContent = timeDifference;