import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

class UserModel {
  constructor() {
    this.users = [];
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find(user => user.id === id);
  }

  addUser(user) {
    const newUser = { id: uuidv4(), ...user };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id, updatedUser) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
      return this.users[index];
    } else {
      return null;
    }
  }

  deleteUser(id) {
    this.users = this.users.filter(user => user.id !== id);
  }

  getUserByEmailAndPassword(email, password) {
    return this.users.find(
      (user) => user.email === email && user.password === password
      //(user) => user.email === email && bcrypt.compareSync(password, user.password)

    );
  }


}

// Singleton Pattern
const userModel = new UserModel();

export { userModel };