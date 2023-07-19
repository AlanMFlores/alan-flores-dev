import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react';
import ActionButton from '../ActionButton'
import DownloadResumeButton from '../DownloadResumeButton'

const Hero = () => {
  return (
    <Flex position="relative">
        <Box h="496px" w="full" bg="gray.900" blendMode="overlay" opacity="30%">
          <Box h="496px" backgroundImage="/assets/images/hero-image.webp" backgroundSize="cover" filter="grayscale(100%)" opacity="100%">
          </Box>
        </Box>
        <Flex direction="column" alignItems="center" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          <Heading as="h1" color="gray.50" fontSize={{base:"4xl", lg:"5xl", xl:"6xl"}} textAlign={{base:"center", lg:"left"}} mb="24px">
            ¡Hola! Soy <Text as="span" color="mainColor" display={{base:"block", lg:"inline"}}>Alan Flores</Text>
          </Heading>
          <Heading as="h2" color="gray.400" fontSize={{base:"2xl", lg:"3xl", xl:"4xl"}} mb="64px">
            Desarrollador Frontend
          </Heading>
          <Flex>
            <Link href={"#contact"}>
              <ActionButton action={"Contacto"}/>
            </Link>
            <DownloadResumeButton/>
          </Flex>
        </Flex>
    </Flex>
  )
}

export default Hero