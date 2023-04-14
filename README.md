
_This entire repository was created completely with **AI**, using the [hero-ai-package-creator](https://github.com/hero-page/hero-ai-package-creator), which is **open-source**, uses **GPT-4**, and is written & maintained by [**Sam Chahine**](https://hero.page/samir)_ ❣️🧞‍♀️ 



# hero-sql-querybuilder

A library that assists in building dynamic SQL queries with various conditions and options.

## Functions

### `select(columns, tableName)`

Builds a simple SELECT query with given columns and table name. Handles edge cases where columns are empty or not an array, and table name is not a string. For example, `select(['id', 'name'], 'users')` returns 'SELECT id, name FROM users'.

### `where(condition(s))`

Builds a WHERE clause with given condition(s). Handles single conditions, multiple conditions with AND or OR, and nested conditions. For example, `where('id = 1')` returns 'WHERE id = 1'; `where([{cond: 'id = 1', op: 'AND', cond: 'name = John'}])` returns 'WHERE id = 1 AND name = John'.

### `orderBy(column(s), sortOrder)`

Builds an ORDER BY clause with given column(s) and optional sort order. Handles single column or multiple columns with ASC/DESC. For example, `orderBy('name', 'DESC')` returns 'ORDER BY name DESC'.

### `groupBy(column(s))`

Builds a GROUP BY clause with given column(s). Handles single column, multiple columns, and checks for valid column names. For example, `groupBy(['name', 'age'])` returns 'GROUP BY name, age'.

### `limit(limitValue)`

Builds a LIMIT clause with the given limit value. Handles edge cases where limit is not a valid number or is less than 1. For example, `limit(10)` returns 'LIMIT 10'.

### `insert(tableName, columnNames, values)`

Builds a basic INSERT query with given table name, column names, and value(s). Handles single/multiple rows and checks for matching column and value count. For example, `insert('users', ['name', 'age'], [['John', '30'], ['Jane', '25']])` returns "INSERT INTO users (name, age) VALUES ('John', '30'), ('Jane', '25')".

### `update(tableName, columnValuePair, whereClause)`

Builds an UPDATE query with given table name, column and value pairs, and optional WHERE clause. Handles single/multiple column-value pairs and checks for matching column and value count. For example, `update('users', {name: 'John', age: '30'}, 'id = 1')` returns "UPDATE users SET name = 'John', age = '30' WHERE id = 1".

---

[Sam Chahine](https://github.com/kingmeers), at [Hero](https://hero.page)
                

### Tests for groupBy

![groupBy](https://img.shields.io/badge/groupBy()-4%20passed%2C%200%20failed.-13b285)

### Tests for select

![select](https://img.shields.io/badge/select()-4%20passed%2C%200%20failed.-13b285)

### Tests for update

![update](https://img.shields.io/badge/update()-3%20passed%2C%200%20failed.-13b285)

### Tests for where

![where](https://img.shields.io/badge/where()-1%20passed%2C%201%20failed.-ff69b4)

### Tests for insert

![insert](https://img.shields.io/badge/insert()-4%20passed%2C%200%20failed.-13b285)

### Tests for limit

![limit](https://img.shields.io/badge/limit()-4%20passed%2C%200%20failed.-13b285)

### Tests for orderBy

![orderBy](https://img.shields.io/badge/orderBy()-4%20passed%2C%200%20failed.-13b285)