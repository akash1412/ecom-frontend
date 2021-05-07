import { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

const Main = ({ children }) => {
	return (
		<Fragment>
			<Navbar />
			<Box minH='calc(100vh - 5rem)' mt='5rem'>
				<Box m={[0, "0 auto"]} maxW='1200px' py='.5rem'>
					{children}
				</Box>
			</Box>
		</Fragment>
	);
};

export default Main;
