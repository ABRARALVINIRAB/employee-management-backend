// import express, { NextFunction, Request, Response, application } from 'express';
// import cors from 'cors';
// require('dotenv').config();


// import { IProperty } from './app/modules/properties/properties.interface';
// import { Property } from './app/modules/properties/properties.model';
// import { createProperty } from './app/modules/properties/properties.controller';
// export const app = express()
// //cors use
// app: application.use(cors());
// //json data rcv parse
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }))
// import propertyRoutes from './app/modules/properties/properties.route'
// import usersroutes from './app/modules/users/users.routes'


// app.use('/api/v1/property', propertyRoutes)
// app.use('/api/v1/users', usersroutes);

import express from 'express';
import cors from 'cors';
require('dotenv').config();

// Import other necessary modules and routes
import { IProperty } from './app/modules/properties/properties.interface';
import { Property } from './app/modules/properties/properties.model';
import { createProperty } from './app/modules/properties/properties.controller';

// Create an instance of Express
export const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend's actual origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable credentials if needed
  optionsSuccessStatus: 204, // Some browsers expect a 204 response to preflight requests
};

// Use CORS middleware with the provided options
app.use(cors(corsOptions));

// Parse JSON data and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import your route handlers
import propertyRoutes from './app/modules/properties/properties.route';
import usersRoutes from './app/modules/users/users.routes';

// Define your routes
app.use('/api/v1/property', propertyRoutes);
app.use('/api/v1/users', usersRoutes);

// Your other code (middleware, error handling, etc.) goes here

// Export the Express app
export default app;
