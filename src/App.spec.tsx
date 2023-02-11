import { render } from "@testing-library/react";
import App from "./App";

describe("General", () => {
	it("should be able to render SUMMER50", () => {
		const { getByText } = render(<App />);

		expect(getByText("SUMMER50")).toBeTruthy();
	});
});
