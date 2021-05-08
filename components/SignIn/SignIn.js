import { useState } from "react";

import { Flex, FormControl, Input, FormLabel, Button } from "@chakra-ui/react";

const SignIn = () => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
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
				<FormLabel>Last name</FormLabel>
				<Input
					placeholder='Password'
					name='password'
					value={inputs.password}
					onChange={handleInputChange}
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
				}}>
				Sign In
			</Button>
		</Flex>
	);
};

export default SignIn;
