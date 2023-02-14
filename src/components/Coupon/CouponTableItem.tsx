import { Button, Flex, SimpleGrid, Switch } from "@chakra-ui/react";
import { PencilSimple, Trash } from "phosphor-react";
import { useCoupon } from "../../store/useCoupon";

interface CouponTableItemProps {
	id: string;
	couponCode: string;
	discountType: string;
	discountValue: number;
	totalAmount: number;
	amountAvailable: number;
	amountByClient: number;
	isActive: boolean;
}

export function CouponTableItem({
	couponCode,
	discountType,
	amountAvailable,
	discountValue,
	id,
	isActive,
	totalAmount,
}: CouponTableItemProps) {
	const { getCouponById, toggleActiveCoupon, removeCoupon } = useCoupon();

	return (
		<SimpleGrid
			color="#64748B"
			alignItems="center"
			fontWeight="600"
			p="1rem"
			gap="2rem"
			gridTemplateColumns="repeat(8, 1fr)"
		>
			<Flex w="180px">{couponCode}</Flex>
			<Flex>{discountType}</Flex>
			<Flex>R$ {discountValue}</Flex>
			<Flex>{totalAmount}</Flex>
			<Flex>{amountAvailable}</Flex>
			<Flex>
				<Switch
					colorScheme="green"
					isChecked={isActive}
					onChange={() => toggleActiveCoupon(id)}
				/>
			</Flex>
			<Flex>
				<Button
					maxW="1rem"
					display="flex"
					alignItems="center"
					paddingRight=".5rem"
					borderRadius=".6rem"
					leftIcon={<PencilSimple size={20} />}
					onClick={() => getCouponById(id)}
				/>
			</Flex>
			<Flex>
				<Button
					maxW="1rem"
					colorScheme="red"
					display="flex"
					alignItems="center"
					paddingRight=".5rem"
					borderRadius=".6rem"
					leftIcon={<Trash size={20} />}
					onClick={() => removeCoupon(id)}
				/>
			</Flex>
		</SimpleGrid>
	);
}
