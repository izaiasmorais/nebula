import { Flex, Input, Text, Checkbox, Button } from "@chakra-ui/react";
import { Plus } from "phosphor-react";
import { useState } from "react";
import { useCouponModal } from "../../store/useCouponModal";

export function CouponHeader() {
	const [showAll, setShowAll] = useState(false);
	const { onOpen } = useCouponModal();

	return (
		<Flex mt="2rem" w="full" justifyContent="space-between">
			<Flex gap="1rem">
				<Input
					placeholder="Buscar por cupom"
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
			>
				Criar cupom
			</Button>
		</Flex>
	);
}
