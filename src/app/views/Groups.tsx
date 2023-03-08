import { Box, Flex } from "@chakra-ui/react";
import { useGroup } from "../../store/Groups/useGroup";
import { useGroupsPagination } from "../../store/Groups/useGroupsPagination";
import { ItemsList } from "../components/Global/List";
import { Pagination } from "../components/Global/Pagination";
import { TabsBody } from "../components/Global/TabsBody";
import { GroupsHeading } from "../features/Groups/GroupsHeading";
import { GroupsTableHeader } from "../features/Groups/GroupsTableaHeader";
import { GroupsTableItem } from "../features/Groups/GroupsTableItem";
import { GroupsModal } from "../features/Groups/Modal/GroupsModal";

export function GroupsView() {
	const { groups } = useGroup();
	const { page, itemsPerPage, onChangePage, onChangeItemsPerPage } =
		useGroupsPagination();

	const firstIndex = (page - 1) * itemsPerPage;
	const lastIndex = page * itemsPerPage;
	const groupsData = groups.slice(firstIndex, lastIndex);

	return (
		<>
			<TabsBody>
				<Box>
					<GroupsHeading />

					<GroupsTableHeader />

					<ItemsList>
						{groupsData.map((group) => (
							<GroupsTableItem
								key={group.id}
								name={group.name}
								priting={group.printingLocation}
								status={group.status}
							/>
						))}
					</ItemsList>
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
