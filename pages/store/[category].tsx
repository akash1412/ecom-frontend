import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import axios from "axios";

const Category = () => {
	const router = useRouter();

	console.log(router);

	return <div>{router.pathname}</div>;
};

export default Category;

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [
			{ params: { category: "men" } },
			{ params: { category: "women" } },
			{ params: { category: "hat" } },
			{ params: { category: "jacket" } },
			{ params: { category: "sneaker" } },
		],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	// /category/:category

	const res = await axios({
		url: `http://localhost:90/api/v1/store/category/${params.category}`,
		method: "GET",
	});

	console.log(res);

	return {
		props: {
			data: "asd",
		},
	};
};
