import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton , ModalBody, Flex, Text, Image, Link} from '@chakra-ui/react'
import Tag from './Tag';

const ProjectDetailsModal = ({slug, title, tags, description, onClose, content, repository, deploy}) => {
    const contentString = content;
    const contentArray = contentString.split('\n');

  return (
    <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent maxW="800px" w="100%" bg="gray.900">
            <ModalHeader color="gray.50">{title}</ModalHeader>
            <ModalCloseButton color="gray.50"/>
            <ModalBody>
                <Flex gap="16px" mb="24px" flexWrap="wrap">
                    {tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                    ))}
                </Flex>
                <Image src={`../../assets/images/${slug}.jpg`} mb="16px"/>
                <Text color="gray.50" mb="16px">
                    <i>{description}</i>
                </Text>
                <Text color="gray.50" mb="32px">
                    {
                        contentArray.map((paragraph, index) => (
                            <Text key={index} mb={"8px"}>
                                {paragraph}
                            </Text>
                        )) 
                    }
                </Text>
                <Flex gap="16px" justifyContent="center" mb="32px">
                    <Link href={repository} color="gray.900" fontWeight="bold" bg="mainColor" px="16px" py="8px" target='blank' textAlign="center">
                        Ver Repositorio en Github
                    </Link>
                    <Link href={deploy} color="gray.900" fontWeight="bold" bg="mainColor" px="16px" py="8px" target='blank' textAlign="center">
                        Ver Deploy
                    </Link>
                </Flex>
            </ModalBody>
        </ModalContent>
    </Modal>
  )
}

export default ProjectDetailsModal