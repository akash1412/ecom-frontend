import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Link as LinkUI } from "@chakra-ui/react";

const NavLinks = () => {
	return (
		<Flex ml='1.2rem' fontSize='.8rem' alignItems='center'>
			<Link href='/'>
				<LinkUI color='black' opacity='.5' _hover={{ opacity: "1" }}>
					All
				</LinkUI>
			</Link>
			<Link href='/t-shirts'>
				<LinkUI ml='.5rem' color='black' opacity='.5' _hover={{ opacity: "1" }}>
					T-Shirts
				</LinkUI>
			</Link>
			<Link href='/shoes'>
				<LinkUI ml='.5rem' color='black' opacity='.5' _hover={{ opacity: "1" }}>
					Shoes
				</LinkUI>
			</Link>
			<Link href='/jerseys'>
				<LinkUI ml='.5rem' color='black' opacity='.5' _hover={{ opacity: "1" }}>
					Jersey
				</LinkUI>
			</Link>
		</Flex>
	);
};

export default NavLinks;
