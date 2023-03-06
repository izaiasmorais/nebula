import { Box } from "@chakra-ui/react";
import { TabsBody } from "../components/Global/TabsBody";
import { ProductsHeading } from "../features/Products/ProductsHeading";
import { ProductsTableHeader } from "../features/Products/ProductsTableHeader";

export function ProductsView() {
	return (
		<TabsBody>
			<Box>
				<ProductsHeading />
				<ProductsTableHeader />
			</Box>
		</TabsBody>
	);
}
