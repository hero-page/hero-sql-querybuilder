/* eslint-disable */ 

/**
 * Builds a simple SELECT query with given columns and table name.
 * Handles edge cases where columns are empty or not an array, and table name is not a string.
 *
 * @param {string[]} columns - The columns to be selected.
 * @param {string} tableName - The table name to select from.
 * @return {string} A SELECT query with specified columns and table name.
 * @example
 * select(['id', 'name'], 'users') // returns 'SELECT id, name FROM users'
 */
function select(columns, tableName) {
    if (!Array.isArray(columns) || typeof tableName !== "string") {
        return "";
    }

    if (columns.length === 0) {
        return "SELECT * FROM " + tableName;
    }

    return "SELECT " + columns.join(", ") + " FROM " + tableName;
}

module.exports = {
    select
};