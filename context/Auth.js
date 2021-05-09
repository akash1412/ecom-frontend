import { createContext, useState, useEffect } from "react";
import { auth, DB_STORE } from "../firebase/config";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged(async user => {
			const doc = await DB_STORE.collection("users").doc(user.uid).get();

			if (doc.exists) {
				setUser({ ...doc.data() });
			}
		});
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
