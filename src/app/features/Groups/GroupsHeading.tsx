import { useState } from "react";
import { useInvoiceModal } from "../../../store/Invoices/useInvoiceModal";
import { Heading } from "../../components/Global/Heading";

export function GroupsHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useInvoiceModal();

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
