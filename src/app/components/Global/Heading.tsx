import { Flex, Input, Text, Checkbox, Button, Select } from "@chakra-ui/react";
import { Plus } from "phosphor-react";

interface HeadingProps {
	filter?: boolean;
	options?: string[];
	setOption?: (filter: string) => void;
	searchPlaceholder: string;
	search?: string;
	setSearch?: (search: string) => void;
	showAll: boolean;
	setShowAll: (showAll: boolean) => void;
	buttonName: string;
	onClickButton?: () => void;
}

export function Heading({
	buttonName,
	onClickButton,
	search,
	searchPlaceholder,
	setSearch,
	setShowAll,
	showAll,
	filter,
	options,
	setOption,
}: HeadingProps) {
	return (
		<Flex
			mt="2rem"
			gap="1rem"
			w="full"
			direction={["column", "row", "row"]}
			justifyContent="space-between"
		>
			<Flex gap="1rem" direction={["column", "column", "column", "row", "row"]}>
				{filter && (
					<Select
						placeholder=""
						maxW="300px"
						borderRadius="50px"
						focusBorderColor="purple.400"
						onChange={() => setOption}
					>
						{options?.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</Select>
				)}

				<Input
					placeholder={searchPlaceholder}
					maxW="300px"
					borderRadius="50px"
					focusBorderColor="purple.400"
					value={search}
					onChange={() => setSearch}
				/>

				<Flex gap=".5rem">
					<Checkbox
						rounded="md"
						colorScheme="purple"
						size="lg"
						isChecked={showAll}
						onChange={() => setShowAll(!showAll)}
					/>
					<Flex
						alignItems="center"
						gap=".3rem"
						cursor="pointer"
						onClick={() => setShowAll(!showAll)}
					>
						<Text w="max-content" display="block">
							Mostrar todos
						</Text>
					</Flex>
				</Flex>
			</Flex>

			<Button
				colorScheme="purple"
				borderRadius="50px"
				leftIcon={<Plus size={20} />}
				onClick={onClickButton}
				data-testid="add-invoice-button"
			>
				{buttonName}
			</Button>
		</Flex>
	);
}
