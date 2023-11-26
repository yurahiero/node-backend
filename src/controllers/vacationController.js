// controllers/vacationController.js
import { vacationModel } from '../models/vacationModel.js';

const getAllVacations = async (request, reply) => {
  try {
    const vacations = await vacationModel.getAllVacations();
    reply.send(vacations);
  } catch (error) {
    console.error('Error in getAllVacations:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

const getVacationById = async (request, reply) => {
  const { id } = request.params;
  try {
    const vacation = await vacationModel.getVacationById(id);
    if (!vacation) {
      reply.status(404).send({ error: 'Vacation not found' });
      return;
    }
    reply.send(vacation);
  } catch (error) {
    console.error('Error in getVacationById:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

const requestVacation = async (request, reply) => {
  const vacation = request.body;
  try {
    const newVacation = await vacationModel.requestVacation(vacation);
    reply.send(newVacation);
  } catch (error) {
    console.error('Error in requestVacation:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

const updateVacation = async (request, reply) => {
  const { id } = request.params;
  const updatedVacation = request.body;
  try {
    const vacation = await vacationModel.updateVacation(id, updatedVacation);
    if (!vacation) {
      reply.status(404).send({ error: 'Vacation not found' });
      return;
    }
    reply.send(vacation);
  } catch (error) {
    console.error('Error in updateVacation:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

const cancelVacation = async (request, reply) => {
  const { id } = request.params;
  try {
    const vacation = await vacationModel.cancelVacation(id);
    if (!id) {
      reply.status(404).send({ error: 'Vacation not found' });
      return;
    }
    reply.send({ message: 'Vacation canceled successfully.' });
  } catch (error) {
    console.error('Error in cancelVacation:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

export const vacationController = {
  getAllVacations,
  getVacationById,
  requestVacation,
  updateVacation,
  cancelVacation,
};