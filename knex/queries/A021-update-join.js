/*
-- Ignore errors

SELECT u.first_name, p.bio FROM users u
    JOIN profiles AS p 
    ON p.user_id = u.id
        WHERE u.first_name = 'Katelyn';

UPDATE users AS u
    JOIN profiles AS p
    ON p.user_id = u.id
        SET p.bio = CONCAT(p.bio, ' updated')
            WHERE u.first_name = 'Katelyn';
*/

const knex = require('../config/database');
const update = knex('users as u')
    .join('profiles as p', 'u.id', 'p.user_id')
    .update({
        'p.bio': knex.raw('CONCAT(p.bio, " updated")')
    })
    .where({
        'u.first_name': 'Katelyn'
    });

console.log(update.toString());
/*
update.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
*/