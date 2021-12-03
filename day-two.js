document.addEventListener("DOMContentLoaded", function() {
    let dayTwoString = document.getElementById("moves").textContent;
    const dayTwoArray = dayTwoString.split("\n");

    const dataTest = [
        ["forward", "5"],
        ["down", "5"],
        ["forward", "8"],
        ["up", "3"],
        ["down", "8"],
        ["forward", "2"],
    ];

    const commandsDirections = [];

    for (let i = 0; i < dayTwoArray.length; i++) {
        commandsDirections.push(dayTwoArray[i].split(" ", 2));
    }

    getTheCommands(commandsDirections);
});

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