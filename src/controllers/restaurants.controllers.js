const Restaurants = require('../models/restaurants.model');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('../utils/appError');

exports.findRestaurants = catchAsync(async (req, res, next) => {
  const restaurants = await Restaurants.findAll({
    where: {
      status: 'active',
    },
    attributes: { exclude: ['createdAt', 'updatedAt', 'status'] },
  });

  res.status(201).json({
    status: 'success',
    results: restaurants.length,
    restaurants,
  });
});

exports.createNewRestaurant = catchAsync(async (req, res, next) => {
  const { name, address, rating } = req.body;

  const restaurantInDb = await Restaurants.findOne({
    where: {
      address: address.toLowerCase(),
    },
  });

  if (restaurantInDb) {
    return next(
      new AppError('There is already a restaurant with this address', 409)
    );
  }

  const restaurant = await Restaurants.create({
    name: name.toLowerCase(),
    address: address.toLowerCase(),
    rating,
  });

  res.status(201).json({
    status: 'success',
    restaurant: {
      id: restaurant.id,
      name: restaurant.name,
      address: restaurant.address,
      rating: restaurant.rating,
    },
  });
});

exports.updateReviewOfRestaurant = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.deleteReviewOfRestaurant = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.createNewReview = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.findRestaurantById = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.updateRestaurant = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.deleteRestaurant = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});
