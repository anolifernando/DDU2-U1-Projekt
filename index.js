// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements
const titleHead = document.quertSelector("title");
const cityTitle = document.querySelector("h2");
const cityUndertitle = document.querySelector("h3");
const cityBox = document.quertSelector("#cities");

// Recommended: Ask for the city name and then the rest of the code
const cityName = prompt("Vilken stad?");
let cityNotFound = false;

for (let citiesKey in cities) {
  if (enterCity == cities[citiesKey].name) {
    cityWasFound = true;
    cityTitle.innerHTML = `${enterCity} (${cities[citiesKey].country})`;
    titleHead.innerHTML = cityName;

    break; //Loopen avslutas om stad hittas eller inte hittas. Om break inte används kommer den fortsätta och aldrig sluta.
  }
}

if (cityWasFound == false) {
  cityTitle.innerHTML = `${enterCity} Finns inte i databasen`;
  cityUndertitle.innerHTML = "";
  titleHead.innerHTML = "Not fround";
}

//Stad rutor

for (let i = 0; i <= cities.length; i++) {
  let cityBoxP = document.createElement("p");
  cityBoxP.classList.add("cityBox");
  cityBoxP.textContent = cities[i].name;
  cityBox.appendChild(cityBoxP);

  if (enterCity == cities[i].name) {
    cityBoxP.classList.add("target");
  }

  // if (enterCity == ) {
  //   cityBoxP.classList.add("closest");
  // }

  // if (enterCity == ) {
  //   cityBoxP.classList.add("furthest");
  // }
}
