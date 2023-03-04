import { Box, Flex, Text } from "@chakra-ui/react";
import { useObservationsPagination } from "../../store/Observations/useObservationsPagination";
import { TabsBody } from "../components/Global/TabsBody";
import { Pagination } from "../components/Pagination/Pagination";
import { ObservationsHeading } from "../features/Observations/ObservationsHeading";
import { ObservationsTableHeader } from "../features/Observations/ObservationsTableHeader";
import { ObservationsTableItem } from "../features/Observations/ObservationsTableItem";

export function ObservationsView() {
	// const { groups } = useGroup();
	const { page, itemsPerPage, onChangePage, onChangeItemsPerPage } =
		useObservationsPagination();

	const firstIndex = (page - 1) * itemsPerPage;
	const lastIndex = page * itemsPerPage;
	// const groupsData = groups.slice(firstIndex, lastIndex);

	return (
		<TabsBody>
			<Box>
				<ObservationsHeading />

				<ObservationsTableHeader />

				<ObservationsTableItem />
				<ObservationsTableItem />
				<ObservationsTableItem />
			</Box>

			<Pagination
				currentPage={page}
				itemsPerPage={itemsPerPage}
				onChangePage={onChangePage}
				totalItems={500}
				onChangeItemsPerPage={onChangeItemsPerPage}
			/>
		</TabsBody>
	);
}
