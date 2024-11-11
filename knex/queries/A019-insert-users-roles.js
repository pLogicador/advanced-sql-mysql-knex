/*
INSERT INTO users_roles (user_id, role_id)
    VALUES
        (518, 4);

SELECT user_id, role_id FROM users_roles 
    WHERE user_id = 518 AND role_id = 4;

SELECT id, 
    (SELECT id FROM roles ODER BY rand() limit 1) AS qualquer 
    FROM users;

INSERT INTO users_roles (user_id, role_id)
    SELECT id, 
        (SELECT id FROM roles ODER BY rand() limit 1) AS qualquer 
        FROM users;
*/

const knex = require('../config/database');
const insert = knex (
    knex.raw('users_roles (user_id, role_id)')
).insert(qb => {
    qb.select('id').from('users').select(qb => {
        qb.select('id').from('roles').orderByRaw('rand()').limit(1).as('qualquer');
    });
});

console.log(insert.toString());

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
