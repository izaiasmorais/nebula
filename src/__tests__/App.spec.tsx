import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
	afterEach(cleanup);

	it("should be able to render the create coupon button", () => {
		const { getByTestId } = render(<App />);

		getByTestId("add-coupon-button");
	});

	it("should be able to open the create coupon modal", () => {
		const { getByTestId } = render(<App />);

		const createCouponButton = getByTestId("add-coupon-button");
		const createCouponModal = getByTestId("create-coupon-modal");

		fireEvent.click(createCouponButton);

		expect(createCouponModal).toHaveAttribute("isOpen", "true");
	});
});
