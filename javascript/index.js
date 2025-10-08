function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  let tokioElement = document.querySelector("#tokio");
  let tokioDateElement = tokioElement.querySelector(".date");
  let tokioTimeElement = tokioElement.querySelector(".time");

  let tokioTime = moment().tz("Asia/Tokyo");

  tokioDateElement.innerHTML = tokioTime.format("MMMM Do YYYY");
  tokioTimeElement.innerHTML = tokioTime.format("h:mm:ss [<small>]A[</small>]");
}

function updateTimeAllCities(event) {
  let cityElement = event.target.value;
  let cityTime = moment().tz(cityElement);
  let allCities = document.querySelector("#city-container");
  allCities.innerHTML = ` <div class="city">
        <div class="city-specifications">
          <h2></h2>
          <div class="date"></div>
        </div>
        <div class="time"></div>
      </div>`;
}
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateTimeAllCities);
