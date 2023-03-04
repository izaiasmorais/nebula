export interface InvoiceType {
	id: string;
	title: string;
	createAt: Date;
	dueDate: Date;
	value: number;
	installments: number;
	status: string;
}

export interface GroupType {
	id: string;
	name: string;
	printingLocation: string;
	status: boolean;
}
