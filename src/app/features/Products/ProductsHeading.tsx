import { useState } from "react";
import { useInvoiceModal } from "../../../store/Invoices/useInvoiceModal";
import { Heading } from "../../components/Global/Heading";

export function ProductsHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useInvoiceModal();

	return (
		<Heading
			buttonName="Adicionar produto"
			searchPlaceholder="Buscar por produto"
			showAll={showAll}
			setShowAll={setShowAll}
			onClickButton={onOpen}
		/>
	);
}
