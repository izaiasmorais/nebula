import { useState } from "react";
import { useInvoicesModal } from "../../../store/Invoices/useInvoicesModal";
import { Heading } from "../../components/Global/Heading";

export function ObservationsHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useInvoicesModal();

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
