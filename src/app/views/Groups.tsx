import { Flex } from "@chakra-ui/react";
import { useGroup } from "../../store/Groups/useGroup";
import { usePagination } from "../../store/usePagination";
import { TabsBody } from "../components/Global/TabsBody";
import { Pagination } from "../components/Pagination/Pagination";
import { GroupsHeading } from "../features/Groups/GroupsHeading";
import { GroupsTableHeader } from "../features/Groups/GroupsTableaHeader";
import { GroupsTableItem } from "../features/Groups/GroupsTableItem";
import { GroupsModal } from "../features/Groups/Modal/GroupsModal";

export function GroupsView() {
	const { groups } = useGroup();
	const { page, itemsPerPage, onChangePage } = usePagination();

	const firstIndex = (page - 1) * 7;
	const lastIndex = page * 7;
	const groupsData = groups.slice(firstIndex, lastIndex);

	return (
		<TabsBody>
			<GroupsHeading />

			<GroupsTableHeader />

			{groupsData.map((group) => (
				<GroupsTableItem
					key={group.id}
					name={group.name}
					priting={group.printingLocation}
					status={group.status}
				/>
			))}

			<Flex mt="4rem">
				<Pagination
					currentPage={page}
					itemsPerPage={10}
					onChangePage={onChangePage}
					totalItems={groups.length}
				/>
			</Flex>

			<GroupsModal />
		</TabsBody>
	);
}
