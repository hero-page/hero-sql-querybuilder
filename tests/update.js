/* eslint-disable */ 


        const {update} = require("../functions/update"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for the update function.
 */
function testUpdateFunction() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "update";

    try {
        const expectedResult = "UPDATE users SET name = 'John', age = '30' WHERE id = 1";
        const result = update('users', {name: 'John', age: '30'}, 'id = 1');

        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const expectedResult = "UPDATE products SET price = 25.99";
        const result = update('products', {price: 25.99});

        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const expectedResult = "UPDATE orders SET status = 'completed', total = 49.99 WHERE order_id = 42";
        const result = update('orders', {status: 'completed', total: 49.99}, 'order_id = 42');

        if (result === expectedResult) {
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
    testUpdateFunction
};