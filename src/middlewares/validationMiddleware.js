// middlewares/validationMiddleware.js
const validationMiddleware = (request, reply, done) => {
  const { body } = request;

  // Validação de dados
  if (!body.username || !body.email || !body.password) {
    reply.code(400).send({ error: 'Username, email and password are required fields.' });
    return;
  }

  done();
};

const loginValidation = (request, reply, done) => {
  const { body } = request;

  if (!body.email || !body.password) {
    reply.code(400).send({ error: 'Username, email and password are required fields.' });
    return;
  }

  done();
};


const vacationValidationMiddleware = (request, reply, done) => {
  const { body } = request;

  if (!body.employeeName || !body.startDate || !body.endDate) {
    reply.code(400).send({ error: 'Employee name, start date, and end date are required fields.' });
    return;
  }

  done();
};




export { validationMiddleware };
export { vacationValidationMiddleware };
export { loginValidation}
