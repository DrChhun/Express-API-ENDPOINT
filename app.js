import express from 'express';
import dotenv from "dotenv"
import bookRoutes from './routes/bookRoutes.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import { swaggerSpec, swaggerUi } from './swagger.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//first endpoint
app.use('/api/books', bookRoutes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
