import { useState } from "react";
import axios from "axios";

import {
	Flex,
	FormControl,
	Input,
	FormLabel,
	Button,
	Spinner,
} from "@chakra-ui/react";

import PasswordInput from "../PasswordInput/PasswordInput";

import { auth } from "../../firebase/config";

const SignIn = () => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const [showSpinner, setShowSpinner] = useState(false);

	const handleInputChange = e => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};

	const Login = async () => {
		setShowSpinner(true);
		// const { email, password } = inputs;

		try {
			const res = await axios({
				url: "http://localhost:90/api/v1/users/login",
				method: "POST",
				data: inputs,
			});
			console.log(res);
		} catch (error) {
			console.log(error);
		} finally {
			setShowSpinner(false);
		}
	};

	return (
		<Flex flexDir='column'>
			<FormControl>
				<FormLabel>First name</FormLabel>
				<Input
					borderRadius='none'
					name='email'
					value={inputs.email}
					onChange={handleInputChange}
					placeholder='Email'
				/>
			</FormControl>

			<FormControl mt={2}>
				<FormLabel>Password</FormLabel>
				<PasswordInput
					name='password'
					value={inputs.password}
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
				border='1.2px solid black'
				_hover={{
					bgColor: "white",
					color: "black",
					border: "1.2px solid black",
				}}
				opacity={showSpinner ? ".7" : "1"}
				onClick={Login}>
				{showSpinner ? <Spinner size='sm' /> : "Sign In"}
			</Button>
		</Flex>
	);
};

export default SignIn;
