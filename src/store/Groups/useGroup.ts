import { create } from "zustand";
import { GroupType } from "../../@types/types";
import { groups } from "../../mocks/groups";

interface GroupTypeStore {
	groups: GroupType[];
	setGroups: (groups: GroupType[]) => void;
	addGroup: (group: GroupType) => void;
	deleteGroup: (id: string) => void;
}

export const useGroup = create<GroupTypeStore>((set) => ({
	groups: groups,
	setGroups(groups: GroupType[]) {
		set(() => ({ groups }));
	},
	addGroup(group: GroupType) {
		set((state) => ({ groups: [...state.groups, group] }));
	},
	deleteGroup(id: string) {
		set((state) => ({
			groups: state.groups.filter((group) => group.id !== id),
		}));
	},
}));
