const {testGroupBy} = require('./tests/groupBy.js');
const {testInsertFunction} = require('./tests/insert.js');
const {testLimit} = require('./tests/limit.js');
const {testOrderByFunction} = require('./tests/orderBy.js');
const {testSelect} = require('./tests/select.js');
const {testUpdateFunction} = require('./tests/update.js');
const {testWhere} = require('./tests/where.js');

testGroupBy();
testInsertFunction();
testLimit();
testOrderByFunction();
testSelect();
testUpdateFunction();
testWhere();