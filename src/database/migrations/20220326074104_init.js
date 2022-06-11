exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('email', 150).notNullable().unique();
        table.string('password', 150).notNullable();
        table.string('first_name', 60).notNullable();
        table.string('last_name', 80).notNullable();
        table.timestamps(true, true);
    })
}


exports.down = function (knex) {
    return knex.schema.dropTable('users');
}
