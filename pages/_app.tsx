import { AppProps } from "next/app";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "../components/Main/Main";
import AuthContextProvider from "../context/AuthContext";
import ModalContextProvider from "../context/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<AuthContextProvider>
				<ModalContextProvider>
					<Main>
						<Component {...pageProps} />
					</Main>
				</ModalContextProvider>
			</AuthContextProvider>
		</ChakraProvider>
	);
}

export default MyApp;
