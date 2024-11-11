/*
SELECT * FROM users
    WHERE 
        created_at BETWEEN '2020-12-15 23:33:41' 
        AND first_name = 'Pedro' 
        AND password_hash = 'a_hash'
*/

const knex = require('../config/database');
const selectBetween = knex('users')
    .select('id', 'first_name')
    .whereBetween('id', [80, 83])
    .orWhereBetween('id', [10, 15]);

console.log(selectBetween.toString());

selectBetween.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR:', e.message);
}).finally(() => {
    knex.destroy();
});
