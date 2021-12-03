document.addEventListener("DOMContentLoaded", function() {
    let dayThreeString = document.getElementById("source").textContent;
    let dayThreeArray = dayThreeString.split("\n");
    dayThreeArray.pop();

    //first number of each sequel
    let firstNumber = [];
    let secondNumber = [];
    let thirdNumber = [];
    let fourthNumber = [];
    let fifthNumber = [];
    let sixthNumber = [];
    let seventhNumber = [];
    let eightNumber = [];
    let ninethNumber = [];
    let tenthNumber = [];
    let elevenNumber = [];
    let twelveNumber = [];

    for (let i = 0; i < dayThreeArray.length; i++) {
        firstNumber.push(dayThreeArray[i][0]);
        secondNumber.push(dayThreeArray[i][1]);
        thirdNumber.push(dayThreeArray[i][2]);
        fourthNumber.push(dayThreeArray[i][3]);
        fifthNumber.push(dayThreeArray[i][4]);
        sixthNumber.push(dayThreeArray[i][5]);
        seventhNumber.push(dayThreeArray[i][6]);
        eightNumber.push(dayThreeArray[i][7]);
        ninethNumber.push(dayThreeArray[i][8]);
        tenthNumber.push(dayThreeArray[i][9]);
        elevenNumber.push(dayThreeArray[i][10]);
        twelveNumber.push(dayThreeArray[i][11]);
    }

    let gammaData = [];
    gammaData[0] = getTheMostCommon(firstNumber);
    gammaData[1] = getTheMostCommon(secondNumber);
    gammaData[2] = getTheMostCommon(thirdNumber);
    gammaData[3] = getTheMostCommon(fourthNumber);
    gammaData[4] = getTheMostCommon(fifthNumber);
    //gammaData[5] = getTheMostCommon(sixthNumber);
    //gammaData[6] = getTheMostCommon(seventhNumber);
    //gammaData[7] = getTheMostCommon(eightNumber);
    //gammaData[8] = getTheMostCommon(ninethNumber);
    //gammaData[9] = getTheMostCommon(tenthNumber);
    //gammaData[10] = getTheMostCommon(elevenNumber);
    //gammaData[11] = getTheMostCommon(twelveNumber);

    let firstArray = filterArray(dayThreeArray, 0);
    console.log(firstArray);
    let secondArray = filterArray(firstArray, 1);
    console.log(secondArray);
    let thirdArray = filterArray(secondArray, 2);
    console.log(thirdArray);
    let forthArray = filterArray(thirdArray, 3);
    console.log(forthArray);
    let fifhtArray = filterArray(forthArray, 4);
    console.log(fifhtArray);
    let sixArray = filterArray(fifhtArray, 5);
    console.log(sixArray);
    let seventhArray = filterArray(sixArray, 6);
    console.log(seventhArray);
    let eightArray = filterArray(seventhArray, 7);
    console.log(eightArray);
    let ninethArray = filterArray(eightArray, 8);
    console.log(ninethArray);
    let tenthArray = filterArray(ninethArray, 9);
    console.log(tenthArray);
    let eleventhArray = filterArray(tenthArray, 10);
    console.log(eleventhArray);
    let twelthArray = filterArray(eleventhArray, 11);
    console.log(twelthArray);

    let firstCo2 = filterArrayCo2(dayThreeArray, 0);
    console.log(firstCo2);
    let secondCo2 = filterArrayCo2(firstCo2, 1);
    console.log(secondCo2);
    let thirdCo2 = filterArrayCo2(secondCo2, 2);
    console.log(thirdCo2);
    let fourthCo2 = filterArrayCo2(thirdCo2, 3);
    console.log(fourthCo2);
    let fifthCo2 = filterArrayCo2(fourthCo2, 4);
    console.log(fifthCo2);
    let sixthCo2 = filterArrayCo2(fifthCo2, 5);
    console.log(sixthCo2);
    let seventhCo2 = filterArrayCo2(sixthCo2, 6);
    console.log(seventhCo2);
    let eigthCo2 = filterArrayCo2(seventhCo2, 7);
    console.log(eigthCo2);
    let ninethCo2 = filterArrayCo2(eigthCo2, 8);
    console.log(ninethCo2);

    let decimalResultCo2 = parseInt(ninethCo2[0], 2);
    let decimalResultO2 = parseInt(twelthArray[0], 2);

    console.log("The decimal of CO2 is ", decimalResultCo2);
    console.log("The decumal for the O2 is", decimalResultO2);

    let lifeSupportData = decimalResultCo2 * decimalResultO2;
    console.log("The life Support Data is", lifeSupportData);
});

function filterArray(arrayEntry, positionOnArray) {
    let firstFilterArray = [];
    let numbToCompare = mostCommomFinder(arrayEntry, positionOnArray);
    let stringToCompare = numbToCompare.toString();
    for (let i = 0; i < arrayEntry.length; i++) {
        if (arrayEntry[i][positionOnArray] === stringToCompare) {
            firstFilterArray.push(arrayEntry[i]);
        }
    }

    return firstFilterArray;
}

function filterArrayCo2(arrayEntry, positionOnArray) {
    let firstFilterArray = [];
    let numbToCompare = lessCommom(arrayEntry, positionOnArray);
    let stringToCompare = numbToCompare.toString();
    for (let i = 0; i < arrayEntry.length; i++) {
        if (arrayEntry[i][positionOnArray] === stringToCompare) {
            firstFilterArray.push(arrayEntry[i]);
        }
    }

    return firstFilterArray;
}

/**
 * Entry with the array tha need to be searched and
 * the position on that array that the search will
 * take place
 *
 */
function mostCommomFinder(arrayEntry, positionOnArray) {
    let theMostCommom;
    let counterTo0 = 0;
    let counterTo1 = 0;
    for (let i = 0; i < arrayEntry.length; i++) {
        if (arrayEntry[i][positionOnArray] === "0") {
            counterTo0 += 1;
        } else {
            counterTo1 += 1;
        }
    }

    if (counterTo0 > counterTo1) {
        theMostCommom = 0;
        return theMostCommom;
    } else if (counterTo0 < counterTo1) {
        theMostCommom = 1;
        return theMostCommom;
    } else {
        theMostCommom = 1;
        return theMostCommom;
    }
}

function lessCommom(arrayEntry, positionOnArray) {
    let theMostCommom;
    let counterTo0 = 0;
    let counterTo1 = 0;
    for (let i = 0; i < arrayEntry.length; i++) {
        if (arrayEntry[i][positionOnArray] === "0") {
            counterTo0 += 1;
        } else {
            counterTo1 += 1;
        }
    }

    if (counterTo0 > counterTo1) {
        theMostCommom = 1;
        return theMostCommom;
    } else if (counterTo0 < counterTo1) {
        theMostCommom = 0;
        return theMostCommom;
    } else {
        theMostCommom = 0;
        return theMostCommom;
    }
}

function partOneAnswer() {
    let epsilonData = invertData(gammaData);

    console.log(epsilonData);

    let joinedGamma = gammaData.join("");
    let joinEpsilon = epsilonData.join("");

    console.log(joinedGamma);
    console.log(joinEpsilon);

    let resultGamma = parseInt(joinedGamma, 2);
    let resultEpsilon = parseInt(joinEpsilon, 2);

    console.log("Gama Data", resultGamma);
    console.log("Epsilon Data", resultEpsilon);

    console.log("the Multiply is", resultGamma * resultEpsilon);
}

/**
 *
 * Get the most commom number in each spot of the
 * 12 number data
 */
function getTheMostCommon(numberList) {
    let countCommom0 = 0;
    let countCommom1 = 0;
    let mostCommom;

    for (let number of numberList) {
        if (number === "0") {
            countCommom0 += 1;
        } else {
            countCommom1 += 1;
        }
    }

    if (countCommom0 > countCommom1) {
        mostCommom = 0;
        return mostCommom;
    } else {
        mostCommom = 1;
        return mostCommom;
    }
}

function invertData(numberList) {
    let epsilonData = [];

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] === 0) {
            epsilonData.push(1);
        } else {
            epsilonData.push(0);
        }
    }

    return epsilonData;
}