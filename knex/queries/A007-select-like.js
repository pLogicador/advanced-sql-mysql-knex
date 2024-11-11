/*
-- LIKE (similar)
-- % (anything)
-- _ (one character)
SELECT * FROM users
    WHERE
        first_name LIKE '%ma%_';
*/

const knex = require('../config/database');
const select = knex('users')
    .select('id', 'first_name')
    .where('first_name', 'like', '%na')
    .orWhere('first_name', 'like', '___');

console.log(select.toString());

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR:', e.message);
}).finally(() => {
    knex.destroy();
});
