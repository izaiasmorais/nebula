import { useState } from "react";
import { useInvoiceModal } from "../../../store/Invoices/useInvoiceModal";
import { Heading } from "../../components/Global/Heading";

export function ObservationsHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useInvoiceModal();

	return (
		<Heading
			buttonName="Adicionar observação"
			searchPlaceholder="Buscar por observação"
			showAll={showAll}
			setShowAll={setShowAll}
			onClickButton={onOpen}
			filter={true}
			options={["Bebidas", "Comida"]}
		/>
	);
}
