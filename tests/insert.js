/* eslint-disable */ 


        const {insert} = require("../functions/insert"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/** 
 * Test for the insert function:
 * 1. Test with one row of values and two columns
 * 2. Test with multiple rows of values and two columns
 * 3. Test with mismatched column and value count (should throw error)
 * 4. Test with multiple rows of values and non-string values (such as numbers)
 */
function testInsertFunction() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "insert";

    try {
        const query1 = insert('users', ['name', 'age'], [['John', '30']]);
        const expectedQuery1 = "INSERT INTO users (name, age) VALUES ('John', '30')";
        if (query1 === expectedQuery1) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const query2 = insert('users', ['name', 'age'], [['John', '30'], ['Jane', '25']]);
        const expectedQuery2 = "INSERT INTO users (name, age) VALUES ('John', '30'), ('Jane', '25')";
        if (query2 === expectedQuery2) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        insert('users', ['name', 'age'], [['John', '30'], ['Jane']]);
        number_of_tests_failed++;
    } catch (err) {
        if (err.message === "Mismatch in column count and value count.") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    }

    try {
        const query4 = insert('users', ['name', 'age'], [['John', 30], ['Jane', 25]]);
        const expectedQuery4 = "INSERT INTO users (name, age) VALUES ('John', 30), ('Jane', 25)";
        if (query4 === expectedQuery4) {
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
    testInsertFunction
};