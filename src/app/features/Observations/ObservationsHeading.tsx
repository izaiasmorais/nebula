import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useInvoicesModal } from "../../../store/Invoices/useInvoicesModal";
import { Center } from "../../components/Global/Center";
import { Heading } from "../../components/Global/Heading";

export function ObservationsHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useInvoicesModal();

	return (
		<Flex direction="column" gap="2rem">
			<Center
				description={
					<p>
						Cadastre as observações que o seu pedido poderá ter.
						<br /> Exemplo: Sem cebola, Gelo e Limão, Trazer Talher, Sem talher.
					</p>
				}
				buttonName="Adicionar observação"
				onClickButton={onOpen}
			/>

			<Heading
				searchPlaceholder="Buscar por observação"
				showAll={showAll}
				setShowAll={setShowAll}
				filter={true}
				options={["Bebidas", "Comida"]}
			/>
		</Flex>
	);
}
