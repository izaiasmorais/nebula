import { create } from "zustand";

interface ICoupon {
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

interface ICouponStore {
	couponList: ICoupon[];
	setCouponList: (couponList: ICoupon[]) => void;
}

export const useCoupon = create<ICouponStore>((set) => ({
	couponList: [],
	setCouponList(couponList: ICoupon[]) {
		set(() => ({ couponList }));
	},
}));
