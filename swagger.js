import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Define Swagger options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book API',
      version: '1.0.0',
      description: 'A simple Express API for managing books',
      contact: {
        name: 'Express Starter',
        url: 'text expreess',
        email: 'meganotclone@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080', // Change this to your API URL
      },
    ],
  },
  apis: ['./routes/bookRoutes.js'], // Path to your API routes
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
