const Meals = require('../models/meals.model');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('../utils/appError');

exports.findMeals = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.findMealById = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.createNewMeal = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.updateMeal = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.deleteMeal = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});
