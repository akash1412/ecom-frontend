import Head from "next/head";

const MetaHead = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
};

export default MetaHead;
