import { Button, ButtonProps } from "@chakra-ui/react";
import { PencilSimple, Plus, Trash, YoutubeLogo } from "phosphor-react";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
	children?: ReactNode;
}

export function EditButton({ ...rest }: CustomButtonProps) {
	return (
		<Button
			maxW="1rem"
			display="flex"
			alignItems="center"
			paddingRight=".5rem"
			borderRadius=".6rem"
			leftIcon={<PencilSimple size={20} />}
			{...rest}
		/>
	);
}

export function DeleteButton({ ...rest }: CustomButtonProps) {
	return (
		<Button
			maxW="1rem"
			colorScheme="red"
			display="flex"
			alignItems="center"
			paddingRight=".5rem"
			borderRadius=".6rem"
			leftIcon={<Trash size={20} />}
			{...rest}
		/>
	);
}

export function AddButton({ children, ...rest }: CustomButtonProps) {
	return (
		<Button
			colorScheme="purple"
			borderRadius="50px"
			leftIcon={<Plus size={20} />}
			data-testid="add-invoice-button"
			{...rest}
		>
			{children}
		</Button>
	);
}

export function TutorialButton({ ...rest }: CustomButtonProps) {
	return (
		<Button
			colorScheme="red"
			borderRadius="50px"
			leftIcon={<YoutubeLogo size={20} />}
			data-testid="add-invoice-button"
			{...rest}
		>
			Ver toturial
		</Button>
	);
}
