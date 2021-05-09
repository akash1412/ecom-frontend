import { useState } from "react";
import {
	InputGroup,
	Input,
	InputRightElement,
	Icon,
	Button,
} from "@chakra-ui/react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";

const PasswordInput = props => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	return (
		<InputGroup>
			<Input
				pr='4.5rem'
				borderRadius='none'
				type={show ? "text" : "password"}
				{...props}
				placeholder='Enter password'
			/>
			<InputRightElement width='4.5rem'>
				<Button h='1.75rem' borderRadius='none' size='sm' onClick={handleClick}>
					{show ? <Icon as={GrFormView} /> : <Icon as={GrFormViewHide} />}
				</Button>
			</InputRightElement>
		</InputGroup>
	);
};

export default PasswordInput;
