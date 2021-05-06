import { DB_STORE } from "../../firebase/config";

const Product = ({ data }) => {
	console.log(data);
	return <div>product</div>;
};

export const getStaticPaths = async () => {
	const paths = [];
	const items = [];

	const allItems = await DB_STORE.collection("store").get();

	for (const doc of allItems.docs) {
		paths.push({ params: { id: doc.id.toString() } });
	}

	return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
	let data;

	const doc = await DB_STORE.collection("store").doc(params.id).get();

	if (doc.exists) {
		data = { ...doc.data() };
	}

	return {
		props: {
			data,
		},
	};
};

export default Product;
