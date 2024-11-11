/*
-- Sets a random salary for users
    update users set salary = round(rand() * 10000, 2);

SELECT salary FROM users 
    WHERE salary BETWEEN 1000 and 1500
        ORDER BY salary ASC;
*/

const knex = require('../config/database');
const update = knex('users').update({
    salary: knex.raw('round(rand() * ??, ??)', [10000, 2])
});

console.log(update.toString());

update.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
