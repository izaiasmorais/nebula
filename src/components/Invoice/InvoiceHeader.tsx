import { Flex, Input, Text, Checkbox, Button } from "@chakra-ui/react";
import { Plus } from "phosphor-react";
import { useState } from "react";
import { useInvoiceModal } from "../../store/useInvoiceModal";

export function InvoiceHeader() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useInvoiceModal();

	return (
		<Flex mt="2rem" w="full" justifyContent="space-between">
			<Flex gap="1rem">
				<Input
					placeholder="Buscar por conta"
					maxW="300px"
					borderRadius="50px"
					focusBorderColor="purple.400"
				/>
				<Flex
					alignItems="center"
					gap=".3rem"
					cursor="pointer"
					onClick={() => setShowAll(!showAll)}
				>
					<Checkbox
						rounded="md"
						colorScheme="purple"
						size="lg"
						isChecked={showAll}
					/>
					<Text w="max-content" display="block">
						Mostrar todos
					</Text>
				</Flex>
			</Flex>

			<Button
				colorScheme="purple"
				borderRadius="50px"
				leftIcon={<Plus size={20} />}
				onClick={onOpen}
				data-testid="add-invoice-button"
			>
				Adicionar conta
			</Button>
		</Flex>
	);
}
