// routes/vacationRoutes.js
import { vacationController } from '../controllers/vacationController.js';
import { vacationValidationMiddleware } from '../middlewares/validationMiddleware.js';

const vacationRoutes = (fastify, options, done) => {
  fastify.get('/vacations', vacationController.getAllVacations);
  fastify.get('/vacations/:id', vacationController.getVacationById);
  fastify.post('/vacations', { preHandler: vacationValidationMiddleware }, vacationController.requestVacation);
  fastify.put('/vacations/:id', { preHandler: vacationValidationMiddleware }, vacationController.updateVacation);
  fastify.delete('/vacations/:id', vacationController.cancelVacation);

  done();
};

export { vacationRoutes };