import { useContext } from "react";
import { Box, Icon } from "@chakra-ui/react";
import { BiLogIn } from "react-icons/bi";

import { ModalContext } from "../../context/Modal";
import { AuthContext } from "../../context/Auth";
import ProfileOverview from "./../ProfileOverview/ProfileOverview";

const NavbarOptions = () => {
	const { toggleModal, isOpen } = useContext(ModalContext);

	const { user } = useContext(AuthContext);

	return (
		<Box justifySelf='flex-end' d='flex' alignItems='center'>
			{!user ? (
				<Icon
					onClick={() => toggleModal()}
					cursor='pointer'
					as={BiLogIn}
					w='1rem'
					h='1rem'
				/>
			) : null}

			<ProfileOverview />
		</Box>
	);
};
export default NavbarOptions;
