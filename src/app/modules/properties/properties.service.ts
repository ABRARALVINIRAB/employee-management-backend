import { IProperty } from "./properties.interface";
import { Property } from "./properties.model";

export const addPropertyToDb = async (payload:IProperty):Promise<IProperty> => {
    const property = await new Property(payload)
    // const property =await new Property({
        // img: 'https://unsplash.com/photos/XbwHrt87mQ0',
        // isSold: false,
        // admin: false,
        // price: 100000,
        // details: 'Sundor onek',
        // category: 'rent',
        // propertyDetails: {
        //     category: 'house',
        //     totalRooms: 6,
        //     bathrooms: 3,
        //     bedrooms: 4,
        // },
        // location: '123 Main St, City, State',
        // propertySize: 2000,
    // })
    await property.save();
    console.log(property);
    return property;
}
// addPropertyToDb();

export const getPropertiesFromDb = async () => {
    const properties = await Property.find();
    return properties;
}