import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	console.log(isOpen);

	return (
		<ModalContext.Provider value={{ isOpen, toggleModal }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
