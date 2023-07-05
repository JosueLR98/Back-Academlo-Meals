const restaurantsController = require('../controllers/restaurants.controllers');

// middlewares
const restaurantsMiddleware = require('../middlewares/restaurants.middleware');
const validationsMiddleware = require('../middlewares/validations.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const { Router } = require('express');
const router = Router();

router
  .route('/')
  .get(restaurantsController.findRestaurants)
  .post(
    authMiddleware.protect,
    authMiddleware.restrictTo('admin'),
    validationsMiddleware.createRestaurantValidation,
    restaurantsController.createNewRestaurant
  );

router
  .route('/reviews/:restaurantId/:id')
  .patch(
    authMiddleware.protect,
    authMiddleware.protectAccountOwnerByReview,
    validationsMiddleware.reviewValidation,
    restaurantsMiddleware.validReview,
    restaurantsController.updateReview
  )
  .delete(
    authMiddleware.protect,
    authMiddleware.protectAccountOwnerByReview,
    restaurantsMiddleware.validReview,
    restaurantsController.deleteReview
  );

router.post(
  '/reviews/:id',
  authMiddleware.protect,
  validationsMiddleware.reviewValidation,
  restaurantsMiddleware.validRestaurant,
  restaurantsController.createNewReview
);

router.use('/:id', restaurantsMiddleware.validRestaurant);

router
  .route('/:id')
  .get(restaurantsController.findRestaurantById)
  .patch(
    authMiddleware.protect,
    authMiddleware.restrictTo('admin'),
    validationsMiddleware.updateRestaurantValidation,
    restaurantsController.updateRestaurant
  )
  .delete(
    authMiddleware.protect,
    authMiddleware.restrictTo('admin'),
    restaurantsController.deleteRestaurant
  );

module.exports = router;
