// Recommended: All functions declared here
const cityTitle = document.querySelector("h2");
const titleHead = document.quertSelector("title");

// Recommended: constants with references to existing HTML-elements

const cityName = prompt("Vilken stad?");
let cityNotFound = false;

for (let citiesKey in cities) {
  if (enterCity == cities[citiesKey].name) {
    cityWasFound = true;
    cityTitle.innerHTML = `${enterCity} (${cities[citiesKey].country})`;

    //break;
  }
}

// Recommended: Ask for the city name and then the rest of the code
