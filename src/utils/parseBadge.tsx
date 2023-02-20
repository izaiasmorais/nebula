import { Badge } from "@chakra-ui/react";

export function toProperCase(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function parseBadge(type: string) {
	if (type === "paid") {
		return (
			<Badge colorScheme="green" px=".4rem" py=".2rem" borderRadius=".3rem">
				{toProperCase(type)}
			</Badge>
		);
	} else if (type === "unpaid") {
		return (
			<Badge colorScheme="orange" px=".4rem" py=".2rem" borderRadius=".3rem">
				{toProperCase(type)}
			</Badge>
		);
	} else if (type === "overdue") {
		return (
			<Badge colorScheme="red" px=".4rem" py=".2rem" borderRadius=".3rem">
				{toProperCase(type)}
			</Badge>
		);
	} else {
		return (
			<Badge colorScheme="purple" px=".4rem" py=".2rem" borderRadius=".3rem">
				{toProperCase(type)}
			</Badge>
		);
	}
}
