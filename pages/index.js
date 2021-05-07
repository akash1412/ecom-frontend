import { Box } from "@chakra-ui/react";
import { DB_STORE, Upload } from "../firebase/config";
import CollectionOverview from "../components/CollectionOverview/CollectionOverview";
import MetaHead from "./../components/MetaHead/MetaHead";
import { useState } from "react";

const Home = ({ ALL_ITEMS }) => {
	useState(() => {
		Upload();
	}, []);

	return (
		<Box>
			<MetaHead title='All Items' />
			<CollectionOverview
				data={{
					type: "t-shirt",
					items: ALL_ITEMS.filter(item => item.type === "t-shirt").slice(0, 4),
				}}
			/>
			<CollectionOverview
				data={{
					type: "shoes",
					items: ALL_ITEMS.filter(item => item.type === "shoes").slice(0, 4),
				}}
			/>
			<CollectionOverview
				data={{
					type: "jersey",
					items: ALL_ITEMS.filter(item => item.type === "jersey").slice(0, 4),
				}}
			/>
		</Box>
	);
};

export default Home;

export const getStaticProps = async () => {
	let ALL_ITEMS = [];

	try {
		const snapShot = await DB_STORE.collection("store").get();

		snapShot.forEach(doc => {
			ALL_ITEMS.push({ id: doc.id, ...doc.data() });
		});
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			ALL_ITEMS,
		},
	};
};
