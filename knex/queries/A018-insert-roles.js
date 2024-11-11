/*
-- Insert data into the roles table

INSERT INTO roles(names) 
    VALUES ('POST'),('PUT'),('DELETE'),('GET');
*/

const knex = require('../config/database');
const insert = knex('roles').insert([
    { name: 'POST'},
    { name: 'PUT'},
    { name: 'DELETE'},
    { name: 'GET'},
]);

console.log(insert.toString());

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
