import { create } from "zustand";

interface PaginationStore {
	page: number;
	itemsPerPage: number;
	onChangePage: (page: number) => void;
	onChangeItemsPerPage: (page: number) => void;
}

export const useInvoicesPagination = create<PaginationStore>((set) => ({
	page: 1,
	itemsPerPage: 5,
	onChangePage(page: number) {
		set(() => ({ page }));
	},
	onChangeItemsPerPage(itemsPerPage: number) {
		set(() => ({ itemsPerPage }));
	},
}));
