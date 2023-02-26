import { useState } from "react";
import { useInvoiceModal } from "../../../store/Invoices/useInvoiceModal";
import { Heading } from "../../components/Global/Heading";

export function InvoicesHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useInvoiceModal();

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
