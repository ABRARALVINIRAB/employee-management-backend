export interface IProperty {
        img: string;
        isSold: boolean;
        admin: boolean;
        price: number;
        details: string;
        category: 'sell' | 'rent';
        propertyDetails: {
            category: 'building' | 'house' | 'apartment' | 'condominium';
            totalRooms: number;
            bathrooms: number;
            bedrooms: number;
        };
        location: string;
        propertySize: number;
    }