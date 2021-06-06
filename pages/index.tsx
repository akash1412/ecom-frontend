import React from "react";
import { Box } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import CollectionOverview from "../components/CollectionOverview/CollectionOverview";
import MetaHead from "../components/MetaHead/MetaHead";

// import axios from "../API/API";

import axios from "axios";

import { Item } from "../Interface/Interface";

interface Props {
	data: any;
}

const Home: React.FC<Props> = ({ data }) => {
	return (
		<Box py='.5rem' px='1.5rem' w='100%'>
			<MetaHead title='All Items' />

			{data.items.map(itemCollection => (
				<CollectionOverview
					key={itemCollection.type}
					collection={itemCollection}
				/>
			))}
		</Box>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	let result;

	try {
		const response = await axios({
			url: "https://ecom-api-v1.herokuapp.com/api/v1/store",
			method: "GET",
		});

		result = response.data.data;
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			data: result,
		},

		revalidate: 5,
	};
};
