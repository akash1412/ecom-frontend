import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import SignInSignUpModal from "../Signin-Signup-Modal/Signin-Signup-Modal";
import ModalContextProvider from "../../context/Modal";

interface MainCompProps {
	children: string | React.ReactNode;
}

const Main: React.FC<MainCompProps> = ({ children }) => {
	return (
		<React.Fragment>
			<Navbar />
			<Box minH='calc(100vh - 4.5rem)' mt='4.5rem'>
				<Box maxW='1400px'>{children}</Box>
			</Box>
			<ModalContextProvider>
				<SignInSignUpModal />
			</ModalContextProvider>
		</React.Fragment>
	);
};

export default Main;
