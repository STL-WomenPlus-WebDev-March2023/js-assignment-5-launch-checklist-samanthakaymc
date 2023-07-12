// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]");
        let pilot = pilotName.value;
        let copilotName = document.querySelector("input[name=copilotName]");
        let copilot = copilotName.value;
        let fuelLevels = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelLevels.value;
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let cargoLevel = cargoMass.value
        let list = document.getElementById("faultyItems");
       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, selectPlanet.distance, selectPlanet.moons, selectPlanet.image)
   })
   
});