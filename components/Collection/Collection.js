import { Grid } from "@chakra-ui/react";
import Card from "./../Card/Card";

const Collection = ({ items }) => {
	return (
		<Grid
			mt='.4rem'
			gridTemplateColumns={[
				"repeat(1,1fr)",
				"repeat(2,1fr)",
				"repeat(3,1fr)",
				"repeat(4,1fr)",
			]}
			gridGap='1rem'>
			{items.map(item => (
				<Card key={item.id} {...item} />
			))}
		</Grid>
	);
};

export default Collection;
