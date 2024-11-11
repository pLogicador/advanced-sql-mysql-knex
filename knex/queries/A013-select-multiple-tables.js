/*
-- Selects users.id, profiles.id, profiles.bio, profiles.description, users.first_name
    from the users table and the profiles table
    where the user id is the same as the user_id from profiles

SELECT u.id AS uid, p.id AS pid, p.bio, u.first_name
    FROM users AS u, profiles AS p
        WHERE u.id = p.user_id;
*/

const knex = require('../config/database');
const select = knex(
        knex.raw(
            '?? as ??, ?? as ??',
            ['users', 'u', 'profiles', 'p']
        )
    )
    .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
    .where('u.id', '=', knex.raw('??', ['p.user_id']));

console.log(select.toString());

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
