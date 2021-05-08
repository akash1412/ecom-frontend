import { Flex, Box, Pseudo, Image, Heading, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";

const Card = props => {
	const { id, coverImg, title, price } = props;

	return (
		<Link href={`/product/${id}`}>
			<a>
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
					/>
				</Flex>
			</a>
		</Link>
	);
};

export default Card;
