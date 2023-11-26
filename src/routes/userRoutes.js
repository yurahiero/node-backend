// routes/userRoutes.js
import { userController } from '../controllers/userController.js';
import { loginValidation, validationMiddleware } from '../middlewares/validationMiddleware.js';



const userRoutes = (fastify, options, done) => {
  fastify.get('/users', userController.getAllUsers);
  fastify.get('/users/:id', userController.getUserById);
  fastify.post('/users', { preHandler: validationMiddleware }, userController.addUser);
  fastify.put('/users/:id', { preHandler: validationMiddleware }, userController.updateUser);
  fastify.delete('/users/:id', userController.deleteUser);
  fastify.post('/login', { preHandler: loginValidation }, userController.login);

  done();
};



export { userRoutes };

