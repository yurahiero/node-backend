// routes/index.js
const startRoute = (fastify, options, done) => {
    fastify.get('/', (request, reply) => {
      reply.send({ message: 'API is accessible. Welcome to the USER CRUD API.' });
    });
  
    done();
  };
  
  export { startRoute };
  