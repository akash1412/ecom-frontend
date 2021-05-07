import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { DB_STORE } from "../firebase/config";
import CollectionOverview from "../components/CollectionOverview/CollectionOverview";

const Home = ({ ALL_ITEMS }) => {
	const router = useRouter();

	return (
		<Box px='1.5rem' py='.5rem'>
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

{
	/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */
}
