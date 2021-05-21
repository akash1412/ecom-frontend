import * as React from "react";
import { Box } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { DB_STORE } from "../firebase/config";
import CollectionOverview from "../components/CollectionOverview/CollectionOverview";
import MetaHead from "../components/MetaHead/MetaHead";
import { FilterItems } from "../utils/utils";
import axios from "axios";

import { Item } from "../Interface/Interface";
import Collection from "./../components/Collection/Collection";

interface Data {
	total: number;
	items: Item[];
}

interface HomeProps {
	data: Data;
}

const Home: React.FC<HomeProps> = ({ data }) => {
	const { items, total } = data;
	return (
		<Box py='.5rem' px='1.5rem'>
			<MetaHead title='All Items' />
			<Collection items={items} />
		</Box>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	let result: Data;

	try {
		const response = await axios({
			url: "http://localhost:90/api/v1/store/",
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
	};
};
