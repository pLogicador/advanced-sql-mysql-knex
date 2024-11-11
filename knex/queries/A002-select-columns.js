/*
SELECT
    u.email as uemail, u.id as uid, u.first_name as ufirst_name
FROM users as u;
*/

const knex = require('../config/database');

const select = knex('users as u')
    .select('u.email as uemail', 'u.id as uid');

console.log(select.toString());

select.then(data => {
    for (const user of data) {
        console.log(user);
    }
}).catch(e => {
    console.log('ERROR:', e.message);
}).finally(() => {
    knex.destroy();
});
