import { create } from "zustand";

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
