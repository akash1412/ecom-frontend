import { FC, useState, useEffect } from "react";
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
import { useAuthContext } from "../context/AuthContext";

import axios from "axios";

const AddNewItem: FC<{}> = () => {
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
			});
	};

	return (
		<Box h='100%' w='100%' py='.5rem' px='1.5rem'>
			<Flex m='auto' mt='4rem' justifyItems='center' w='70%'>
				<Box h='20rem' w='20rem' d='flex' mr='1.5rem' border='1px solid #ccc'>
					{!previewURL && !itemData.image && (
						<Box margin='0 auto' alignSelf='center'>
							<FormControl>
								<label htmlFor='img' style={{ cursor: "pointer" }}>
									upload image
								</label>
								<Input id='img' type='file' d='none' onChange={onImageUpload} />
							</FormControl>
						</Box>
					)}

					{previewURL && (
						<Image src={previewURL} w='100%' h='100%' objectFit='cover' />
					)}
				</Box>
				<Box>
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

export default AddNewItem;
