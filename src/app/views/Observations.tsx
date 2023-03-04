import { Flex, Text } from "@chakra-ui/react";
import { TabsBody } from "../components/Global/TabsBody";
import { ObservationsHeading } from "../features/Observations/ObservationsHeading";
import { ObservationsTableHeader } from "../features/Observations/ObservationsTableHeader";
import { ObservationsTableItem } from "../features/Observations/ObservationsTableItem";

export function ObservationsView() {
	return (
		<TabsBody>
			<ObservationsHeading />

			<ObservationsTableHeader />

			<ObservationsTableItem />
			<ObservationsTableItem />
			<ObservationsTableItem />
		</TabsBody>
	);
}
