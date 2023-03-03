import { faker } from "@faker-js/faker";
import { InvoiceType } from "../@types/types";

const generateInvoice = (): InvoiceType => ({
	id: faker.datatype.uuid(),
	title: faker.finance.accountName(),
	createAt: faker.date.past(),
	dueDate: faker.date.future(),
	value: parseFloat(faker.finance.amount(100, 10000, 2)),
	installments: faker.datatype.number({ min: 1, max: 12 }),
	status: faker.helpers.arrayElement([
		"paid",
		"unpaid",
		"postponed",
		"overdue",
	]),
});

const generateInvoices = (count: number): InvoiceType[] => {
	const invoices: InvoiceType[] = [];

	for (let i = 0; i < count; i++) {
		invoices.push(generateInvoice());
	}

	return invoices;
};

export const invoices: InvoiceType[] = generateInvoices(500);
