import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	fonts: {
		heading: "Inter, sans-serif",
		body: "Inter, sans-serif",
	},
	styles: {
		global: {
			html: {
				"&::-webkit-scrollbar": {
					width: "5px",
				},
				"&::-webkit-scrollbar-track": {
					background: "#000000",
				},
				"&::-webkit-scrollbar-thumb": {
					background: "#293033",
					borderRadius: "5px",
				},
			},
		},
	},
});
