import React from 'react'
import Image from 'next/image'
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex justifyContent={{base: "center", lg:"space-between"}} alignItems="center" px={"128px"} py="48px" bg="gray.900">
        <NextLink href={"/"}>
            <Image 
                src={"/assets/icons/logo.svg"}
                width={64}
                height={66}
                alt='alan flores dev logo'
            />
        </NextLink>
        <Flex gap="32px" display={{base: "none", lg:"flex"}}>
            <Link color="gray.50" fontWeight="semibold" href={"#about-me"} _hover={{color:"mainColor"}}>
                Sobre Mí
            </Link>
            <Link color="gray.50" fontWeight="semibold" href={"#projects"} _hover={{color:"mainColor"}}>
                Proyectos
            </Link>
            <Link color="gray.50" fontWeight="semibold" href={"#contact"} _hover={{color:"mainColor"}}>
                Contacto
            </Link>
        </Flex>
        <Flex gap="16px" display={{base: "none", lg:"flex"}}>
            <Link href="https://github.com/AlanMFlores" target='blank' color="gray.400" fontSize="xl" _hover={{color: "mainColor"}}>
                <FontAwesomeIcon icon={faGithub}/>
            </Link>
            <Link href="https://www.linkedin.com/in/alanmflores/" target='blank' color="gray.400" fontSize="xl" _hover={{color: "mainColor"}}>
                <FontAwesomeIcon icon={faLinkedin}/>
            </Link>
        </Flex>
    </Flex>
  )
}

export default Header