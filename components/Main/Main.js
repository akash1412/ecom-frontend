import { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

const Main = ({ children }) => {
	return (
		<Fragment>
			<Navbar />
			{/*//! make minW='1400px' */}
			<Box minH='calc(100vh - 5rem)' mt='5rem'>
				<Box m={[0, "0 auto"]} maxW='1200px' py='.5rem' px='1.5rem'>
					{children}
				</Box>
			</Box>
		</Fragment>
	);
};

export default Main;
