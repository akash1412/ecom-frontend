import { useContext, useState } from "react";
import {
	Box,
	Text,
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

import { ModalContext } from "../../context/Modal";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const SignInSignUpModal = () => {
	const { isOpen, toogleModal } = useContext(ModalContext);

	const [showSignUp, setShowSignUp] = useState(false);

	return (
		<Modal isOpen={true}>
			<ModalOverlay />
			<ModalContent px='3rem' py='2rem' borderRadius='none'>
				<ModalHeader>Create your account</ModalHeader>
				<ModalCloseButton onClick={() => toogleModal()} />
				<ModalBody pb={6}>{!showSignUp ? <SignIn /> : <SignUp />}</ModalBody>

				<ModalFooter textAlign='center'>
					<Text d='inline'>do not have an account ? </Text>
					<Box
						as='button'
						fontWeight='bold'
						onClick={() => setShowSignUp(!showSignUp)}>
						sign up
					</Box>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default SignInSignUpModal;
