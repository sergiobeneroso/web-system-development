import express from 'express';
import bookRouter from './routes/bookRoutes.js';
import { unknownEndpoint } from './middlewares/unknownEndpointMiddleware.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/books', bookRouter);

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
