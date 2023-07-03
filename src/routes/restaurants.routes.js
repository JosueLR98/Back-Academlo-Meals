const restaurantsController = require('../controllers/restaurants.controllers');

// middlewares
const validationsMiddleware = require('../middlewares/validations.middleware');
const autMiddleware = require('../middlewares/auth.middleware');

const { Router } = require('express');
const router = Router();

router
  .route('/')
  .get(restaurantsController.findRestaurants)
  .post(
    autMiddleware.protect,
    validationsMiddleware.createRestaurantValidation,
    restaurantsController.createNewRestaurant
  );

router
  .route('/reviews/:restaurantId/:id')
  .patch(autMiddleware.protect, restaurantsController.updateReviewOfRestaurant)
  .delete(
    autMiddleware.protect,
    restaurantsController.deleteReviewOfRestaurant
  );

router.post(
  '/reviews/:id',
  autMiddleware.protect,
  restaurantsController.createNewReview
);

router
  .route('/:id')
  .get(restaurantsController.findRestaurantById)
  .patch(autMiddleware.protect, restaurantsController.updateRestaurant)
  .delete(autMiddleware.protect, restaurantsController.deleteRestaurant);

module.exports = router;
