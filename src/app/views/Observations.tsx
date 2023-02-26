import { Flex, Text } from "@chakra-ui/react";
import { ObservationsHeading } from "../features/Observations/ObservationsHeading";
import { ObservationsTableHeader } from "../features/Observations/ObservationsTableHeader";

export function ObservationsView() {
	return (
		<Flex
			bg="white"
			h="720px"
			w="1268px"
			direction="column"
			borderRadius="0 0 1rem 1rem"
			p={["1.5rem", "2rem", "2.5rem"]}
		>
			<ObservationsHeading />

			<ObservationsTableHeader />
		</Flex>
	);
}
