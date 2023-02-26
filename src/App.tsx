import { Flex } from "@chakra-ui/react";
import { AppTabs } from "./app/components/Global/Tabs";

function App() {
	return (
		<Flex bg="purple.500" w="full" h="100vh" p="1rem">
			<Flex
				w="full"
				maxW="1300px"
				mx="auto"
				my="auto"
				direction="column"
				gap="0"
			>
				<AppTabs />
			</Flex>
		</Flex>
	);
}

export default App;
