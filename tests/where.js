/* eslint-disable */ 


        const {where} = require("../functions/where"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}
/**
 * Test function for where function.
 */
function testWhere() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "where";

    try {
        const result = where("id = 1");
        if (result === "WHERE id = 1") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = where([{ cond: "id = 1", op: "AND", cond: "name = \"John\"" }]);
        if (result === "WHERE id = 1 AND name = \"John\"") {
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
    testWhere
};