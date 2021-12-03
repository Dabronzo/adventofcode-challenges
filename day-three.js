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

    let gammaData = [];

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

    gammaData[0] = getTheMostCommon(firstNumber);
    gammaData[1] = getTheMostCommon(secondNumber);
    gammaData[2] = getTheMostCommon(thirdNumber);
    gammaData[3] = getTheMostCommon(fourthNumber);
    gammaData[4] = getTheMostCommon(fifthNumber);
    gammaData[5] = getTheMostCommon(sixthNumber);
    gammaData[6] = getTheMostCommon(seventhNumber);
    gammaData[7] = getTheMostCommon(eightNumber);
    gammaData[8] = getTheMostCommon(ninethNumber);
    gammaData[9] = getTheMostCommon(tenthNumber);
    gammaData[10] = getTheMostCommon(elevenNumber);
    gammaData[11] = getTheMostCommon(twelveNumber);

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
});

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