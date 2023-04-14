/* eslint-disable */ 

/**
 * Builds a basic INSERT query with the given table name, column names, and value(s).
 * Handles single/multiple rows and checks for matching column and value count.
 *
 * @param {string} tableName - The name of the table to insert data into.
 * @param {string[]} columnNames - The array of column names to insert data into.
 * @param {string[][]} values - A 2D array containing values to be inserted into the table.
 * @return {string} A complete INSERT query string.
 *
 * @example
 * insert('users', ['name', 'age'], [['John', '30'], ['Jane', '25']])
 * // returns 'INSERT INTO users (name, age) VALUES ('John', '30'), ('Jane', '25')'
 */
function insert(tableName, columnNames, values) {
    const columns = columnNames.join(", ");
    const valuesList = [];

    for (const row of values) {
        if (row.length !== columnNames.length) {
            throw new Error("Mismatch in column count and value count.");
        }

        const valueString = row.map(value => {
            if (typeof value === "string") {
                return `'${value}'`;
            }
            return value;
        }).join(", ");
        valuesList.push(`(${valueString})`);
    }

    const query = `INSERT INTO ${tableName} (${columns}) VALUES ${valuesList.join(", ")}`;
    return query;
}

module.exports = {
    insert
};