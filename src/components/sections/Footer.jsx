import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex direction="column" alignItems="center" gap="32px" py="40px" borderTop="4px" borderColor="gray.800">
        <Image src="../../../assets/icons/logo-white.svg" w="64px"/>
        <Flex>
            <Text as="small" color="gray.50" fontSize="sm" fontWeight="semibold">Diseñado y Desarrollado por <Text as="span" color="mainColor" fontWeight="semibold">Alan Flores</Text> 🛠</Text>
        </Flex>
    </Flex>
  )
}

export default Footer