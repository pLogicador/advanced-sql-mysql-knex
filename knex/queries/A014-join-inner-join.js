/*
-- Selects users.id, profiles.id, profiles.bio, profiles.description, users.first_name
    from the users table and the profiles table
    where the user id is the same as the user_id from profiles

SELECT u.id AS uid, p.id AS pid, p.bio, u.first_name
    FROM users AS u, 
        INNER JOIN profiles p
        ON u.id = p.user_id
        WHERE u.first_name LIKE '%a'
        ORDER BY u.first_name DESC 
        LIMIT 5;
*/

const knex = require('../config/database');
const select = knex('users as u')
    .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
    .innerJoin('profiles as p', 'u.id', 'p.user_id')
    .where('u.first_name', 'like', '%a')
    .orderBy('u.first_name', 'desc')
    .limit(5);

console.log(select.toString());
    
select.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
