export interface Car {
    carId: number;
    brand: string;
    model: string;
    year: number;
    pricePerDay: number;
    isAvailable: boolean;
    dateAdded: string;
    isBooked?: boolean;
    imageUrl:string;
    // isPaid?: boolean;
    // You might want to use a Date type
    // Other properties if needed
  
  }