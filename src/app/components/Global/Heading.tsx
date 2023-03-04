import { Flex, Input, Select } from "@chakra-ui/react";
import { CheckboxGroup } from "./CheckboxGroup";

interface HeadingProps {
	filter?: boolean;
	options?: string[];
	setOption?: (filter: string) => void;
	searchPlaceholder: string;
	search?: string;
	setSearch?: (search: string) => void;
	showAll: boolean;
	setShowAll: (showAll: boolean) => void;
	inputs?: boolean;
	showInputs?: boolean;
	setShowInputs?: (showInputs: boolean) => void;
}

export function Heading({
	search,
	searchPlaceholder,
	setSearch,
	setShowAll,
	showAll,
	filter = false,
	options,
	setOption,
	inputs = false,
	showInputs = false,
	setShowInputs,
}: HeadingProps) {
	return (
		<Flex
			gap="1rem"
			w="full"
			direction={["column", "row", "row"]}
			justifyContent="space-between"
		>
			<Flex gap="1rem" maxW="900px" w="full">
				{filter && (
					<Select
						maxW="200px"
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
					maxW="400px"
					w="full"
					borderRadius="50px"
					focusBorderColor="purple.400"
					value={search}
					onChange={() => setSearch}
				/>

				<CheckboxGroup
					name="Mostrar todos"
					checked={showAll}
					setChecked={setShowAll}
				/>

				{inputs && (
					<CheckboxGroup
						name="Mostrar insumos"
						checked={showInputs}
						setChecked={() => setShowInputs}
					/>
				)}
			</Flex>
		</Flex>
	);
}
