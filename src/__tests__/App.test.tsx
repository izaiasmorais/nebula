import { render } from "@testing-library/react";
import App from "../App";

test("App", () => {
	const { findByText } = render(<App />);

	expect(findByText("Hello world")).toBeTruthy();
});
