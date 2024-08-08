//Alla: hämtar och returnerar aktuell planet från localStorage
function getPlanetData() {
    let activePlanet = JSON.parse(localStorage.getItem("activePlanet"));

    return activePlanet;
}

//Alla: visar upp planetens info på sidan
function displayPlanet() {
    let planetInfo = getPlanetData();

    let titleRef = document.querySelector(".planet_names>h2");
    titleRef.textContent = planetInfo.name;
    let latinName = document.querySelector(".latin_name");
    latinName.textContent = planetInfo.latinName;
    let planetDesc = document.querySelector(".planet_description>p");
    planetDesc.textContent = planetInfo.desc;
    let omkretsInfo = document.querySelector(".answer_omkrets");
    omkretsInfo.textContent =
        formatNumberWithSpaces(planetInfo.circumference) + " km";
    let maxTempInfo = document.querySelector(".answer_max_temperatur");
    maxTempInfo.textContent = planetInfo.temp.day + " C";
    let kmFromSun = document.querySelector(".answer_km");
    kmFromSun.textContent = formatNumberWithSpaces(planetInfo.distance) + " km";
    let minTempInfo = document.querySelector(".answer_min_temp");
    minTempInfo.textContent = planetInfo.temp.night + " C";
    let moonsCount = document.querySelector(".answer_moons");
    let joined = planetInfo.moons.join(", ");
    moonsCount.textContent = joined;
    let circle = document.querySelectorAll(".my_aside > *");
    circle.forEach((c) => {
        c.style.backgroundColor = planetInfo.color;
    });

    let buttonRef = document.querySelector(".my_button");

    setButtonText(planetInfo.id);

    buttonRef.addEventListener("click", () => {
        addOrRemoveFavorite(planetInfo);
    });
}

displayPlanet();

//Alla: formatterar stora tal så att de visas upp med mellanslag
function formatNumberWithSpaces(number) {
    const formatter = new Intl.NumberFormat("sv-SE");
    return formatter.format(number);
}

//Alla: Lägger till eller tar bort en planet beroende på om den redan finns i favoritlistan och uppdaterar knapptext
function addOrRemoveFavorite(planet) {
    let favoriteCollection =
        JSON.parse(localStorage.getItem("favoritedPlanets")) || [];
    try {
        checkExistence(planet.id)
            ? favoriteCollection.splice(
                  favoriteCollection.indexOf(planet.id),
                  1
              )
            : favoriteCollection.push(planet.id);

        localStorage.setItem(
            "favoritedPlanets",
            JSON.stringify(favoriteCollection)
        );
        setButtonText(planet.id);
    } catch (error) {
        console.log(error);
    }
}

//Alla: kollar om planeten finns i favoritlistan
function checkExistence(planet) {
    let favoriteCollection =
        JSON.parse(localStorage.getItem("favoritedPlanets")) || [];

    return favoriteCollection.includes(planet);
}

//Alla: sätter knapptexten beroende på om den aktuella planeten finns i favoritlistan
async function setButtonText(planet) {
    let buttonRef = document.querySelector(".my_button");
    let existence = await checkExistence(planet);
    buttonRef.textContent = existence
        ? "Ta bort från favoriter"
        : "Lägg till i favoriter";
}
