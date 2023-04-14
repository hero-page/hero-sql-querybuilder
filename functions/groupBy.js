/* eslint-disable */ 

/**
 * Builds a GROUP BY clause with given column(s). Handles single column, multiple columns, and checks for valid column names.
 *
 * @param {string[]} columns - The list of columns to use for the GROUP BY clause.
 * @return {string} The generated GROUP BY clause with the specified columns.
 * @example
 *   groupBy(['name', 'age']) // returns 'GROUP BY name, age'
 */
function groupBy(columns) {
    if (columns.length === 0) {
        throw new Error("No columns provided for the GROUP BY clause");
    }
    
    const columnNameRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
    const invalidColumns = columns.filter(column => !columnNameRegex.test(column));
    if (invalidColumns.length > 0) {
        throw new Error(`Invalid column names found: ${invalidColumns.join(', ')}`);
    }
    
    const groupedColumns = columns.join(', ');
    return `GROUP BY ${groupedColumns}`;
}

module.exports = {
    groupBy
};