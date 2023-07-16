// Write your helper functions here!

require('isomorphic-fetch');
//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const div = document.getElementById("missionTarget")
    div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}"> 
                `;
   };


function validateInput(testInput) {
    let inputAsNum = Number(testInput);
    if (isNaN(inputAsNum)) {
        return "Not a Number"
    }
    else if (testInput === "") {
        return "Empty"
    }
    else if (isNaN(inputAsNum) === false) {
        return "Is a Number"
    }  
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    list.style.visibility = "visible";
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel=== "") {
        alert("All fields are required.");
    }
    if (validateInput(pilot) === "Empty") {
        alert("Pilot Name: Is Empty");
    }
    else if (validateInput(pilot) === "Is a Number") {
        alert("Pilot Name: Is a Number")
    }
    if (validateInput(copilot) === "Empty") {
        alert("Co-Pilot Name: Is Empty");
    }
    else if (validateInput(copilot) === "Is a Number") {
        alert("Co-Pilot Name: Is a Number")
    }
    if (validateInput(fuelLevel) === "Empty") {
        alert("Fuel Level: Is Empty");
    }
    else if (validateInput(fuelLevel) === "Not a Number") {
        alert("Fuel Level: Is Not a Number")
    }
    if (validateInput(cargoLevel) === "Empty") {
        alert("Cargo Level: Is Empty");
    }
    else if (validateInput(cargoLevel) === "Not a Number") {
        alert("Cargo Level: Is Not a Number")
    }
    else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        let launchStatus = document.getElementById("launchStatus");
        if (fuelLevel < 10000 && cargoLevel <= 10000) {
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            list.style.visibility = "visible";
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            list.style.visibility = "visible";
        } else if (fuelLevel < 10000 && cargoLevel > 10000) {
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            list.style.visibility = "visible";
        } else {
            launchStatus.style.color = "rgb(65, 159, 106)";
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            list.style.visibility = "visible";
        }
    }
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
    //let num = Math.random()*10;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
