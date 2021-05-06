import { Box, Flex, Heading } from "@chakra-ui/react";
import SearchBar from "./../SearchBar/SearchBar";
import NavLinks from "./../NavLinks/NavLinks";

const Navbar = () => {
	return (
		<Flex
			bgColor='white'
			position='fixed'
			top='0'
			zIndex='1'
			h='4.5rem'
			w='100%'
			borderBottom='2px solid #333'
			px='1.4rem'
			alignItems='center'
			justifyContent='space-between'>
			<Flex>
				<Heading size='md'>L</Heading>
				<NavLinks />
			</Flex>
			<SearchBar />
		</Flex>
	);
};

export default Navbar;
