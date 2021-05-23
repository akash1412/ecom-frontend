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

import { ModalContext } from "../../context/ModalContext";
import { AuthContext } from "../../context/AuthContext";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const SignInSignUpModal = () => {
	const { isOpen, toggleModal } = useContext(ModalContext);

	const { setTokenHandler } = useContext(AuthContext);

	const [showSignUp, setShowSignUp] = useState(false);

	return (
		<Modal size='sm' isOpen={isOpen} onClose={toggleModal}>
			<ModalOverlay />
			<ModalContent px='2rem' py='2rem' borderRadius='none'>
				<ModalCloseButton />
				<ModalBody pb={6}>
					{!showSignUp ? (
						<SignIn setToken={setTokenHandler} closeModal={toggleModal} />
					) : (
						<SignUp setToken={setTokenHandler} closeModal={toggleModal} />
					)}
				</ModalBody>

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
