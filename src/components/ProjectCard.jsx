import {React, useState} from 'react'
import { Flex, Heading, Box, Text, Image, Button } from '@chakra-ui/react'
import Link from 'next/link'
import ActionButton from './ActionButton'
import Tag from './Tag'
import ProjectDetailsModal from './ProjectDetailsModal'

const ProjectCard = ({slug, title, tags, description, content, repository, deploy}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpenModal = () => {
        setIsOpenModal(true)
    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

  return (
    <Flex gap="24px" p={{base:"24px", lg:"32px"}} shadow="lg" alignItems="center" flexDirection={{base:"column", xl:"row"}} bg="gray.800" position={{base:"relative", xl:"static"}} h={{base: "528px", xl:"auto"}}>
        <Box maxW="384px">
            <Image src={`../../assets/images/${slug}.jpg`} alt="project image"/>
        </Box>
        <Flex direction="column" >
            <Flex gap="16px" flexWrap={{base: "wrap", xl:"nowrap"}}>
                {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
                ))}
            </Flex>
            <Heading as="h4" fontSize="2xl" color="gray.50" py="16px">
                {title}
            </Heading>
            <Text color="gray.50" mb="32px" noOfLines={{base:4, lg:2}}>
                {description}
            </Text>
            <Button onClick={handleOpenModal} bg="transparent" _hover={{bg:"none"}} maxW={{base:"none", xl:"fit-content"}} p="0" position={{base: "absolute", xl:"static"}} bottom="24px" left="24px" right="24px">
                <ActionButton action={"Ver más detalles"}/>
            </Button>
        </Flex>

        {
            isOpenModal && (
                <ProjectDetailsModal
                    slug={slug}
                    title={title}
                    tags={tags}
                    description={description}
                    content={content}
                    repository={repository}
                    deploy={deploy}
                    onClose={handleCloseModal}
                />
            )
        }
    </Flex>
  )
}

export default ProjectCard