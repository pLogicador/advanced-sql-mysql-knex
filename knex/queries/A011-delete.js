/*
-- DELETE (deletes records from the table)

DELETE FROM users WHERE id = 115;

-- Warning: use SELECT to ensure you are deleting the correct values

SELECT * FROM users 
    WHERE id BETWEEN 110 AND 115;

*/

const knex = require('../config/database');
const select = knex('users').select('id', 'first_name');
const deleteSql = knex('users').delete().whereBetween('id', [30, 35]);

console.log(select.toString());
console.log(deleteSql.toString());

deleteSql.then(data => {
    console.log(data);

    select.then(data => {
        console.log(data);
    }).catch(e => {
        console.log('ERROR:', e.message);
    })
}).catch(e => {
    console.log('ERROR:', e.message);
}).finally(() => {
    knex.destroy();
});
