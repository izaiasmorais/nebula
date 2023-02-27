import { create } from "zustand";

interface ModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useInvoicesModal = create<ModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set(() => ({ isOpen: true })),
	onClose: () => set(() => ({ isOpen: false })),
}));
