/* eslint-disable */ 


        const {groupBy} = require("../functions/groupBy"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Tests groupBy function
 */
function testGroupBy() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "groupBy";

    try {
        const result = groupBy(["name", "age"]);
        if (result === "GROUP BY name, age") {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const result = groupBy(["name"]);
        if (result === "GROUP BY name") {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        groupBy([]);
        numberOfTestsFailed++;
    } catch (err) {
        numberOfTestsPassed++;
    }

    try {
        groupBy(["invalid#", "age"]);
        numberOfTestsFailed++;
    } catch (err) {
        numberOfTestsPassed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testGroupBy
};