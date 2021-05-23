import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import AuthModal from "../Modal/Modal";
import ModalContextProvider from "../../context/ModalContext";
import BucketContainer from "./../BucketContainer/BucketContainer";
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
			<AuthModal />
			{/* <BucketContainer /> */}
		</React.Fragment>
	);
};

export default Main;
