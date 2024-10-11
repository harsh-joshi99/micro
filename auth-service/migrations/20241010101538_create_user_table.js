/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const up = async function(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments().primary();
    table.string('username').notNullable();
    table.string('email').notNullable().index().unique();
    table.string('password').notNullable();
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const down = async function(knex) {
 await knex.schema.dropTableIfExists("users")
};

export { up, down };
