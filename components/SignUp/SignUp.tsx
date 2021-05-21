import { useState } from "react";
import {
	Flex,
	FormControl,
	Input,
	FormLabel,
	Box,
	Button,
	Spinner,
} from "@chakra-ui/react";
import PasswordInput from "../PasswordInput/PasswordInput";

import axios from "axios";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		password: "akash123",
		confirmPassword: "akash123",
	});

	const [showSpinner, setShowSpinner] = useState(false);

	const handleInputChange = e => {
		const { name, value } = e.target;

		setInputs({ ...inputs, [name]: value });
	};

	const SignUpUser = async () => {
		const { name, email, password, confirmPassword: passwordConfirm } = inputs;
		setShowSpinner(true);

		try {
			const user = await axios({
				url: "http://localhost:90/api/v1/users/signup",
				method: "POST",
				data: {
					name,
					email,
					password,
					passwordConfirm,
				},
			});
		} catch (error) {
			console.log("Error ", error);
		} finally {
			setShowSpinner(false);
			setInputs({ name: "", email: "", password: "", confirmPassword: "" });
		}
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
				/>
			</FormControl>
			<FormControl>
				<FormLabel>Password</FormLabel>

				<PasswordInput
					name='password'
					value={inputs.password}
					onChange={handleInputChange}
				/>
			</FormControl>
			<FormControl>
				<FormLabel>Confirm Password</FormLabel>

				<PasswordInput
					placeholder='Confirm Password'
					name='confirmPassword'
					value={inputs.confirmPassword}
					onChange={handleInputChange}
				/>
			</FormControl>
			<Button
				alignSelf='center'
				w='10rem'
				mt='2rem'
				px='2rem'
				borderRadius='none'
				bgColor='black'
				color='white'
				border='1.6px solid black'
				_hover={{
					bgColor: "white",
					color: "black",
					border: "1.6px solid black",
				}}
				opacity={showSpinner ? ".7" : "1"}
				onClick={SignUpUser}>
				{showSpinner ? <Spinner size='sm' /> : "Sign Up"}
			</Button>
		</Flex>
	);
};

export default SignUp;
