import { useContext } from "react";
import { Box, Icon } from "@chakra-ui/react";

import { BiLogIn } from "react-icons/bi";

import { ModalContext } from "../../context/Modal";

const NavbarOptions = () => {
	const { toogleModal, isOpen } = useContext(ModalContext);

	console.log(isOpen);

	return (
		<Box justifySelf='flex-end'>
			<Icon
				onClick={() => toogleModal()}
				cursor='pointer'
				as={BiLogIn}
				w='1rem'
				h='1rem'
			/>
		</Box>
	);
};
export default NavbarOptions;
