/*
-- Delete records with joins

SELECT u.first_name, p.bio FROM users u
    LEFT JOIN profiles AS p 
    ON p.user_id = u.id
        WHERE u.first_name = 'Katelyn';

DELETE p, u FROM users u
    LEFT JOIN profiles AS p
    ON p.user_id = u.id
        WHERE u.first_name = 'Katelyn';
*/

const knex = require('../config/database');
const deleteSql = knex.raw(`
    DELETE p, u FROM users u
    INNER JOIN profiles AS p
    ON p.user_id = u.id
        WHERE u.first_name = ? AND p.bio LIKE ?;
`, ['Katelyn', '%Katelyn%']);

console.log(deleteSql.toString());
/*
deleteSql.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
*/