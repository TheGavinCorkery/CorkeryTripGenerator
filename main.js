"use strict";

//Begins the operation of the program
function runProgram() {
    let userRest = generateRestaurant();
    let userDest = generateDestination();
    let userTrans = generateTransportation();
    let userEnt = generateEntertainment();
    validateGenChoices(userRest, userDest, userTrans, userEnt);
    displayFinalResults(userRest, userDest, userTrans, userEnt);
    
}

//Uses generateRandomResult to choose a random restaurant for the user to visit.
function generateRestaurant() {
    let restArray = ['Texas Roadhouse', 'Ichiraku Ramen', 'IHOP', 'Mongolian BBQ', 'Cheesecake Factory'];
    let randRest = generateRandomResult(restArray);
    let restChoice = restArray[randRest]; 
    return restChoice;
}

// Uses generateRandomResult to choose a random destination for the user to visit.
function generateDestination() {
    let destArray = ['Gotham City', 'Bahamas', 'Paradise Island', 'Leaf Village', 'Sand Village', '5 Kage Summit'];
    let randDest = generateRandomResult(destArray);
    let transChoice = destArray[randDest];
    return transChoice;
}

// Uses generateRandomResult to choose a random mode of transportation for the user to visit.
function generateTransportation() {
    let transArray = ['Batmobile', 'Starship Enterprise', 'Star Destroyer', 'AC-130', 'Bike'];
    let randTrans = generateRandomResult(transArray);
    let transChoice = transArray[randTrans];
    return transChoice;
    
}

// Uses generateRandomResult to choose a random form of entertainment for the user to visit.
function generateEntertainment() {
    let entArray = ['Gladiator Fight', 'Skydiving', 'Shakespeare Play', 'Defeating Robots', 'Monopoly with the President',
     'Packers Super Bowl Parade!', 'Watching Steelers fans cry about losing to the Packers in the SB'];
     let randEnt = generateRandomResult(entArray)
    let entChoice = entArray[randEnt];
    return entChoice;
}

// Creates and returns a random number used to assign random choices for the user
function generateRandomResult(array){
    let randResult = 0;
    randResult = Math.floor(Math.random() * array.length);
    return randResult;
}

// Displays the users random trip to the console
function displayResults(rest, dest, trans, ent) {
    console.log(`1. You will be vacationing to: ${dest}`);
    console.log(`2. You will be getting there in: ${trans}`);
    console.log(`3. You will be eating at: ${rest}`);
    console.log(`4. You will be entertained with: ${ent}`);
}

//Validates if the user is happy with their results and fixes it if it is not
function validateGenChoices(userRest, userDest, userTrans, userEnt) {
    let allValid = false;

    while(allValid == false) {
        displayResults(userRest, userDest, userTrans, userEnt);
        let userHappiness = prompt('Are you happy with these results? (Enter Y or N');
        if (userHappiness.toLowerCase() == "y") {
            allValid = true;
        }else if (userHappiness.toLowerCase() == "n") {
            let unhappiness = prompt('Which number are you not happy with? (Enter 1, 2, 3, 4, if you made a mistake enter 5)');
            if (unhappiness == 1) {
                userDest = generateDestination();
                console.clear();
            }else if (unhappiness == 2) {
                userTrans = generateTransportation();
                console.clear();
            }else if (unhappiness == 3) {
                userRest = generateRestaurant();
                console.clear();
            }else if (unhappiness == 4) {
                userEnt = generateEntertainment();
                console.clear();
            }else if (unhappiness == 5) {
                allValid = true;
            }else {
                console.log("Please enter a valid option.");
            }
        }

    }
}

function displayFinalResults(rest, dest, trans, ent) {
    console.log('');
    console.log("The final plan for your trip is as follows.");
    console.log('--------------------------------------------');
    console.log('');
    displayResults(rest, dest, trans, ent);
}

runProgram();