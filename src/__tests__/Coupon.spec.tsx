import { render, cleanup } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "../App";

const mockQueryClient = new QueryClient();

describe("App", () => {
	afterEach(cleanup);

	// it("should be able to delete a invoice", async () => {});

	// it("should be able to change invoice status", async () => {});

	// it("should be able to open edit modal", async () => {});
});
