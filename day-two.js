document.addEventListener("DOMContentLoaded", function() {
    let dayTwoString = document.getElementById("moves").textContent;
    let dayTwoArray = dayTwoString.split("\n");
    dayTwoArray.pop();
    console.log(dayTwoArray[0]);

    let newArray = [];

    for (let command of dayTwoArray) {
        let newCommand = command.split(" ");
        newArray.push(newCommand);
    }

    generateNewArrar(newArray);
    getNewDirections(newArray);

    //varible test oart 1

    //varible test part 2
});
/**
 * Will runn on the array and read the directions
 * printing the final result for the data
 * also doung the multiplication to the answer of the challenge
 *
 */
function getNewDirections(directions) {
    let horizontalPosition = 0;
    let aimTotal = 0;
    let depthTotal = 0;

    for (let i = 0; i < directions.length; i++) {
        if (directions[i][0] === "forward") {
            depthTotal = depthTotal + directions[i][1] * aimTotal;
            horizontalPosition += directions[i][1];
        } else if (directions[i][0] === "down") {
            aimTotal += directions[i][1];
        } else {
            aimTotal = aimTotal - directions[i][1];
        }
    }

    console.log("horizontal positon", horizontalPosition);
    console.log("aim total", aimTotal);
    console.log("depth total", depthTotal);
    console.log("muiltiply result:", horizontalPosition * depthTotal);
}

/**
 * Second Part of the Challenge
 * WIll change the string number to
 * a number number
 */
function generateNewArrar(directions) {
    for (let i = 0; i < directions.length; i++) {
        directions[i][1] = parseInt(directions[i][1]);
    }
}

/**
 * Fir the first part of the challenge
 */
function getTheCommands(directions) {
    let forwardCommand = 0;
    let upCommand = 0;
    let downCommand = 0;

    for (let i = 0; i < directions.length; i++) {
        if (directions[i][0] === "forward") {
            forwardCommand += parseInt(directions[i][1]);
        } else if (directions[i][0] === "up") {
            upCommand += parseInt(directions[i][1]);
        } else if (directions[i][0] === "down") {
            downCommand += parseInt(directions[i][1]);
        }
    }

    console.log("Forward Movement", forwardCommand);
    console.log("Total Depth", downCommand - upCommand);
    console.log("Multiply result", forwardCommand * (downCommand - upCommand));
}