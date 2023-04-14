/* eslint-disable */ 


        const {select} = require("../functions/select"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for select() function.
 */
function testSelect() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "select";

    try {
        const result = select(["id", "name"], "users");
        if (result === "SELECT id, name FROM users") {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const result = select([], "users");
        if (result === "SELECT * FROM users") {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const result = select(["id"], 123);
        if (result === "") {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const result = select("id, name", "users");
        if (result === "") {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testSelect
};