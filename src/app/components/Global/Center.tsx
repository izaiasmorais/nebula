import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AddButton, TutorialButton } from "./CustomButtons";

interface CenterProps {
	buttonName: string;
	description: ReactNode;
	onClickButton: () => void;
}

export function Center({
	description,
	buttonName,
	onClickButton,
}: CenterProps) {
	return (
		<Flex justifyContent="space-between">
			<Text>{description}</Text>

			<Flex gap="1rem">
				<TutorialButton />
				<AddButton onClick={onClickButton}>{buttonName}</AddButton>
			</Flex>
		</Flex>
	);
}
