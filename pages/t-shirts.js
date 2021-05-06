import { DB_STORE } from "../firebase/config";

const TShirts = ({ data }) => {
	return <div>t-shirts</div>;
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
