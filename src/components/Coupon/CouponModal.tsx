import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Input,
	Flex,
	Text,
} from "@chakra-ui/react";
import { useCouponModal } from "../../store/useCouponModal";
import { CouponModalField } from "./CouponModalField";

export function CouponModal() {
	const { isOpen, onClose } = useCouponModal();

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Criar Cupom</ModalHeader>

				<ModalCloseButton />

				<ModalBody padding="1.5rem">
					<Flex as="form" direction="column">
						<CouponModalField
							name="Nome do cupom"
							placeholder="SEGUNDOU100OFF"
						/>
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
