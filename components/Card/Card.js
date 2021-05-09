import {
	Link as LinkUI,
	Flex,
	Box,
	Pseudo,
	Image,
	Heading,
	Icon,
	Skeleton,
} from "@chakra-ui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { FiHeart } from "react-icons/fi";

const Card = props => {
	const { id, coverImg, title, price } = props;

	const [loaded, setLoaded] = useState(false);

	return (
		<Fragment>
			{!loaded && <Skeleton h='20rem' borderRadius='none' />}

			<Link href={`/product/${id}`}>
				<LinkUI d={loaded ? "inline" : "none"}>
					<Flex width='100%' position='relative' overflow='hidden' role='group'>
						<Box
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
						</Box>
						<Image
							width='100%'
							height='100%'
							objectFit='cover'
							transition='transform .5s'
							src={coverImg}
							alt={title}
							_groupHover={{ transform: "scale(1.2)" }}
							onLoad={() => setLoaded(true)}
						/>
					</Flex>
				</LinkUI>
			</Link>
		</Fragment>
	);
};

export default Card;
