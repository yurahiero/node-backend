// models/vacationModel.js
import { v4 as uuidv4 } from 'uuid';

class VacationModel {
  constructor() {
    this.vacations = [];
  }

  async getAllVacations() {
    return this.vacations;
  }

  async getVacationById(id) {
    return this.vacations.find(vacation => vacation.id === id);
  }

  async requestVacation(vacation) {
    const newVacation = { id: uuidv4(), pending: true, ...vacation };
    this.vacations.push(newVacation);
    return newVacation;
  }

  async updateVacation(id, updatedVacation) {
    const index = this.vacations.findIndex(vacation => vacation.id === id);
    if (index !== -1) {
      this.vacations[index] = { ...this.vacations[index], ...updatedVacation };
      return this.vacations[index];
    } else {
      return null;
    }
  }

  async cancelVacation(id) {
    this.vacations = this.vacations.filter(vacation => vacation.id !== id);
  }
}

// Singleton Pattern
const vacationModel = new VacationModel();

export { vacationModel };