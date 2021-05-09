import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./../components/Main/Main";
import AuthContextProvider from "./../context/Auth";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<AuthContextProvider>
				<Main>
					<Component {...pageProps} />
				</Main>
			</AuthContextProvider>
		</ChakraProvider>
	);
}

export default MyApp;
