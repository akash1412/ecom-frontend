import { DB_STORE } from "../firebase/config";

const Jerseys = ({ data }) => {
	return <div>Jerseys</div>;
};

export default Jerseys;

export const getStaticProps = async () => {
	let data;
	const snapShot = await DB_STORE.collection("store")
		.where("type", "==", "jersey")
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
