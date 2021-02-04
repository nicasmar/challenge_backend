const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table
    .string('username')
    .unique()
    .notNullable()

  table.string('password').notNullable()

  table.timestamp('dateJoined').defaultTo(knex.fn.now())
  table.string('city')
  table.string('vaccine')
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
