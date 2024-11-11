/*
-- INSERT SELECT (Insert values ​​into one table using another)

INSERT INTO profiles(bio, description, user_id) SELECT
    CONCAT('Bio de ', first_name),
    CONCAT('Description de ', first_name),
        id FROM users;
*/

const knex = require('../config/database');
const insert = knex(
    knex.raw(
        '?? (??, ??, ??)',
        ['profiles', 'bio', 'description', 'user_id']
    )
).insert((qb) => {
    qb.from('users').select(
        knex.raw(
            'concat("Bio de ", ??)',
            ['first_name']
        ), 
        knex.raw("concat('Description de ', first_name)"), 
        'id'
    );
});

console.log(insert.toString());

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR:', e.message);
}).finally(() => {
    knex.destroy();
});
