import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Flex,
} from "@chakra-ui/react";
import { useInvoiceModal } from "../../store/useInvoiceModal";
import { InvoiceModalField } from "./InvoiceModalField";

export function InvoiceModal() {
	const { isOpen, onClose } = useInvoiceModal();

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			data-testid="add-invoice-modal"
			size="xl"
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Adicionar Conta</ModalHeader>

				<ModalCloseButton />

				<ModalBody padding="1.5rem">
					<Flex as="form" direction="column" gap="1rem">
						<InvoiceModalField name="Título" placeholder="Fatura da TV" />
						<InvoiceModalField name="Vencimento" type="date" />
						<InvoiceModalField name="Valor" placeholder="R$ 0,00" />
						<InvoiceModalField name="Parcelas" placeholder="0" />
					</Flex>
				</ModalBody>

				<ModalFooter display="flex" gap=".5rem">
					<Button colorScheme="red" onClick={onClose}>
						Cancelar
					</Button>

					<Button colorScheme="purple" mr={3}>
						Avançar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
