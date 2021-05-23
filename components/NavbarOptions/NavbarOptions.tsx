import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { ModalContext } from "../../context/ModalContext";
import { AuthContext } from "../../context/AuthContext";
import SignOut from "../Signout/Signout";
import MenuProfile from "./../Menu/Menu";

const NavbarOptions: React.FC<{}> = () => {
	const { toggleModal } = React.useContext(ModalContext);

	const { token } = React.useContext(AuthContext);

	return (
		<Box alignSelf='center' justifySelf='flex-end' d='flex' alignItems='center'>
			{!token ? (
				<Button
					p='0'
					border='none'
					borderRadius='none'
					bgColor='transparent'
					_hover={{ bgColor: "transparent" }}
					onClick={toggleModal}>
					login
				</Button>
			) : (
				<SignOut />
			)}
			<MenuProfile />
		</Box>
	);
};
export default NavbarOptions;
