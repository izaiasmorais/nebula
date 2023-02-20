import { Flex } from "@chakra-ui/react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export function InvoiceStatusToggle() {
	return (
		<Flex>
			<ToggleGroup.Root
				className="ToggleGroup"
				type="single"
				defaultValue="center"
				aria-label="Text alignment"
				style={{
					display: "flex",
					gap: ".5rem",
				}}
			>
				<ToggleGroup.Item
					className="ToggleGroupItem"
					value="left"
					style={{
						background: "#f5f5f5",
						padding: ".5rem",
						borderRadius: ".5rem",
					}}
				>
					Pago
				</ToggleGroup.Item>
			</ToggleGroup.Root>
		</Flex>
	);
}
