import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useInvoicesModal } from "../../../store/Invoices/useInvoicesModal";
import { Center } from "../../components/Global/Center";
import { Heading } from "../../components/Global/Heading";

export function ProductsHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useInvoicesModal();

	return (
		<Flex direction="column" gap="2rem">
			<Center
				description={
					<p>
						Cadastre os produtos que irão fazer parte do PDV e da sua loja
						online.
						<br /> Exemplo: Coca-Cola, Mate Couro, Açaí, Marmitex, etc.
					</p>
				}
				buttonName="Adicionar produto"
				onClickButton={onOpen}
			/>

			<Heading
				searchPlaceholder="Buscar por produto"
				showAll={showAll}
				setShowAll={setShowAll}
				filter={true}
				options={["Bebidas", "Comida"]}
				inputs={true}
				showInputs={false}
			/>
		</Flex>
	);
}
