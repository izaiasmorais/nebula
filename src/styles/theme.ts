import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	fonts: {
		heading: "Inter, sans-serif",
		body: "Inter, sans-serif",
	},
	styles: {
		global: {
			".container": {
				"&::-webkit-scrollbar": {
					width: "3px",
				},
				"&::-webkit-scrollbar-track": {
					background: "#F1F5F9",
				},
				"&::-webkit-scrollbar-thumb": {
					background: "#A2A6AB",
				},
			},
		},
	},
});
