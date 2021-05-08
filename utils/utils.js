export const FilterItems = (type, ALL_ITEMS) => {
	const items = ALL_ITEMS.filter(item => item.type === type).slice(0, 4);

	return { type, items };
};
