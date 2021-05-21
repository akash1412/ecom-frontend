import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		// auth.onAuthStateChanged(async user => {
		// 	const doc = await DB_STORE.collection("users").doc(user.uid).get();
		// 	if (doc.exists) {
		// 		setUser({ ...doc.data() });
		// 	}
		// });
		// axios({
		// 	url:''
		// })
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
