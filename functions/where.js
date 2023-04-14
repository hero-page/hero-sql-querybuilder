/* eslint-disable */ 

/**
 * Builds a WHERE clause with given condition(s). Handles single conditions,
 * multiple conditions with AND or OR, and nested conditions.
 *
 * @param {string | Object[]} conditions - The condition(s) to build into a WHERE clause.
 * @example
 * // returns 'WHERE id = 1'
 * where('id = 1')
 * @example
 * // returns 'WHERE id = 1 AND name = "John"'
 * where([{cond: 'id = 1', op: 'AND', cond: 'name = "John"'}])
 * @return {string} The built WHERE clause.
 */
function where(conditions) {
    let clause = "WHERE ";

    if (typeof conditions === "string") {
        return clause + conditions;
    }

    for (let i = 0; i < conditions.length; i++) {
        const condition = conditions[i];
        clause += condition.cond;

        if (i < conditions.length - 1) {
            clause += ` ${condition.op} `;
        }
    }

    return clause;
}

module.exports = {
    where
};