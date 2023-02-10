import { create } from "zustand";

interface Coupon {
	couponCode: string;
	discountType: "percentual" | "fixed";
	discountValue: number;
	totalAmount: number;
	amountAvailable: number;
	amountByClient: number;
	isActive: boolean;
	firstPurchase: boolean;
	availibility: [
		startDay: number,
		endDay: number,
		startDate: Date,
		endDate: Date,
		startHour: number,
		endHour: number
	];
}

interface CouponStore {
	couponCode: string;
	discountType: "percentual" | "fixed";
	discountValue: number;
	totalAmount: number;
	totalAvailable: number;
	isActive: boolean;
}

export const useCoupon = create<CouponStore>((set) => ({
	couponCode: "",
	discountType: "fixed",
	discountValue: 0,
	totalAmount: 0,
	totalAvailable: 0,
	isActive: true,
}));
