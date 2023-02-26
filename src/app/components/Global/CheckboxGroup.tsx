import { Flex, Checkbox, Text } from "@chakra-ui/react";

interface CheckboxGroupProps {
	name: string;
	checked: boolean;
	setChecked: (checked: boolean) => void;
}

export function CheckboxGroup({
	name,
	checked,
	setChecked,
}: CheckboxGroupProps) {
	return (
		<Flex gap=".5rem">
			<Checkbox
				rounded="md"
				colorScheme="purple"
				size="lg"
				isChecked={checked}
				onChange={() => setChecked(!checked)}
			/>

			<Flex
				alignItems="center"
				gap=".3rem"
				cursor="pointer"
				onClick={() => setChecked(!checked)}
			>
				<Text w="max-content" display="block">
					{name}
				</Text>
			</Flex>
		</Flex>
	);
}
