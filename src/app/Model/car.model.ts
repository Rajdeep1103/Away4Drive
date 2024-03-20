export interface Car {
    price: any;
    carId: number;
    brand: string;
    model: string;
    year: number;
    pricePerDay: number;
    isAvailable: boolean;
    dateAdded: string;
    isBooked?: boolean;
    imageUrl:string[
      
    ];
  }