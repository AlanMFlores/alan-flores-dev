import React from 'react'
import Image from 'next/image'
import { Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" px="128px" py="48px" bg="gray.900">
        <figure>
            <Image 
                src={"/assets/icons/logo.svg"}
                width={64}
                height={66}
                alt='alan flores dev logo'
            />
        </figure>
        <Flex gap="32px">
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

        <Flex gap="16px">
            <Link color="gray.400" fontSize="xl">
                <FontAwesomeIcon icon={faGithub}/>
            </Link>
            <Link color="gray.400" fontSize="xl">
                <FontAwesomeIcon icon={faLinkedin}/>
            </Link>
        </Flex>
    </Flex>
  )
}

export default Header