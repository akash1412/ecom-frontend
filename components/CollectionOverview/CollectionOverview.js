import { Box, Heading } from "@chakra-ui/react";
import Collection from "../Collection/Collection";

const CollectionOverview = ({ data }) => {
	const { type, items } = data;

	return (
		<Box>
			<Heading size='sm'>{type}</Heading>
			<Collection items={items} />
		</Box>
	);
};

export default CollectionOverview;
