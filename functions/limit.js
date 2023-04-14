/* eslint-disable */ 

/**
 * Builds a LIMIT clause with the given limit value.
 * Handles edge cases where limit is not a valid number or is less than 1.
 *
 * @param {number} limit - The limit value for the LIMIT clause.
 * @return {string} The valid LIMIT clause or empty string if limit is not valid.
 *
 * @example
 * // returns 'LIMIT 10'
 * limit(10);
 *
 * // returns ''
 * limit(-5);
 */
function limit(limitValue) {
    if (typeof limitValue !== "number" || limitValue < 1) {
        return "";
    }
    return `LIMIT ${Math.floor(limitValue)}`;
}

module.exports = {
    limit
};