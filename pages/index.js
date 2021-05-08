import { Box } from "@chakra-ui/react";
import { DB_STORE, Upload } from "../firebase/config";
import CollectionOverview from "../components/CollectionOverview/CollectionOverview";
import MetaHead from "./../components/MetaHead/MetaHead";
import { FilterItems } from "../utils/utils";

const Home = ({ ALL_ITEMS }) => {
	return (
		<Box py='.5rem' px='1.5rem'>
			<MetaHead title='All Items' />
			<CollectionOverview data={FilterItems("t-shirt", ALL_ITEMS)} />
			<CollectionOverview data={FilterItems("shoes", ALL_ITEMS)} />
			<CollectionOverview data={FilterItems("jersey", ALL_ITEMS)} />
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
