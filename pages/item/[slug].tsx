import { FC, useState } from "react";
import {
	Box,
	Image,
	Heading,
	Text,
	Button,
	Icon,
	useToast,
	Spinner,
} from "@chakra-ui/react";
import axios from "../../API/API";
import { useRouter } from "next/router";
// import axios from "axios";
import { IoTrashBinOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";

import { useAuthContext } from "../../context/AuthContext";

const Item: FC<{ data: any }> = ({ data }) => {
	const router = useRouter();
	const { user } = useAuthContext();

	const toast = useToast();

	const [deletingItem, setDeletingItem] = useState(false);

	const deleteItem = () => {
		setDeletingItem(true);

		axios({
			url: `/store/${data.slug}`,
			method: "DELETE",
		})
			.then(() => {
				toast({
					title: "Item Deleted Successfully",
					status: "success",
					duration: 2000,
					isClosable: true,
				});

				router.replace("/");
			})
			.catch(() => {
				toast({
					title: "Something went wrong",
					description: "Try Again Later",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			})
			.finally(() => {
				setDeletingItem(false);
			});
	};

	return (
		<Box w='100%' d='grid' placeItems='center' px='2rem' py='1rem'>
			<Box w='90%' d='flex'>
				<Box width='25rem' h='25rem'>
					<Image
						src={data.image}
						alt={data.title}
						w='100%'
						h='100%'
						objectFit='cover'
						objectPosition='center'
					/>
				</Box>
				<Box
					style={{ flexGrow: 1 }}
					ml='2rem'
					px='1rem'
					d='flex'
					flexDir='column'>
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
						{user?.role === "admin" ? (
							<>
								<Button
									mr='1.2rem'
									border='none'
									borderRadius='none'
									px='3rem'
									bgColor='black'
									_hover={{
										bgColor: "black",
									}}
									_active={{
										bgColor: "black",
									}}
									onClick={() => router.push(`/edit/${data.slug}`)}>
									<Icon as={AiOutlineEdit} fontSize='1.2rem' color='#fff' />
								</Button>
								<Button
									border='none'
									borderRadius='none'
									px='3rem'
									bgColor='red.500'
									_active={{
										bgColor: "red.500",
									}}
									_hover={{
										bgColor: "red.500",
									}}
									onClick={deleteItem}>
									{deletingItem ? (
										<Spinner color='#fff' />
									) : (
										<Icon
											as={IoTrashBinOutline}
											fontSize='1.2rem'
											color='#fff'
										/>
									)}
								</Button>
							</>
						) : (
							<>
								<Button mr='1.2rem'>Add To Cart</Button>
								<Button>Add To Wishlist</Button>
							</>
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export const getStaticPaths = async () => {
	const paths = [];

	const res = await axios({
		url: "/store/slugs",
		method: "GET",
	});

	res.data.data.slugs.forEach(item =>
		paths.push({ params: { slug: item.slug } })
	);

	return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
	let data;

	const response = await axios({
		url: `/store/${params.slug}`,
		method: "GET",
	});

	data = response.data.data.item;

	return {
		props: {
			data,
		},

		revalidate: 5,
	};
};

export default Item;
