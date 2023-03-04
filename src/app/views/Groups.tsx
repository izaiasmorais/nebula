import { Box, Flex } from "@chakra-ui/react";
import { useGroup } from "../../store/Groups/useGroup";
import { useGroupsPagination } from "../../store/Groups/useGroupsPagination";
import { TabsBody } from "../components/Global/TabsBody";
import { Pagination } from "../components/Pagination/Pagination";
import { GroupsHeading } from "../features/Groups/GroupsHeading";
import { GroupsTableHeader } from "../features/Groups/GroupsTableaHeader";
import { GroupsTableItem } from "../features/Groups/GroupsTableItem";
import { GroupsModal } from "../features/Groups/Modal/GroupsModal";

export function GroupsView() {
	const { groups } = useGroup();
	const { page, itemsPerPage, onChangePage, onChangeItemsPerPage } = useGroupsPagination();

	const firstIndex = (page - 1) * itemsPerPage;
	const lastIndex = page * itemsPerPage;
	const groupsData = groups.slice(firstIndex, lastIndex);

	return (
		<>
			<TabsBody>
				<Box>
					<GroupsHeading />

					<GroupsTableHeader />

					<Flex
						direction="column"
						overflow="auto"
						overflowY="hidden"
						// maxH="400px"
					>
						{groupsData.map((group) => (
							<GroupsTableItem
								key={group.id}
								name={group.name}
								priting={group.printingLocation}
								status={group.status}
							/>
						))}
					</Flex>
				</Box>

				<Pagination
					currentPage={page}
					itemsPerPage={itemsPerPage}
					onChangePage={onChangePage}
					totalItems={groups.length}
					onChangeItemsPerPage={onChangeItemsPerPage}
				/>
			</TabsBody>

			<GroupsModal />
		</>
	);
}
