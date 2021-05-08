import { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import SignInSignUpModal from "../Signin-Signup-Modal/Signin-Signup-Modal";
import ModalContextProvider from "../../context/Modal";

const Main = ({ children }) => {
	return (
		<Fragment>
			<Navbar />
			{/*//! make minW='1400px' */}
			<Box minH='calc(100vh - 4.5rem)' mt='4.5rem'>
				<Box maxW='1400px'>{children}</Box>
			</Box>
			<ModalContextProvider>
				<SignInSignUpModal />
			</ModalContextProvider>
		</Fragment>
	);
};

export default Main;
