const User = require('../../models/User')
const Item = require('../../models/Item')
const Cart = require('../../models/Cart')
const Transaction = require('../../models/Transaction')
const Review = require('../../models/Review')

// ^ need Cart, Transaction, and Review models to be added to tbe models folder

const allUsers = async () => {
  try {
    const users = await User.query()
    return users
  } catch (err) {
    throw new Error('Failed to get users')
  }
}

const user = async (obj, { id }) => {
  const userInfo = await User.query().findById(id)
  return userInfo
}

const transactions = async ({ id }) => {
  const trans = await Transaction.query().where('buyerId', id).orderBy('boughtAt')
  return trans
}

const itemsSelling = async ({ id }) => {
  const inUserShop = await Item.query().where('sellerId', id).orderBy('createdAt')
  return inUserShop
}

const cart = async ({ id }) => {
  const itemsInCart = await Cart.query().where('userId', id).groupBy('itemId')
  return itemsInCart
}

const reviewsReceived = async ({ id }) => {
  const itemReviews = await Review.query().where('sellerId', id).groupBy('itemId')
  return itemReviews
}

const reviewsWritten = async ({ id }) => {
  const itemReviews = await Review.query().where('buyerId', id).groupBy('itemId')
  return itemReviews
}

const resolver = {
  Query: {
    allUsers,
    user,
  },
  User: {
    itemsSelling,
    transactions,
    cart,
    reviewsReceived,
    reviewsWritten,
  },
}

module.exports = resolver
