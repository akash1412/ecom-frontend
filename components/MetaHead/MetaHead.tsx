import React from "react";
import Head from "next/head";

interface MetaProps {
	title: string | string[];
}

const MetaHead: React.FC<MetaProps> = ({ title }) => {
	console.log(title);
	return (
		<Head>
			<title>{title}</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
};

export default MetaHead;
