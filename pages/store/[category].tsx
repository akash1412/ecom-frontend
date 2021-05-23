import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";

import { Item } from "../../Interface/Interface";
import Collection from "./../../components/Collection/Collection";
import MetaHead from "./../../components/MetaHead/MetaHead";

interface Props {
	data: {
		total: number;
		items: Item[];
	};
}

const Category: React.FC<Props> = ({ data }) => {
	const router = useRouter();

	const type = router.query.category;

	const { total, items } = data;

	return (
		<Box py='.5rem' px='1.5rem'>
			{/* <MetaHead title={type} /> */}
			<Heading fontSize='1.4rem' mb='.6rem'>
				{type} "({total}) items"
			</Heading>
			<Collection items={items} />
		</Box>
	);
};

export default Category;

export const getStaticPaths: GetStaticPaths = async () => {
	let paths = [];

	try {
		const res = await axios({
			url: "http://localhost:90/api/v1/store/category-types",
			method: "GET",
		});

		const CategoryList = res.data.data.types;

		for (let category of CategoryList) {
			paths.push({ params: { category } });
		}
	} catch (error) {
		console.log(error);
	}

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await axios({
		url: `http://localhost:90/api/v1/store/category/${params.category}`,
		method: "GET",
	});

	const categoryData = res.data.data;

	return {
		props: {
			data: categoryData,
		},
	};
};
