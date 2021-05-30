import { Box, Image } from "@chakra-ui/react";
import { DB_STORE } from "../../firebase/config";

const Product = ({ data }) => {
	const { coverImg, title, price, type: catergory } = data;
	return (
		<Box maxH='calc(100vh - 4.5rem)' d='flex'>
			<Box maxH='100%' flexBasis='60%'>
				<Image
					src={coverImg}
					alt={title}
					w='100%'
					h='100%'
					objectFit='cover'
					objectPosition='center'
				/>
			</Box>
			<Box>{title}</Box>
		</Box>
	);
};

// export const getStaticPaths = async () => {
// 	const paths = [];

// 	const allItems = await DB_STORE.collection("store").get();

// 	for (const doc of allItems.docs) {
// 		paths.push({ params: { id: doc.id.toString() } });
// 	}
// 	return { paths, fallback: true };
// };

// export const getStaticProps = async ({ params }) => {
// 	let data;

// 	const doc = await DB_STORE.collection("store").doc(params.id).get();

// 	if (doc.exists) {
// 		data = { ...doc.data() };
// 	}

// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// };

export default Product;
