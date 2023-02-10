import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from "@chakra-ui/react";
import { useCouponModal } from "../../store/useCouponModal";

export function CouponModal() {
	const { isOpen, onClose } = useCouponModal();

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Criar Cupom</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum
					voluptatibus voluptate explicabo delectus, velit alias aspernatur
					soluta? Fuga cupiditate unde, commodi pariatur odit eligendi harum
					rerum repudiandae est labore?
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
