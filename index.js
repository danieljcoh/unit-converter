/*
EQUATION AND FORMAT
||________________|| 
  
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

20 meters = 65.616 feet | 20 feet = 6.096 meters
20 liters = 5.284 gallons | 20 gallons = 75.708 liters
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/

// CARDS
cardOne = document.getElementById("card-1")
cardTwo = document.getElementById("card-2")
cardThree = document.getElementById("card-3")

// BUTTON
btn = document.getElementById("convert_btn")

// INPUT
inputEl = document.getElementById("input-el")


// EVENT LISTENERS
btn.addEventListener("click", function(){
    if(parseInt(inputEl.value)){
        meters_and_feet(inputEl.value)
        liters_and_gallons(inputEl.value)
        kilos_and_pounds(inputEl.value)
    } else {
        alert("Not a number!")
    }
})


// FUNCTIONS
function meters_and_feet(input_num){
    const meters = (input_num * 3.281).toFixed(3)
    const feet = (input_num * 0.3048).toFixed(3)
    length_out = `${input_num} meters = ${meters} feet || ${input_num} feet = ${feet} meters`
    cardOne.textContent = length_out
}

function liters_and_gallons(input_num){
    const liters = (input_num * 0.264).toFixed(3)
    const gallons = (input_num * 3.78541).toFixed(3)
    volume_out = `${input_num} liters = ${liters} gallons || ${input_num} gallons = ${gallons} liters`
    cardTwo.textContent = volume_out
}

function kilos_and_pounds(input_num){
    const kilos = (input_num * 2.204).toFixed(3)
    const pounds = (input_num * 0.453592).toFixed(3)
    weight_out = `${input_num} kilos = ${kilos} pounds || ${input_num} pounds = ${pounds} kilograms`
    cardThree.textContent = weight_out
}

