const db = require('../models');
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage
} = require('../helpers/responseHelper');
const validate = require('validate.js');

    const constraints = {
        userId: {
          presence: true,
          numericality: {
            onlyInteger: true,
            greaterThan: 0
          }
        },
        // Lägg till fler regler här baserat på dina varukorgsfält
      };


// Hjälpfunktion för att formatera varukorgsdata
function _formatCart(cart) {
  // Anpassa denna funktion baserat på de attribut du vill inkludera i ditt svar
  return {
    id: cart.id,
    userId: cart.userId,
    products: cart.Products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      // Lägg till fler produktattribut här
    })),
  };
}

async function getByUser(userId) {
  try {
    const user = await db.User.findByPk(userId, {
      include: [{ model: db.Cart, include: [db.Product] }]
    });
    if (!user) return createResponseError(404, 'Användare inte hittad');
    return createResponseSuccess(user.Carts.map(cart => _formatCart(cart)));
  } catch (error) {
    return createResponseError(500, error.message);
  }
}

async function getById(id) {
  try {
    const cart = await db.Cart.findByPk(id, {
      include: [db.User, db.Product]
    });
    if (!cart) return createResponseError(404, 'Varukorg inte hittad');
    return createResponseSuccess(_formatCart(cart));
  } catch (error) {
    return createResponseError(500, error.message);
  }
}

async function getAll() {
  try {
    const allCarts = await db.Cart.findAll({ include: [db.User, db.Product] });
    return createResponseSuccess(allCarts.map(cart => _formatCart(cart)));
  } catch (error) {
    return createResponseError(500, error.message);
  }
}

// Skapa en ny varukorg
async function create(cartData) {
    const invalidData = validate(cartData, constraints);
    if (invalidData) {
      return createResponseError(422, "Ogiltiga data", invalidData);
    }
    try {
      const newCart = await db.Cart.create(cartData);
      return createResponseSuccess(_formatCart(newCart));
    } catch (error) {
      return createResponseError(500, error.message);
    }
  }
  
  // Uppdatera en befintlig varukorg
  async function update(id, cartData) {
    const invalidData = validate(cartData, constraints);
    if (invalidData) {
      return createResponseError(422, "Ogiltiga data", invalidData);
    }
    try {
      const cart = await db.Cart.findByPk(id);
      if (!cart) {
        return createResponseError(404, 'Varukorg inte hittad');
      }
      const updatedCart = await cart.update(cartData);
      return createResponseSuccess(_formatCart(updatedCart));
    } catch (error) {
      return createResponseError(500, error.message);
    }
  }
  
  // Radera en varukorg
  async function destroy(id) {
    try {
      const deleted = await db.Cart.destroy({ where: { id } });
      if (deleted) {
        return createResponseMessage(200, 'Varukorgen raderades.');
      } else {
        return createResponseError(404, 'Varukorg inte hittad');
      }
    } catch (error) {
      return createResponseError(500, error.message);
    }
  }
  
  module.exports = {
    getByUser,
    getById,
    getAll,
    create,
    update,
    destroy
  };
  

