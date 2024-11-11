/*
-- ORDER (orders values):
-- ORDER BY id ASC (id ascending)
-- ORDER BY id DESC (id descending)
-- ORDER BY id ASC, first_name DESC (prioritizes the id)
SELECT id, first_name, email AS uemail
    FROM users
    WHERE id BETWEEN 100 AND 150 
                ORDER BY first_name DESC;
*/

const knex = require('../config/database');
const select = knex('users')
    .select('id', 'first_name')
    .where('first_name', 'like', '%na')
    .orWhere('first_name', 'like', '___')
    .orderBy('id', 'asc');

console.log(select.toString());

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR:', e.message);
}).finally(() => {
    knex.destroy();
});
