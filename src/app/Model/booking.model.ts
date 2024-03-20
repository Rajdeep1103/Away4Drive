export interface Booking {
    id: number;
    car: {
        brand: string;
        model: string
    };
    startDate:string;
    endDate:string;
    totalPrice: number;
}