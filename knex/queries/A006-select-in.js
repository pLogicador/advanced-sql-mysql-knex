/*
SELECT * FROM users
    WHERE 
        id IN (110, 115, 120, 125, 130, 1000, 12200, 125452)
        AND first_name IN ('Pedro', 'Keelie')
*/

const knex = require('../config/database');
const selectBetween = knex('users')
    .select('id', 'first_name')
    .whereIn('id', [10, 15, 20, 25])
    .orWhereBetween('id', [10, 15]);

console.log(selectBetween.toString());

selectBetween.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR:', e.message);
}).finally(() => {
    knex.destroy();
});
