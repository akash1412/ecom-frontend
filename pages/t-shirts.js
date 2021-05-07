import { DB_STORE } from "../firebase/config";
import { Box } from "@chakra-ui/react";
import Collection from "../components/Collection/Collection";

const TShirts = ({ data }) => {
	return (
		<Box px='1.5rem' py='.5rem'>
			<Collection items={data} />
		</Box>
	);
};

export default TShirts;

export const getStaticProps = async () => {
	let data = [];
	const snapShot = await DB_STORE.collection("store")
		.where("type", "==", "t-shirt")
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
