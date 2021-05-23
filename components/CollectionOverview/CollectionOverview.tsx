import React from "react";
import Link from "next/link";
import { Box, Heading, Link as LinkUI } from "@chakra-ui/react";
import Collection from "../Collection/Collection";

import { Item } from "../../Interface/Interface";

interface CollectionOverviewProps {
	collection: {
		type: string;
		data: Item[];
	};
}

const CollectionOverview: React.FC<CollectionOverviewProps> = ({
	collection,
}) => {
	const { type, data } = collection;
	return (
		<Box>
			<Link href={`/store/${type}`}>
				<LinkUI>{type}</LinkUI>
			</Link>
			<Collection items={data} />
		</Box>
	);
};

export default CollectionOverview;
