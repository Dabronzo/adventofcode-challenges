document.addEventListener("DOMContentLoaded", function() {
    let myString = document.getElementById("sonnar").textContent;

    const dataForTest = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    const myArray = myString.split("\n");
    let parsedArray = [];
    let increased = 0;
    let decreased = 0;
    let somArray = [];
    let noChange = 0;

    for (let number of myArray) {
        let parsedNumber = parseInt(number);
        parsedArray.push(parsedNumber);
    }

    for (let i = 0; i < parsedArray.length; i++) {
        if (parsedArray[i + 1] && parsedArray[i + 2]) {
            let partSum = parsedArray[i] + parsedArray[i + 1] + parsedArray[i + 2];
            somArray.push(partSum);
        }
    }
    console.log(somArray);

    for (let i = 1; i < somArray.length; i++) {
        if (somArray[i] < somArray[i - 1]) {
            decreased += 1;
        } else if (somArray[i] === somArray[i - 1]) {
            noChange += 1;
        } else {
            increased += 1;
        }
    }

    console.log(increased, "times increased");
    console.log(noChange, "times with no change");
    console.log(decreased, "times decreased");
});

function getTheSonnarIncrease() {
    for (let i = 1; i <= myArray.length; i++) {
        if (myArray[i] > myArray[i - 1]) {
            increased += 1;
            numberCounter += 1;
        } else {
            decreased += 1;
            numberCounter += 1;
        }
    }
    console.log(increased);
    console.log(decreased);
    console.log(numberCounter);
}