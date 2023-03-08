import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useInvoicesModal } from "../../../store/Invoices/useInvoicesModal";
import { AddButton } from "../../components/Global/CustomButtons";
import { Heading } from "../../components/Global/Heading";

export function InvoicesHeading() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useInvoicesModal();

	return (
		<Flex gap="2rem" justify="space-between">
			<Flex>
				<Heading
					searchPlaceholder="Buscar por conta"
					showAll={showAll}
					setShowAll={setShowAll}
				/>
			</Flex>
			<AddButton onClick={onOpen}>Adicionar Conta</AddButton>
		</Flex>
	);
}
