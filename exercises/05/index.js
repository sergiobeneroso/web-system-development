import express from 'express';
import bookRouter from './routes/bookRoutes.js';
import { unknownEndpoint } from './middlewares/unknownEndpointMiddleware.js';

const app = express();

// Middlewares
app.use(express.json()); // convierte el body JSON de la petición en request.body
app.use(express.static('public')); // sirve public/index.html en "/"

// Routes
app.use('/books', bookRouter);

// Error handling: si ninguna ruta anterior respondió, la URL no existe
app.use(unknownEndpoint);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
