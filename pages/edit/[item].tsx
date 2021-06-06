import React, { FC, useState, useEffect } from "react";
import { Item } from "../../Interface/Interface";
import { useRouter } from "next/router";
import { Box, Spinner, Image, FormControl, Button } from "@chakra-ui/react";
import { FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "../../API/API";
import AxiosAPI from "axios";

interface EditItem extends Partial<Item> {}

const EditItem: FC = () => {
	const router = useRouter();
	const toast = useToast();
	const [itemImg, setImg] = useState(null);

	const [item, setItem] = useState<null | EditItem>(null);
	const [disableAndShowSpinner, setDisableAndShowSpinner] = useState(false);

	useEffect(() => {
		if (!router.query.item) {
			router.back();
		}

		const GET_ITEM = async () => {
			await axios({
				url: `/store/${router.query.item}`,
				method: "GET",
			}).then(res => {
				if (res.data.data.item) {
					const { image, ...data } = res.data.data.item;

					setImg(image);
					setItem(data);
				}
			});
		};

		GET_ITEM();
	}, []);

	const onImageUpload = (e: any) => {
		const file = e.target.files[0];

		if (!file) return;

		const reader = new FileReader();

		reader.readAsDataURL(file);

		reader.onloadend = () => {
			setImg(reader.result);
		};

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "czgq4bpq");

		AxiosAPI("https://api.cloudinary.com/v1_1/dhqp2dd6b/image/upload", {
			method: "POST",
			data: formData,
		}).then(result => {
			setImg(result.data.url);
		});
	};

	const onInputChange = (e: any) => {
		let { value, name } = e.target;

		if (name === "price") value = +value;

		setItem({ ...item, [name]: value });
	};

	const SaveEdit = async (e: React.FormEvent) => {
		e.preventDefault();

		setDisableAndShowSpinner(true);

		const data = { ...item, image: itemImg };

		await axios({
			url: `/store/${item.slug}`,
			method: "PATCH",
			data,
		})
			.then(() => {
				setItem(null);
				setImg(null);
				setDisableAndShowSpinner(false);
				toast({
					title: "Item Updated Succesfully.",

					status: "success",
					duration: 2000,
					isClosable: true,
				});

				router.replace("/");
			})
			.catch(() => {
				setDisableAndShowSpinner(false);
				toast({
					title: "Something went wrong, Try again.",
					status: "error",
					duration: 2000,
					isClosable: true,
				});
			});
	};

	return (
		<>
			<Box w='100%' h='100%' px='2rem' py='1rem' d='flex'>
				<Box w='20rem' mr='1.5rem' d='grid' placeItems='center'>
					{itemImg && (
						<Image
							src={itemImg}
							alt='item'
							width='100%'
							// height='20rem'
							objectFit='cover'
						/>
					)}

					{itemImg && (
						<FormControl
							d='grid'
							placeItems='center'
							mt='.5rem'
							isDisabled={disableAndShowSpinner}>
							<Input
								d='none'
								type='file'
								id='imgfile'
								onChange={onImageUpload}
							/>

							<FormLabel
								px='3rem'
								py='.6rem'
								color='#fff'
								bgColor='#000'
								htmlFor='imgfile'
								textAlign='center'>
								change
							</FormLabel>
						</FormControl>
					)}
				</Box>

				<Box flexGrow={1}>
					<form
						onSubmit={SaveEdit}
						style={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
						}}>
						<FormControl mb='1rem' isDisabled={disableAndShowSpinner}>
							<Input
								type='text'
								name='title'
								value={item?.title}
								placeholder='title'
								isRequired
								onChange={onInputChange}
							/>
						</FormControl>
						<FormControl mb='1rem' isDisabled={disableAndShowSpinner}>
							<Input
								type='number'
								value={item?.price}
								name='price'
								placeholder='25'
								isRequired
								onChange={onInputChange}
							/>
						</FormControl>
						<FormControl mb='1rem' isDisabled={disableAndShowSpinner}>
							<Textarea
								placeholder='description'
								value={item?.description}
								name='description'
								onChange={onInputChange}></Textarea>
						</FormControl>
						<Input disabled value={item?.category} />
						<Button
							type='submit'
							alignSelf='start'
							border='none'
							color='#fff'
							borderRadius='none'
							px='3rem'
							bgColor='green.500'
							_hover={{
								bgColor: "green.500",
							}}
							_active={{
								bgColor: "green.500",
							}}
							mt='5rem'
							disabled={disableAndShowSpinner}>
							{disableAndShowSpinner ? <Spinner /> : "save"}
						</Button>
					</form>
				</Box>
			</Box>
		</>
	);
};

export default EditItem;
