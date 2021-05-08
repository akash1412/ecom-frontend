import { Box, Flex, Heading } from "@chakra-ui/react";
import SearchBar from "./../SearchBar/SearchBar";
import NavLinks from "./../NavLinks/NavLinks";

import ModalContextProvider from "../../context/Modal";
import NavbarOptions from "../NavbarOptions/NavbarOptions";

const Navbar = () => {
	return (
		<Flex
			bgColor='white'
			position='fixed'
			top='0'
			zIndex='5'
			h='4.5rem'
			w='100%'
			px='1.4rem'
			alignItems='center'
			justifyContent='space-between'>
			<Flex>
				<Heading size='md'>L</Heading>
				<NavLinks />
			</Flex>
			<SearchBar />
			<ModalContextProvider>
				<NavbarOptions />
			</ModalContextProvider>
		</Flex>
	);
};

export default Navbar;
