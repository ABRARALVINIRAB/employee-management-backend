import express from "express";
import { createProperty, getProperties } from "./properties.controller";
const router =express.Router();


router.get('/',getProperties)
router.post('/create-property',createProperty);

export default router