/* eslint-disable */ 

/**
 * Builds an UPDATE query with given table name, column and value pairs, and optional WHERE clause.
 *
 * @param {string} tableName - The name of the table to update.
 * @param {Object} columnValuePairs - An object containing column and value pairs.
 * @param {string} [whereClause] - An optional WHERE clause for the query.
 * @return {string} A generated SQL UPDATE query string.
 * @example
 * // returns "UPDATE users SET name = 'John', age = '30' WHERE id = 1"
 * update('users', {name: 'John', age: '30'}, 'id = 1')
 */
function update(tableName, columnValuePairs, whereClause) {
    const columnValuePairsArray = [];

    for (const column in columnValuePairs) {
        const value = typeof columnValuePairs[column] === 'string' ? `'${columnValuePairs[column]}'` : columnValuePairs[column];

        columnValuePairsArray.push(`${column} = ${value}`);
    }

    let queryString = `UPDATE ${tableName} SET ${columnValuePairsArray.join(', ')}`;

    if (whereClause) {
        queryString += ` WHERE ${whereClause}`;
    }

    return queryString;
}

module.exports = {
    update
};