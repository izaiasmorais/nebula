import { render, cleanup, fireEvent } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/react-query";
import App from "../App";

describe("App", () => {
	afterEach(cleanup);

	it("should be able to render the add invoice modal when add invoice button is clicked", () => {
		const { getByTestId, getByText } = render(
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		);

		const addInvoiceButton = getByTestId("add-invoice-button");

		fireEvent.click(addInvoiceButton);

		const addInvoiceModal = getByText("Nome do conta");

		expect(addInvoiceModal).toBeTruthy();
	});
});
