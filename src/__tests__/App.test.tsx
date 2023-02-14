import { render, cleanup } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "../App";

const mockQueryClient = new QueryClient();

describe("App", () => {
	afterEach(cleanup);

	it("should be able to display SUMMER10 in the screen", async () => {
		const { findByText } = render(
			<QueryClientProvider client={mockQueryClient}>
				<App />
			</QueryClientProvider>
		);
		const summerText = await findByText("SUMMER10");

		expect(summerText).toBeTruthy();
	});
});
