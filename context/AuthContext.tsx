import React from "react";

import axios from "axios";

interface CreateContext {
	token: null | string;
	userDetail: null | object;
	setTokenHandler: (token: string) => void;
	signOut: () => void;
}

export const AuthContext = React.createContext<CreateContext>({
	token: null,
	userDetail: null,
	setTokenHandler: () => {},
	signOut: () => {},
});

interface ContextProps {
	children: React.ReactNode;
}

export const useAuthContext = () => React.useContext(AuthContext);

const AuthContextProvider: React.FC<ContextProps> = ({ children }) => {
	const [token, setToken] = React.useState<null | string>(null);
	const [userDetail, setUserDetail] = React.useState<null | object>(null);

	React.useEffect(() => {
		const token = localStorage.getItem("token");

		setToken(token);

		// if (token) {
		// 	const fetchInfo = async (): Promise<void> => {
		// 		try {
		// 			const res = await axios({
		// 				url: "http://localhost:90/api/v1/users/me",
		// 				method: "GET",
		// 				headers: {
		// 					authorization: `Bearer ${token}`,
		// 				},
		// 			});

		// 			setUserDetail(res.data.user);
		// 		} catch (error) {
		// 			console.log(error);
		// 			alert();
		// 		}
		// 	};

		// 	fetchInfo();
		// }
	}, [token]);

	const setTokenHandler = (token: string): void => {
		localStorage.setItem("token", token);

		setToken(token);
	};

	const signOut = async () => {
		console.log("logged");

		try {
			await axios({
				url: "http://localhost:90/api/v1/users/signout",
				headers: {
					authorization: `Bearer ${token}`,
				},
				method: "DELETE",
			}).then(() => localStorage.removeItem("token"));

			setToken(null);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AuthContext.Provider
			value={{ token, userDetail, setTokenHandler, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
