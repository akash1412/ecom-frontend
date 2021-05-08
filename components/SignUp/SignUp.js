import { useState } from "react";
import {
	Flex,
	FormControl,
	Input,
	FormLabel,
	Box,
	Button,
} from "@chakra-ui/react";

import { auth, DB_STORE } from "../../firebase/config";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleInputChange = e => {
		const { name, value } = e.target;

		setInputs({ ...inputs, [name]: value });
	};

	const SignUpUser = () => {
		const { name, email, password } = inputs;

		auth
			.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				return DB_STORE.collection("users").doc(user.uid).set({
					name,
					email,
					cart: [],
					wishlist: [],
				});
			})
			.then(() => setInputs({ name: "", email: "", password: "" }));
	};

	return (
		<Flex flexDir='column'>
			<FormControl>
				<FormLabel>Name</FormLabel>
				<Input
					borderRadius='none'
					name='name'
					value={inputs.name}
					onChange={handleInputChange}
					placeholder='John Doe'
					borderRadius='none'
				/>
			</FormControl>
			<FormControl>
				<FormLabel>Email</FormLabel>
				<Input
					borderRadius='none'
					name='email'
					value={inputs.email}
					onChange={handleInputChange}
					placeholder='Email'
					borderRadius='none'
				/>
			</FormControl>
			<FormControl>
				<FormLabel>Password</FormLabel>
				<Input
					borderRadius='none'
					name='password'
					value={inputs.password}
					onChange={handleInputChange}
					placeholder='Email'
					borderRadius='none'
				/>
			</FormControl>
			<Button
				alignSelf='center'
				mt='2rem'
				px='2rem'
				borderRadius='none'
				bgColor='black'
				color='white'
				border='1.2px solid black'
				_hover={{
					bgColor: "white",
					color: "black",
					border: "1.2px solid black",
				}}
				onClick={SignUpUser}>
				Sign Up
			</Button>
		</Flex>
	);
};

export default SignUp;
