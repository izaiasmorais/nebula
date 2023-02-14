import { Flex, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { CouponHeader } from "./components/Coupon/CouponHeader";
import { CouponModal } from "./components/Coupon/CouponModal";
import { CouponTableHeader } from "./components/Coupon/CouponTableHeader";
import { CouponTableItem } from "./components/Coupon/CouponTableItem";
import { api } from "./services/axios";
import { useCoupon } from "./store/useCoupon";

function App() {
	const { couponList, setCouponList } = useCoupon();

	useQuery(["get-coupons"], async () => {
		const response = await api.get("/coupons");

		setCouponList(response.data);
	});

	return (
		<Flex bg="purple.500" w="full" h="100vh" p="1rem">
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

				{couponList?.map((coupon) => (
					<CouponTableItem
						key={coupon.id}
						id={coupon.id}
						amountAvailable={coupon.amountAvailable}
						amountByClient={coupon.amountByClient}
						couponCode={coupon.couponCode}
						discountType={coupon.discountType}
						discountValue={coupon.discountValue}
						isActive={coupon.isActive}
						totalAmount={coupon.totalAmount}
					/>
				))}
			</Flex>

			<CouponModal />
		</Flex>
	);
}

export default App;
