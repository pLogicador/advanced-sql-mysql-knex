/*
-- GROUP BY - Groups values

EX1:
SELECT first_name, COUNT(id) AS total FROM users
    GROUP BY first_name
    ODER BY total DESC;

EX2:
SELECT u.first_name, COUNT(u.id) AS total FROM users u
    LEFT JOIN profiles AS p
    ON p.user_id = u.id
        WHERE u.id IN (617, 539, 537, 611)
        GROUP BY first_name
        ORDER BY total DESC 
        LIMIT 5;
*/

const knex = require('../config/database');
const selectEx1 = knex('users')
    .select('first_name')
    .count('id as total')
    .groupBy('first_name')
    .orderBy('total', 'desc');

const selectEx2 = knex('users as u')
    .select('u.first_name')
    .leftJoin('profiles as p', 'u.id', 'p.user_id')
    .count('u.id as total')
    .whereIn('u.id', [69, 112, 10, 11])
    .groupBy('first_name')
    .orderBy('total', 'desc');


console.log(selectEx1.toString());
/*
selectEx1.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
*/