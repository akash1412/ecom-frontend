import { DB_STORE } from "../firebase/config";
import Collection from "./../components/Collection/Collection";
import { Box } from "@chakra-ui/react";

const Shoes = ({ data }) => {
	return (
		<Box px='1.5rem' py='.5rem'>
			<Collection items={data} />
		</Box>
	);
};

export default Shoes;

export const getStaticProps = async () => {
	let data = [];
	const snapShot = await DB_STORE.collection("store")
		.where("type", "==", "shoes")
		.get();

	if (!snapShot.empty) {
		snapShot.forEach(doc => {
			data.push({ id: doc.id, ...doc.data() });
		});
	} else {
		console.log("not found");
	}

	return {
		props: {
			data,
		},
	};
};
