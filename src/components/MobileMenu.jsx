import React from 'react'
import { Box, Collapse, Flex, Link, IconButton, useDisclosure } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const MobileMenu = () => {
    const {isOpen, onToggle} = useDisclosure();

  return (
    <Box display={{base:"block", lg:"none"}} textAlign="center">
        <IconButton
            icon={isOpen? <CloseIcon/> : <HamburgerIcon/>}
            onClick={onToggle}
            color="gray.50"
            bg="transparent"
            _hover={{color:"gray.50", bg:"transparent"}}
            fontSize="24px"
            variant="ghost"
        />
        <Collapse in={isOpen} bg="gray.800">
            <Flex py="24px" px="48px" gap="16px" flexDirection="column">
                <Link color="gray.50" fontWeight="semibold" href={"#about-me"}>
                    Sobre Mí
                </Link>
                <Link color="gray.50" fontWeight="semibold" href={"#projects"}>
                    Proyectos
                </Link>
                <Link color="gray.50" fontWeight="semibold" href={"#contact"}>
                    Contacto
                </Link>
            </Flex>
            <Flex justifyContent="center" gap="16px">
                <Link href="https://github.com/AlanMFlores" target='blank' color="gray.400" fontSize="xl" _hover={{color: "mainColor"}}>
                    <FontAwesomeIcon icon={faGithub}/>
                </Link>
                <Link href="https://www.linkedin.com/in/alanmflores/" target='blank' color="gray.400" fontSize="xl" _hover={{color: "mainColor"}}>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </Link>
            </Flex>
        
        </Collapse>
    </Box>
  )
}

export default MobileMenu