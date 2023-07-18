import React from 'react'
import { Flex, Text, Image, Link } from '@chakra-ui/react'

const ContactButton = ({icon, cta, href}) => {
  return (
    <Link target='blank' href={href}>
        <Flex alignItems="center" gap="16px">
            <Image src={`../../assets/icons/${icon}.svg`}/>
            <Text color="gray.50" fontSize="md" fontWeight="semibold">{cta}</Text>
        </Flex>
    </Link>
  )
}

export default ContactButton