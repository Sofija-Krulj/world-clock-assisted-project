function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");

    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let tokioElement = document.querySelector("#tokio");
  if (tokioElement) {
    let tokioDateElement = tokioElement.querySelector(".date");
    let tokioTimeElement = tokioElement.querySelector(".time");

    let tokioTime = moment().tz("Asia/Tokyo");

    tokioDateElement.innerHTML = tokioTime.format("MMMM Do YYYY");
    tokioTimeElement.innerHTML = tokioTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateTimeAllCities(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.split("/")[1];
  let allCities = document.querySelector("#city-container");
  allCities.innerHTML = ` <div class="city">
        <div class="city-specifications">
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    " A"
  )}</small></div>
      </div>`;
}
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateTimeAllCities);
