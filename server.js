// server.js
import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { startRoute } from './src/routes/startRoute.js';
import { userRoutes } from './src/routes/userRoutes.js';
import { vacationRoutes } from './src/routes/vacationRoutes.js';

const app = fastify();

app.register(fastifyCors, {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});

app.register(startRoute);
app.register(userRoutes, { prefix: '/api' });
app.register(vacationRoutes, { prefix: '/api' });


const PORT = process.env.PORT || 3333;

app.listen({port:PORT}, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on port ${PORT}`);
});
