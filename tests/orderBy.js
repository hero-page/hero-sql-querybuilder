/* eslint-disable */ 


        const {orderBy} = require("../functions/orderBy"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for orderBy function
 */
function testOrderByFunction() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "orderBy";

    try {
        const singleColumnDesc = orderBy('name', 'DESC');
        if (singleColumnDesc === 'ORDER BY name DESC') {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const multipleColumns = orderBy(['name', { column: 'age', sortOrder: 'DESC' }]);
        if (multipleColumns === 'ORDER BY name ASC, age DESC') {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const singleColumnAsc = orderBy('name');
        if (singleColumnAsc === 'ORDER BY name ASC') {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const multipleColumnsWithDefaultSortOrder = orderBy([{ column: 'name' }, { column: 'age' }]);
        if (multipleColumnsWithDefaultSortOrder === 'ORDER BY name ASC, age ASC') {
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
    testOrderByFunction
};