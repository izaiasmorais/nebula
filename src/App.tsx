import { Flex, Text } from "@chakra-ui/react";
import { CouponHeader } from "./components/Coupon/CouponHeader";
import { CouponModal } from "./components/Coupon/CouponModal";
import { CouponTableHeader } from "./components/Coupon/CouponTableHeader";
import { CoupoTableItem } from "./components/Coupon/CoupoTableItem";

function App() {
	return (
		<Flex bg="purple.500" w="full" h="100vh">
			<Flex
				w="full"
				maxW="1200px"
				bg="white"
				maxH="700px"
				borderRadius="1rem"
				mx="auto"
				mt="5rem"
				textAlign="center"
				display="flex"
				p="2.5rem"
				flexDirection="column"
			>
				<Text color="purple.500" as="strong">
					Cupons
				</Text>

				<CouponHeader />

				<CouponTableHeader />

				<CoupoTableItem />
				<CoupoTableItem />
				<CoupoTableItem />
				<CoupoTableItem />
			</Flex>

			<CouponModal />
		</Flex>
	);
}

export default App;
