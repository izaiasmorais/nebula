import { create } from "zustand";
import { InvoiceType } from "../@types/types";

interface InvoiceTypeStore {
	invoices: InvoiceType[];
	setInvoices: (invoices: InvoiceType[]) => void;
	addInvoice: (invoice: InvoiceType) => void;
	deleteInvoice: (id: string) => void;
}

export const useInvoice = create<InvoiceTypeStore>((set) => ({
	invoices: [],
	setInvoices(invoices: InvoiceType[]) {
		set(() => ({ invoices }));
	},
	addInvoice(invoice: InvoiceType) {
		set((state) => ({ invoices: [...state.invoices, invoice] }));
	},
	deleteInvoice(id: string) {
		set((state) => ({
			invoices: state.invoices.filter((invoice) => invoice.id !== id),
		}));
	},
}));
