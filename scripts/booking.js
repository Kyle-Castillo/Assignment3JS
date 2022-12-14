/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const calculatedCost = document.getElementById("calculated-cost");
const mon = document.getElementById("monday");
const tue = document.getElementById("tuesday");
const wed = document.getElementById("wednesday");
const thur = document.getElementById("thursday");
const fri = document.getElementById("friday");

const clearDays = document.getElementById("clear-button");

const fullRate = document.getElementById("full");
const halfRate = document.getElementById("half");

var totalCost = 0;
var daySelected = 0;
var dailyRate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mon.addEventListener("click", monPress);
tue.addEventListener("click", tuePress);
wed.addEventListener("click", wedPress);
thur.addEventListener("click", thurPress);
fri.addEventListener("click", friPress);

function monPress() {

    mon.classList.add("clicked");
    calculatedCost();

}

function tuePress() {

    tue.classList.add("clicked");
    calculatedCost();
    
}

function wedPress() {

    wed.classList.add("clicked");
    calculatedCost();
    
}

function thurPress() {

    thur.classList.add("clicked");
    calculatedCost();
    
}

function friPress() {

    fri.classList.add("clicked");
    calculatedCost();
    
}

function dayCount() {

    if (mon.classList.contains("clicked")) {
        daySelected++;
    }
    if (tue.classList.contains("clicked")) {
        daySelected++;
    }
    if (wed.classList.contains("clicked")) {
        daySelected++;
    }
    if (thur.classList.contains("clicked")) {
        daySelected++;
    }
    if (fri.classList.contains("clicked")) {
        daySelected++;
    }

    console.log("Days Selected "+daySelected)

}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearDays.addEventListener("click", clearClicked);

function clearClicked() {

    mon.classList.remove("clicked");
    tue.classList.remove("clicked");
    wed.classList.remove("clicked");
    thur.classList.remove("clicked");
    fri.classList.remove("clicked");

    totalCost = 0;
    daySelected = 0;

    calculate();

}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfRate.addEventListener("click", halfRatePrice);

function halfRatePrice() {
    
    dailyRate = 20;

    fullRate.classList.remove("clicked");
    halfRate.classList.add("clicked");

    calculate();

}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullRate.addEventListener("click", fullRatePrice);

function fullRatePrice() {
    
    dailyRate = 35;

    halfRate.classList.remove("clicked");
    fullRate.classList.add("clicked");

    calculate();
    
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    totalCost = 0;

    dayCount();

    totalCost = daySelected * dailyRate;

    daySelected = 0;

    console.log("Total Cost: "+totalCost)

    calculatedCost.innerHTML = totalCost;

}
