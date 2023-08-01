import express, { NextFunction, Request, Response, application } from 'express';
import cors from 'cors';
require('dotenv').config();


import { IProperty } from './app/modules/properties/properties.interface';
import { Property } from './app/modules/properties/properties.model';
import { createProperty } from './app/modules/properties/properties.controller';
export const app = express()
//cors use
app: application.use(cors());
//json data rcv parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
import propertyRoutes from './app/modules/properties/properties.route'



app.use('/api/v1/property', propertyRoutes)










