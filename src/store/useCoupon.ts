import { create } from "zustand";
import { ICoupon } from "../components/@types/types";

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