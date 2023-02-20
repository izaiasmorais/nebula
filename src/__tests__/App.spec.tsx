import { render, cleanup, fireEvent } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/react-query";
import App from "../App";

describe("App", () => {
	afterEach(cleanup);

	it("should be able to render the add coupon modal when add coupon button is clicked", () => {
		const { getByTestId, getByText } = render(
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		);

		const addCouponButton = getByTestId("add-coupon-button");

		fireEvent.click(addCouponButton);

		const addCouponModal = getByText("Nome do cupom");

		expect(addCouponModal).toBeTruthy();
	});
});
