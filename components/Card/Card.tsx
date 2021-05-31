import React from "react";
import {
	Link as LinkUI,
	Flex,
	Box,
	Image,
	Heading,
	Icon,
	Skeleton,
} from "@chakra-ui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { AiOutlineHeart, AiOutlineEdit } from "react-icons/ai";

import { useBucketContext } from "./../../context/BucketContext";
import { useAuthContext } from "./../../context/AuthContext";

/**
 * @param Interfaces
 
 */
import { Item } from "./../../Interface/Interface";

interface CardProps extends Item {
	// description?:string
}

const Card: React.FC<CardProps> = props => {
	const { _id, title, slug, description, price, image, category } = props;

	const [loaded, setLoaded] = useState(false);

	const { addItemToCart } = useBucketContext();

	const { user } = useAuthContext();

	return (
		<Fragment>
			{!loaded && <Skeleton h='20rem' borderRadius='none' />}

			<Box position='relative' w='100%' h='100%'>
				{user?.role !== "admin" && (
					<Box
						pos='absolute'
						zIndex='4'
						top='0'
						right='0'
						bgColor='#000'
						p='2px 4px'
						transform='translate(5px,-5px)'
						onClick={(e: any) => {
							addItemToCart(props);
						}}>
						<Icon as={AiOutlineHeart} color='#fff' textAlign='center' />
					</Box>
				)}

				<Link href={`/item/${slug}`}>
					<LinkUI d={loaded ? "block" : "none"} w='100%' h='100%'>
						<Flex role='group' w='100%' h='100%' overflow='hidden'>
							<Box w='100%' h='100%'>
								<Image
									width='100%'
									height='100%'
									objectFit='cover'
									transition='transform .5s'
									src={image}
									alt={title}
									_groupHover={{ transform: "scale(1.1)" }}
									onLoad={() => setLoaded(true)}
								/>
							</Box>
						</Flex>
					</LinkUI>
				</Link>
			</Box>
		</Fragment>
	);
};

export default Card;
