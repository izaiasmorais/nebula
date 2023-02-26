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
import { useInvoiceModal } from "../../../../store/Invoices/useInvoiceModal";
import { InvoiceModalField } from "./InvoiceModalField";
import { InvoiceStatusToggle } from "./InvoiceStatusToggle";

export function InvoiceModal() {
	const { isOpen, onClose } = useInvoiceModal();

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			data-testid="add-invoice-modal"
			size="md"
		>
			<ModalOverlay />
			<ModalContent mt="10rem">
				<ModalHeader>Adicionar Conta</ModalHeader>

				<ModalCloseButton />

				<ModalBody px="1.5rem">
					<Flex as="form" direction="column" gap="1rem">
						<InvoiceModalField name="Título" placeholder="Fatura da TV" />
						<InvoiceModalField name="Vencimento" type="date" />
						<InvoiceModalField
							name="Valor"
							placeholder="R$ 0,00"
							type="number"
						/>
						<InvoiceModalField name="Parcelas" placeholder="0" type="number" />
						<InvoiceStatusToggle />
					</Flex>
				</ModalBody>

				<ModalFooter display="flex" gap="1rem">
					<Button colorScheme="red" onClick={onClose}>
						Cancelar
					</Button>

					<Button colorScheme="purple" mr={3}>
						Confirmar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
