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
import PasswordInput from "./../PasswordInput/PasswordInput";
import { auth, timeStamp,DB_STORE } from "../../firebase/config";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [showSpinner, setShowSpinner] = useState(false);

	const handleInputChange = e => {
		const { name, value } = e.target;

		setInputs({ ...inputs, [name]: value });
	};

	const SignUpUser = () => {
		const { name, email, password } = inputs;
		setShowSpinner(true);
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				return DB_STORE.collection("users").doc(user.uid).set({
					name,
					email,
					cart: [],
					wishlist: [],
					createdAt:timeStamp()
				});
			})
			.then(() => {
				setShowSpinner(false);
				setInputs({ name: "", email: "", password: "" });
			});
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
