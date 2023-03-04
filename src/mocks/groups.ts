import { faker } from "@faker-js/faker";
import { GroupType } from "../@types/types";

const generateGroup = (): GroupType => ({
	id: faker.datatype.uuid(),
	name: faker.helpers.arrayElement([
		"Bebidas",
		"Pizza",
		"Cervejas",
		"Porção",
		"Promoção",
	]),
	printingLocation: faker.helpers.arrayElement(["Bar", "Cozinha", "Pizzaria"]),
	status: faker.datatype.boolean(),
});

const generateGroups = (count: number): GroupType[] => {
	const Groups: GroupType[] = [];

	for (let i = 0; i < count; i++) {
		Groups.push(generateGroup());
	}

	return Groups;
};

export const groups: GroupType[] = generateGroups(500);
