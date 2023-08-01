import { Schema, model } from 'mongoose';
import { IProperty } from './properties.interface';
//using schema

export const propertySchema = new Schema<IProperty>({
    img: { type: String, required: true }, // Image link, required field
    isSold: { type: Boolean, default: false }, // Default to false
    admin: { type: Boolean, default: false }, // Default to false
    price: { type: Number, required: true },
    details: { type: String, required: true },
    category: { type: String, enum: ['sell', 'rent'], required: true }, // Use enum to restrict the allowed values
    propertyDetails: {
        category: {
            type: String,
            enum: ['building', 'house', 'apartment', 'condominium'],
            required: true,
        },
        totalRooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        bedrooms: { type: Number, required: true },
    },
    location: { type: String, required: true },
    propertySize: { type: Number, required: true },
});

//model
export const Property = model<IProperty>('Property', propertySchema);