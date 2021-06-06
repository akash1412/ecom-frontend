import React from "react";
import { useRouter } from "next/router";

const useAuthProtected = props => {
	// const router = useRouter();

	const [user, setUser] = React.useState(window.localStorage.getItem("user"));

	// if (user) router.push("/");

	const MyComponent = props => {
		return <div>page</div>;
	};

	return MyComponent;
};

// useAuthProtected.getInitialProps = () => {
// 	const user = window.localStorage.getItem("user");

// 	return { user };
// };

export default useAuthProtected;
