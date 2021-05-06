import { DB_STORE } from "../firebase/config";

const Shoes = ({ data }) => {
	return (
		<div>
			{data.items.map(item => (
				<li>{item.title}</li>
			))}
		</div>
	);
};

export default Shoes;

export const getStaticProps = async () => {
	let data;
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
