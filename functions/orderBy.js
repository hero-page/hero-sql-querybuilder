/* eslint-disable */ 

/**
 * Builds an ORDER BY clause with given column(s) and optional sort order.
 *
 * @param {string|string[]} columns - The column(s) to order the results by.
 * @param {string} [sortOrder] - The sort order (ASC/DESC). Default is 'ASC'.
 * @return {string} The ORDER BY clause with the given column(s) and sort order.
 * @example
 * // Returns 'ORDER BY name DESC'
 * orderBy('name', 'DESC');
 * // Returns 'ORDER BY name ASC, age DESC'
 * orderBy(['name', { column: 'age', sortOrder: 'DESC' }])
 */
function orderBy(columns, sortOrder = 'ASC') {
    if (typeof columns === 'string') {
        return `ORDER BY ${columns} ${sortOrder}`;
    }

    const orderByClauses = columns.map((column) => {
        if (typeof column === 'string') {
            return `${column} ${sortOrder}`;
        }
        return `${column.column} ${column.sortOrder || sortOrder}`;
    });

    return `ORDER BY ${orderByClauses.join(', ')}`;
}

module.exports = {
    orderBy
};