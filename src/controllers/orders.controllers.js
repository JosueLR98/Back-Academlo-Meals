const Orders = require('../models/orders.model');
const Meals = require('../models/meals.model');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('../utils/appError');

exports.createNewOrder = catchAsync(async (req, res, next) => {
  // mealId, userId, totalPrice, quantity, status
  const { quantity, mealId } = req.body;
  const { id } = req.sessionUser;

  const meal = await Meals.findOne({
    where: {
      id: mealId,
      status: 'active',
    },
  });

  if (!meal) {
    return next(new AppError('That meal does not exist', 404));
  }

  const totalPrice = meal.price * quantity;

  const order = await Orders.create({
    mealId,
    quantity,
    totalPrice,
    userId: id,
  });

  res.status(201).json({
    status: 'success',
    message: 'TThe order was created successfully',
    order,
    meal,
  });
});

exports.findUserOrders = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.protectAccountOwner = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.updateOrder = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.deleteOrder = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});
