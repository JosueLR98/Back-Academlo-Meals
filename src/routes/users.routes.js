const usersController = require('../controllers/users.controller');

// middlewares
const validationsMiddleware = require('../middlewares/validations.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const usersMiddleware = require('../middlewares/users.middleware');

const { Router } = require('express');
const router = Router();

router.post(
  '/signup',
  validationsMiddleware.createUserValidation,
  usersController.signup
);

router.post(
  '/login',
  validationsMiddleware.loginUserValidation,
  usersController.login
);

router.use(authMiddleware.protect);

router.get(
  '/orders',
  usersMiddleware.validSessionUser,
  usersController.findOrdersByUser
);

router.get(
  '/orders/:id',
  usersMiddleware.validSessionUser,
  usersController.findOneOrderById
);

router.use('/:id', usersMiddleware.validUser);

// TODO: hace falta proteger patch y delete para que solo pueda hacerlo el usuario dueño de la cuenta.

router
  .route('/:id')
  .patch(validationsMiddleware.updateUserValidation, usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
