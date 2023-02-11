export interface ICoupon {
	id: string;
	couponCode: string;
	discountType: "percentual" | "fixed";
	discountValue: number;
	totalAmount: number;
	amountAvailable: number;
	amountByClient: number;
	isActive: boolean;
	firstPurchase: boolean;
}

// availibility: [
// 	startDay: number,
// 	endDay: number,
// 	startDate: Date,
// 	endDate: Date,
// 	startHour: number,
// 	endHour: number
// ];
