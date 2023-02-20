export interface InvoiceType {
	id: string;
	title: string;
	createAt: Date;
	dueDate: Date;
	value: number;
	installments: number;
	status: string;
}
