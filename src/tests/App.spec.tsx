import { render, screen } from "@testing-library/react";

it("renders the SUMMER50 text on the screen", () => {
	render(<div>SUMMER50</div>);

	const text = screen.getByText(/SUMMER50/i);

	expect(text).toBeTruthy();
});
