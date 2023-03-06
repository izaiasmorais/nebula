import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useGroupsModal } from "../../../store/Groups/useGroupsModal";
import { Center } from "../../components/Global/Center";
import { Heading } from "../../components/Global/Heading";

export function GroupsHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useGroupsModal();

	return (
		<Flex direction="column" gap="2rem">
			<Center
				description={
					<p>
						Cadastre os grupos dos quais os seus produtos irão fazer parte.
						<br /> Exemplo: Bebidas, Cerveja, Porção, Pizza, Promoção, etc.
					</p>
				}
				buttonName="Adicionar grupo"
				onClickButton={onOpen}
			/>

			<Heading
				searchPlaceholder="Buscar por grupo"
				showAll={showAll}
				setShowAll={setShowAll}
			/>
		</Flex>
	);
}
