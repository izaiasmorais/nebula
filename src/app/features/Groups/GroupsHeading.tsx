import { useState } from "react";
import { useGroupsModal } from "../../../store/Groups/useGroupsModal";
import { Heading } from "../../components/Global/Heading";

export function GroupsHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useGroupsModal();

	return (
		<Heading
			buttonName="Adicionar grupo"
			searchPlaceholder="Buscar por grupo"
			showAll={showAll}
			setShowAll={setShowAll}
			onClickButton={onOpen}
		/>
	);
}
