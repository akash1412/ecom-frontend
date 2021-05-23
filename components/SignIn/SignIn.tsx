import React from "react";
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

interface Props {
	setToken: (token: string) => void;
	closeModal: () => void;
}

interface Input {
	email: string;
	password: string;
}

const SignIn: React.FC<Props> = ({ setToken, closeModal }) => {
	const [inputs, setInputs] = React.useState<Input>({
		email: "",
		password: "",
	});

	const [formError, setFormError] = React.useState<null | string>(null);

	const [showSpinner, setShowSpinner] = React.useState<boolean>(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};

	const Login = async (): Promise<void> => {
		setShowSpinner(true);

		try {
			const res = await axios({
				url: "http://localhost:90/api/v1/users/login",
				method: "POST",
				data: inputs,
			});
			//! error messages from server

			setToken(res.data.token);
			closeModal();
		} catch (error) {
			console.log(error.message);
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
					isRequired
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
				onClick={Login}
				onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
					console.log("sda");
					// e.key === "13" && Login();
				}}>
				{showSpinner ? <Spinner size='sm' /> : "Sign In"}
			</Button>
		</Flex>
	);
};

export default SignIn;