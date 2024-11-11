/*
SELECT 
MAX(salary) AS max_salary,
MIN(salary) AS min_salary,
AVG(salary) AS avg_salary,
SUM(salary) AS sum_salary,
count(salary) AS count_salary
FROM users;

SELECT 
u.first_name,
MAX(u.salary) AS max_salary,
MIN(u.salary) AS min_salary,
AVG(u.salary) AS avg_salary,
SUM(u.salary) AS sum_salary,
COUNT(u.id) AS total
FROM users u
LEFT JOIN profiles AS p
ON p.user_id = u.id
GROUP BY u.first_name
ORDER BY total DESC;

*/
const knex = require('../config/database');
const select = knex('users')
    .max('salary as max_salary')
    .min('salary as min_salary')
    .avg('salary as avg_salary')
    .sum('salary as sum_salary')
    .count('salary as total');

console.log(select.toString());

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
