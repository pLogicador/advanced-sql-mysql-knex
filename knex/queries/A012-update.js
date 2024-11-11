/*
-- UPDATE (Update records)

UPDATE users SET
    first_name = 'Pedro',
    last_name = 'Miranda'
        WHERE id = 29;

SELECT * FROM users WHERE id = 29;
*/

const knex = require('../config/database');
const select = knex.from('users').where('id', '=', 29);
const update = knex.from('users').update({
    first_name: 'plogicador',
    last_name: 'Miranda'
}).where('id', '=', 29);

console.log(select.toString());
console.log(update.toString());

update.then(data => {
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
