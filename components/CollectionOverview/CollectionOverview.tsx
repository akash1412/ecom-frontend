import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Collection from "../Collection/Collection";

import { Item } from "../../Interface/Interface";

interface CollectionOverviewProps {
	title: string;
	data: Item[];
}

const CollectionOverview: React.FC<CollectionOverviewProps> = ({
	title,
	data,
}) => {
	return (
		<Box>
			<Heading size='sm'>{title}</Heading>
			<Collection items={data} />
		</Box>
	);
};

export default CollectionOverview;
