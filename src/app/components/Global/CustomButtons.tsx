import { Button, ButtonProps } from "@chakra-ui/react";
import { PencilSimple, Trash } from "phosphor-react";

interface CustomButtonProps extends ButtonProps {}

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
