/*
-- Selects users.id, profiles.id, profiles.bio, profiles.description, users.first_name
-- from the users table (optional left table) 
-- joining with the profiles table (all records from the right table)
-- when the condition u.id = p.user_id is met where users.first_name ends with "a"
-- sorts by users.first_name descending
-- limits to 5 records

SELECT u.id AS uid, p.id AS pid, p.bio, u.first_name
    FROM users AS u, 
        RIGHT JOIN profiles p
        ON u.id = p.user_id
        WHERE u.first_name LIKE '%a'
        ORDER BY u.first_name DESC 
        LIMIT 5;
*/

const knex = require('../config/database');
const select = knex('users as u')
    .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
    .rightJoin('profiles as p', 'u.id', 'p.user_id')
    .orderBy('u.id', 'asc')
    .limit(5);

console.log(select.toString());
    
select.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
