import React from "react";
import { Box } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { DB_STORE } from "../firebase/config";
import CollectionOverview from "../components/CollectionOverview/CollectionOverview";
import MetaHead from "../components/MetaHead/MetaHead";

import axios from "axios";

import { Item } from "../Interface/Interface";

interface Props {
	data: any;
}

const Home: React.FC<Props> = ({ data }) => {
	return (
		<Box py='.5rem' px='1.5rem'>
			<MetaHead title='All Items' />

			{/* {data.items.map(itemCollection => (
				<CollectionOverview
					key={itemCollection.type}
					collection={itemCollection}
				/>
			))} */}
		</Box>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	let result;

	try {
		const response = await axios({
			url: "http://localhost:90/api/v1/store/",
			method: "GET",
		});

		result = response.data.data;

		console.log(result);
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			data: result,
		},
	};
};
