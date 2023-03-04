import { Flex } from "@chakra-ui/react";
import { TabsBody } from "../components/Global/TabsBody";
import { PritingLocationTableHeader } from "../features/PritingLocation/PritingLocationTableHeader";
import { PritingLocationTableItem } from "../features/PritingLocation/PritingLocationTableItem";

export function PrintingLocationView() {
	return (
		<TabsBody>
			<Flex direction="column" gap=".5rem">
				<PritingLocationTableHeader />

				<PritingLocationTableItem
					name="Bar"
					faber="Bematech"
					model="MP-4200-TH"
					comunication="Rede"
					active={true}
				/>

				<PritingLocationTableItem
					name="Bar"
					faber="Bematech"
					model="MP-4200-TH"
					comunication="Rede"
					active={true}
				/>

				<PritingLocationTableItem
					name="Bar"
					faber="Bematech"
					model="MP-4200-TH"
					comunication="Rede"
					active={true}
				/>
			</Flex>
		</TabsBody>
	);
}
