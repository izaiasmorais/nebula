import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
	it("should be able to render a 'Hello world' text", () => {
		const { findByText } = render(<App />);

		expect(findByText("Hello world")).toBeTruthy();
	});
});
