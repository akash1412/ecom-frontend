import { FC, useState, useEffect } from "react";
import { NextPage, NextPageContext } from "next";
import {
	Box,
	Button,
	Image,
	Flex,
	FormControl,
	Input,
	Select,
	Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import useAuthContext from "../context/AuthContext";

import axios from "axios";
import useAuthProtected from "../hooks/useAuthProtected";

interface Props extends NextPageContext {
	user: string;
}

const AddNewItem: NextPage<Props> = () => {
	// const router = useRouter();

	// if (!window.localStorage.getItem("user")) {
	// 	router.push("/");
	// }

	useEffect(() => {
		console.log("called");
	});

	const [previewURL, setPreviewURL] = useState(null);

	const [itemData, setItemData] = useState({
		title: "",
		price: 0,
		description: "",
		category: "",
		image: "",
	});

	const [disable, setDisable] = useState(false);

	const onInputChange = (e: any) => {
		let { value, name } = e.target;

		if (name === "price") value = +value;

		setItemData({ ...itemData, [name]: value });
	};

	const onImageUpload = (e: any) => {
		const file = e.target.files[0];

		if (!file) return;

		const reader = new FileReader();

		reader.readAsDataURL(file);

		reader.onloadend = () => {
			setPreviewURL(reader.result);
		};

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "czgq4bpq");

		axios("https://api.cloudinary.com/v1_1/dhqp2dd6b/image/upload", {
			method: "POST",
			data: formData,
		}).then(result => {
			setItemData({ ...itemData, [e.target.name]: result.data.url });
		});
	};

	const addItem = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setDisable(true);
		axios({
			url: "http://localhost:90/api/v1/store",
			method: "POST",
			data: itemData,
		})
			.then(() => alert("item created successfully"))
			.catch(err => console.log(err.response))
			.finally(() => {
				setDisable(false);

				setItemData({
					title: "",
					price: 0,
					description: "",
					category: "",
					image: "",
				});

				setPreviewURL(null);
			});
	};

	return (
		<Box h='100%' w='100%' py='.5rem' px='1.5rem'>
			<Flex m='auto' mt='4rem' w='70%'>
				<Box minH='20rem' w='20rem' d='flex' flexDir='column' mr='1.5rem'>
					<Box
						border='1px solid #ccc'
						style={{ flexGrow: 1 }}
						d='flex'
						alignItems='center'
						justifyContent='center'>
						{!previewURL && !itemData.image && (
							<FormControl textAlign='center'>
								<label
									htmlFor='img'
									style={{
										cursor: "pointer",
										padding: ".5rem 1rem",
										backgroundColor: "#ccc",
										fontWeight: 550,
										textAlign: "center",
									}}>
									upload image
								</label>
								<Input id='img' type='file' d='none' onChange={onImageUpload} />
							</FormControl>
						)}

						{previewURL && (
							<Image src={previewURL} w='100%' h='100%' objectFit='cover' />
						)}
					</Box>
					<Button
						mt='.4rem'
						alignSelf='center'
						color='#fff'
						bgColor='red.500'
						px='2rem'
						py='.3rem'
						_hover={{
							bgColor: "red.500",
						}}
						_active={{
							bgColor: "red.500",
						}}>
						Clear
					</Button>
				</Box>
				<Box flex='1 1 0'>
					<form onSubmit={addItem}>
						<FormControl mb='1rem' isDisabled={disable}>
							<Input
								type='text'
								name='title'
								value={itemData.title}
								placeholder='title'
								isRequired
								onChange={onInputChange}
							/>
						</FormControl>
						<FormControl mb='1rem' isDisabled={disable}>
							<Input
								type='number'
								value={itemData.price}
								name='price'
								placeholder='25'
								isRequired
								onChange={onInputChange}
							/>
						</FormControl>
						<FormControl mb='1rem' isDisabled={disable}>
							<Textarea
								placeholder='description'
								value={itemData.description}
								name='description'
								onChange={onInputChange}></Textarea>
						</FormControl>
						<FormControl mb='1rem' isDisabled={disable}>
							<Select
								name='category'
								value={itemData.category}
								isRequired
								placeholder='select category'
								onChange={onInputChange}>
								<option>men</option>
								<option>women</option>
								<option>sneaker</option>
								<option>jacket</option>
								<option>hat</option>
							</Select>
						</FormControl>
						<Button type='submit'>Add Item</Button>
					</form>
				</Box>
			</Flex>
		</Box>
	);
};

// AddNewItem.getInitialProps = (ctx ): Props=> {
// 	const user = JSON.parse(window.localStorage.getItem("user"));

// 	console.log(user);

// 	return { user: "asd", ...ctx};
// };
export default AddNewItem;
