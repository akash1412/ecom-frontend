import { useContext, useState } from "react";
import {
	Box,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

import { ModalContext } from "../../context/Modal";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const SignInSignUpModal = () => {
	const { isOpen, toggleModal } = useContext(ModalContext);

	const [showSignUp, setShowSignUp] = useState(false);

	return (
		<Modal size='sm' isOpen={isOpen}>
			<ModalOverlay />
			<ModalContent px='2rem' py='2rem' borderRadius='none'>
				<ModalCloseButton onClick={() => toggleModal()} />
				<ModalBody pb={6}>{!showSignUp ? <SignIn /> : <SignUp />}</ModalBody>

				<ModalFooter textAlign='center'>
					<Text d='inline'>do not have an account ? </Text>
					<Box
						as='button'
						fontWeight='bold'
						onClick={() => setShowSignUp(!showSignUp)}>
						{showSignUp ? "sign in" : "sign up"}
					</Box>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default SignInSignUpModal;
