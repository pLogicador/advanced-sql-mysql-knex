/*
-- Ignore errors

INSERT IGNORE INTO users_roles (user_id, role_id)
    SELECT id, 
    (SELECT id FROM roles ORDER BY RAND() LIMIT 1) AS qualquer
        FROM users ORDER BY RAND() LIMIT 5;
*/

const knex = require('../config/database');
const insert = knex (
    knex.raw('users_roles (user_id, role_id)')
).insert(qb => {
    qb.select('id').from('users').select(qb => {
        qb.select('id').from('roles').orderByRaw('rand()').limit(1).as('qualquer');
    });
});

const insertIgnore = knex.raw(
    insert.toString().replace('insert', 'insert ignore')
);

console.log(insertIgnore.toString());

insertIgnore.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
