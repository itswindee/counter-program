// COUNTER PROGRAM

// these are getting the value
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

// now we need 3 functions for decrease, reset, and increase

increaseBtn.onclick = function(){
    count++; // increment
    countLabel.textContent = count; // changes the countlabel after being incremented
}

decreaseBtn.onclick = function(){
    count--; //decrement
    countLabel.textContent = count; // changes the countlabel after being decremented
}

resetBtn.onclick = function(){
    count = 0; // clicking reset button will reset the count to 0
    countLabel.textContent = count; 
}