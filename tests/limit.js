/* eslint-disable */ 


        const {limit} = require("../functions/limit"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for the limit function
 */
function testLimit() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "limit";

    // Test case: valid limit value
    try {
        const limitValue1 = 10;
        const expectedResult1 = "LIMIT 10";
        const result1 = limit(limitValue1);
        if (result1 === expectedResult1) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case: invalid limit value (negative)
    try {
        const limitValue2 = -5;
        const expectedResult2 = "";
        const result2 = limit(limitValue2);
        if (result2 === expectedResult2) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case: invalid limit value (non-integer)
    try {
        const limitValue3 = 5.5;
        const expectedResult3 = "LIMIT 5";
        const result3 = limit(limitValue3);
        if (result3 === expectedResult3) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case: invalid limit value (non-number)
    try {
        const limitValue4 = "not a number";
        const expectedResult4 = "";
        const result4 = limit(limitValue4);
        if (result4 === expectedResult4) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testLimit
};