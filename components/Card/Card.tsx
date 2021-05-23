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
import { FiHeart } from "react-icons/fi";

/**
 * @param Interfaces
 
 */
import { Item } from "./../../Interface/Interface";

interface CardProps extends Item {}

const Card: React.FC<CardProps> = props => {
	const { _id, title, slug, description, price, image, category } = props;

	const [loaded, setLoaded] = useState(false);

	return (
		<Fragment>
			{!loaded && <Skeleton h='20rem' borderRadius='none' />}

			<Link href={`/product/${_id}`}>
				<LinkUI d={loaded ? "block" : "none"}>
					<Flex
						w='100%'
						h='100%'
						position='relative'
						overflow='hidden'
						role='group'>
						{/* <Box
							w='100%'
							position='absolute'
							d='flex'
							justifyContent='space-between'
							zIndex='1'>
							<Box
								bgColor='black'
								color='white'
								opacity='1'
								_hover={{ opacity: "1" }}>
								<Heading fontSize='1rem' pt='.5rem' px='.4rem'>
									{title}
								</Heading>
								<Box as='span' fontSize='.7rem'>
									{price}
								</Box>
							</Box>
							<Box as='span'>
								<Icon as={FiHeart} />
							</Box>
						</Box> */}

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
		</Fragment>
	);
};

export default Card;
