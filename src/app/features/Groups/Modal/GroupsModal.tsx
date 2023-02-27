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
import { useGroupsModal } from "../../../../store/Groups/useGroupsModal";
import { ModalField } from "../../../components/Global/ModalField";

export function GroupsModal() {
	const { isOpen, onClose } = useGroupsModal();

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			data-testid="add-invoice-modal"
			size="xl"
		>
			<ModalOverlay />
			<ModalContent mt="10rem">
				<ModalHeader>Adicionar Grupo</ModalHeader>

				<ModalCloseButton />

				<ModalBody px="1.5rem">
					<Flex as="form" direction="column" gap="1rem">
						<ModalField name="Título" placeholder="Fatura da TV" />
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
