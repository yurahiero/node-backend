// controllers/userController.js
import { userModel } from '../models/userModel.js';

const getAllUsers = async (request, reply) => {
  try {
    const users = await userModel.getAllUsers();
    reply.send(users);
  } catch (error) {
    console.error('Error in getAllUsers:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

const getUserById = async (request, reply) => {
  const { id } = request.params;
  try {
    const user = await userModel.getUserById(id);
    if (!user) {
      reply.status(404).send({ error: 'User not found' });
      return;
    }
    reply.send(user);
  } catch (error) {
    console.error('Error in getUserById:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

const addUser = async (request, reply) => {
  const user = request.body;
  try {
    const newUser = await userModel.addUser(user);
    reply.send(newUser);
  } catch (error) {
    console.error('Error in addUser:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

const updateUser = async (request, reply) => {
  const { id } = request.params;
  const updatedUser = request.body;
  try {
    const user = await userModel.updateUser(id, updatedUser);
    if (!id) {
      reply.status(404).send({ error: 'User not found' });
      return;
    }
    reply.send(user);
  } catch (error) {
    console.error('Error in updateUser:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

const deleteUser = async (request, reply) => {
  const { id } = request.params;
  try {
    const user = await userModel.deleteUser(id);
    if (!id) {

      return reply.status(404).send({ error: 'User not found' });
    }
    reply.send({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error('Error in deleteUser:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

const login = async (request, reply) => {
  const { email, password } = request.body;

  const user = userModel.getUserByEmailAndPassword(email, password);

  if (user) {
    //const token = jwt.sign({ userId: user.id }, 'yourSecretKey', { expiresIn: '1h' });
    return reply.send({ success: true });
  } else {
    reply.code(401).send({ success: false, message: 'Invalid credentials' });
  }
}



export const userController = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  login,
};
