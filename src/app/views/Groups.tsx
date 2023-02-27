import { Flex } from "@chakra-ui/react";
import { GroupsHeading } from "../features/Groups/GroupsHeading";
import { GroupsTableHeader } from "../features/Groups/GroupsTableaHeader";
import { GroupsModal } from "../features/Groups/Modal/GroupsModal";

export function GroupsView() {
	return (
		<Flex
			bg="white"
			h="720px"
			w="1268px"
			direction="column"
			borderRadius="0 0 1rem 1rem"
			p={["1.5rem", "2rem", "2.5rem"]}
		>
			<GroupsHeading />
			<GroupsTableHeader />
			<GroupsModal />
		</Flex>
	);
}
