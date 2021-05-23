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
			<Link href='/store/men'>
				<LinkUI ml='.5rem' color='black' opacity='.5' _hover={{ opacity: "1" }}>
					Mens
				</LinkUI>
			</Link>
			<Link href='/store/women'>
				<LinkUI ml='.5rem' color='black' opacity='.5' _hover={{ opacity: "1" }}>
					Womens
				</LinkUI>
			</Link>
			<Link href='/store/jacket'>
				<LinkUI ml='.5rem' color='black' opacity='.5' _hover={{ opacity: "1" }}>
					Jackets
				</LinkUI>
			</Link>
			<Link href='/store/sneaker'>
				<LinkUI ml='.5rem' color='black' opacity='.5' _hover={{ opacity: "1" }}>
					Sneakers
				</LinkUI>
			</Link>
			<Link href='/store/hat'>
				<LinkUI ml='.5rem' color='black' opacity='.5' _hover={{ opacity: "1" }}>
					Hats
				</LinkUI>
			</Link>
		</Flex>
	);
};

export default NavLinks;
