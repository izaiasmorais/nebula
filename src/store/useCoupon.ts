import { create } from "zustand";
import { ICoupon } from "../@types/types";

interface ICouponStore {
	couponList: ICoupon[];
	setCouponList: (couponList: ICoupon[]) => void;
	addCoupon: (coupon: ICoupon) => void;
	removeCoupon: (id: string) => void;
	toggleActiveCoupon: (id: string) => void;
}

export const useCoupon = create<ICouponStore>((set) => ({
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
	toggleActiveCoupon(id: string) {
		set((state) => ({
			couponList: state.couponList.map((coupon) => {
				if (coupon.id === id) {
					return { ...coupon, isActive: !coupon.isActive };
				}

				return coupon;
			}),
		}));
	},
}));
