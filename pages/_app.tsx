import { AppProps } from "next/app";
import "../styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Main from "../components/Main/Main";
import AuthContextProvider from "../context/AuthContext";
import ModalContextProvider from "../context/ModalContext";
import BucketContextProvider from "../context/BucketContext";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<CSSReset />
			<AuthContextProvider>
				<ModalContextProvider>
					<BucketContextProvider>
						<Main>
							<Component {...pageProps} />
						</Main>
					</BucketContextProvider>
				</ModalContextProvider>
			</AuthContextProvider>
		</ChakraProvider>
	);
}

export default MyApp;
