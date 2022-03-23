
exports.up = function(knex) {
    return knex.schema.alterTable('users', table => {
        table.timestamp('deletedat')
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('users', table => {
        table.dropColumn('deletedat')
    })
};
