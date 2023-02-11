import { create } from "zustand";
import { ICoupon } from "../@types/types";

interface ICouponStore {
	couponList: ICoupon[];
	setCouponList: (couponList: ICoupon[]) => void;
	addCoupon: (coupon: ICoupon) => void;
	removeCoupon: (id: string) => void;
	getCouponById: (id: string) => void;
}

export const useCoupon = create<ICouponStore>((set, get) => ({
	couponList: [],
	setCouponList(couponList: ICoupon[]) {
		set(() => ({ couponList }));
	},
	addCoupon(coupon: ICoupon) {
		set((state) => ({ couponList: [...state.couponList, coupon] }));
	},
	removeCoupon(id: string) {
		set((state) => ({
			couponList: state.couponList.filter((coupon) => coupon.id !== id),
		}));
	},
	getCouponById(id: string) {
		const couponList = get().couponList;

		const couponIndex = couponList.findIndex((coupon) => coupon.id === id);

		if (couponIndex >= 0) {
			console.log(couponList[couponIndex]);
		}
	},
}));
