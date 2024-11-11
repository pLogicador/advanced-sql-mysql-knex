/*
SELECT * FROM users
    WHERE 
        created_at < '2020-12-15 23:33:41' 
        AND first_name = 'Pedro' 
        AND password_hash = 'a_hash'
*/

const knex = require('../config/database');
const select = knex('users').select('id', 'first_name')
    .where('id', '=', 3)
    .andWhere('first_name', '=', 'Pedro')
    .orWhere('id', '=', 1);
//  .where('id', '=', 3); // Simple search
//  .where({id: 1, first_name: 'Pedro'}); // Use wrenches in isolated cases

console.log(select.toString());

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR:', e.message);
}).finally(() => {
    knex.destroy();
});
