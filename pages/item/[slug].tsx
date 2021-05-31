import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
// import axios from "../../API/API";
import axios from "axios";

const Item = ({ data }) => {
	console.log(data);

	return (
		<Box w='100%' px='2rem'>
			<Box w='80%' m='0 auto' d='flex'>
				<Box width='22rem' h='22rem'>
					<Image
						src={data.image}
						alt={data.title}
						w='100%'
						h='100%'
						objectFit='cover'
						objectPosition='center'
					/>
				</Box>
				<Box ml='2rem' px='1rem' d='flex' flexDir='column'>
					<Heading fontSize='2rem' mb='1.2rem'>
						{data.title}
					</Heading>
					<Text fontWeight='semibold' mb='2rem'>
						{data?.description ||
							"psum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
					</Text>
					<Text fontWeight='semi-bold' fontSize='1.5rem'>
						${data.price}
					</Text>
					<Box mt='auto' d='flex'>
						<Button mr='1.2rem'>Add To Cart</Button>
						<Button>Add To Wishlist</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export const getStaticPaths = async () => {
	const paths = [];

	const res = await axios({
		url: "https://ecom-api-v1.herokuapp.com/api/v1/store/slugs",
		method: "GET",
	}).catch(err => console.log(err.response));

	res.data.data.slugs.forEach(item =>
		paths.push({ params: { slug: item.slug } })
	);

	return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
	let data;

	const response = await axios({
		url: `https://ecom-api-v1.herokuapp.com/api/v1/store/${params.slug}`,
		method: "GET",
	});

	data = response.data.data.item;

	return {
		props: {
			data,
		},
	};
};

export default Item;
