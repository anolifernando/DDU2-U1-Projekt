// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements
const cityTitle = document.querySelector("h2");
const titleHead = document.quertSelector("title");

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
