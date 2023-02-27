import { useState } from "react";
import { useInvoicesModal } from "../../../store/Invoices/useInvoicesModal";
import { Heading } from "../../components/Global/Heading";

export function InvoicesHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useInvoicesModal();

	return (
		<Heading
			buttonName="Adicionar conta"
			searchPlaceholder="Buscar por conta"
			showAll={showAll}
			setShowAll={setShowAll}
			onClickButton={onOpen}
		/>
	);
}
