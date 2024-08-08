//Alla: funktionalitet som går igenom favoritlista och sedan presenterar dem visuellt
window.addEventListener("load", () => {
    let mainRef = document.querySelector("main");

    let allFavoriteIDs = JSON.parse(localStorage.getItem("favoritedPlanets"));
    let allPlanetData = JSON.parse(localStorage.getItem("data"));

    for (let favoriteID of allFavoriteIDs) {
        let currentPlanetData = allPlanetData[favoriteID];

        let cardElement = document.createElement("section");
        cardElement.classList.add("card");

        let figureElement = document.createElement("figure");
        let imageElement = document.createElement("img");
        imageElement.style.backgroundColor = currentPlanetData.color;
        figureElement.appendChild(imageElement);

        let h2Element = document.createElement("h2");
        h2Element.textContent = currentPlanetData.name;

        cardElement.appendChild(figureElement);
        cardElement.appendChild(h2Element);

        mainRef.appendChild(cardElement);

        cardElement.addEventListener("click", () => {
            setActivePlanet(allPlanetData[favoriteID]);
            window.location.href = "singlePage.html";
            history.forward();
        });
    }
});

//Alla: funktion som sätter en aktiv planet som ska visas upp i singlePage
function setActivePlanet(planetData) {
    localStorage.setItem("activePlanet", JSON.stringify(planetData));
}
