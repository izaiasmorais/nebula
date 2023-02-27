import { useState } from "react";
import { useInvoicesModal } from "../../../store/Invoices/useInvoicesModal";
import { Heading } from "../../components/Global/Heading";

export function ProductsHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useInvoicesModal();

	return (
		<Heading
			buttonName="Adicionar produto"
			searchPlaceholder="Buscar por produto"
			showAll={showAll}
			setShowAll={setShowAll}
			onClickButton={onOpen}
			filter={true}
			options={["Bebidas", "Comida"]}
			inputs={true}
			showInputs={false}
		/>
	);
}
