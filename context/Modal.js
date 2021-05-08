import { createContext, useState } from "react";

export const ModalContext = createContext({});

const ModalContextProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toogleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<ModalContext.Provider value={{ isOpen, toogleModal }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
