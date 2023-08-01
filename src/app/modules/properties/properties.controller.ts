import { NextFunction, Request, Response } from "express";
import { addPropertyToDb, getPropertiesFromDb } from "./properties.service";

export const createProperty=async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const properties = await addPropertyToDb(data);
    res.status(200).json({
        status:'success',
        data:properties,
    })
}

export const getProperties=async (req: Request, res: Response, next: NextFunction) => {
    const properties = await getPropertiesFromDb();
    res.status(200).json({
        status:'success',
        data:properties,
    })
}