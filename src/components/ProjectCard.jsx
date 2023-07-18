import React from 'react'
import { Flex, Heading, Box, Text, Image } from '@chakra-ui/react'
import Link from 'next/link'
import ActionButton from './ActionButton'
import Tag from './Tag'

const ProjectCard = ({slug, title, tags, description}) => {
  return (
    <Flex gap="24px" px="16px" py="32px" shadow="lg" alignItems="center">
        <Box maxW="384px">
            <Image src={`../../assets/images/${slug}.jpg`} alt="project image"/>
        </Box>
        <Flex direction="column">
            <Flex gap="16px">
                {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
                ))}
            </Flex>
            <Heading as="h4" fontSize="2xl" color="gray.50" py="16px">
                {title}
            </Heading>
            <Text color="gray.50" mb="32px" noOfLines={2}>
                {description}
            </Text>
            <Link href={`/projects/${slug}`}>
                <ActionButton action={"Ver más detalles"}/>
            </Link>
        </Flex>
    </Flex>
  )
}

export default ProjectCard