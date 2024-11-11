/*
-- LIMIT (limits the amount of values)
-- OFFSET (move the cursor to display the results)
SELECT id, first_name, email AS uemail
    FROM users
        WHERE id BETWEEN 100 AND 150
            ORDER BY id ASC
            LIMIT 9, 3;
*/

const knex = require('../config/database');
const select = knex('users')
    .select('id', 'first_name')
    .orderBy('id', 'asc')
    .limit(5)
    .offset(5);

console.log(select.toString());

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR:', e.message);
}).finally(() => {
    knex.destroy();
});
