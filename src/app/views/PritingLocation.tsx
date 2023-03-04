import {Text } from "@chakra-ui/react";
import { TabsBody } from "../components/Global/TabsBody";

export function PrintingLocationView() {
	return (
		<TabsBody>
			<Text fontSize="2xl" fontWeight={500}>
				Local de Impressão
			</Text>
		</TabsBody>
	);
}
