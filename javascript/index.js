let losAngelesElement = document.querySelector(".city-specifications");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment();

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
