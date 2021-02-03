const User = require('../../models/User')

const allUsers = async () => {
  try {
    const users = await User.query()
    return users
  } catch (err) {
    throw new Error('Failed to get users')
  }
}

const resolver = {
  Query: {
    allUsers,
  },
}

module.exports = resolver
