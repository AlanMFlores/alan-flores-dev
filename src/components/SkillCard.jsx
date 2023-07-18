import React from 'react'
import { Flex, Box, Text} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const SkillCard = ({iconName, skill}) => {
  return (
    <Flex gap="16px" alignItems="center" maxW="284px" p="32px" bg="gray.800" shadow="lg">
        <Box color="mainColor">
            <Image src={`../../assets/icons/${iconName}.svg`} alt={`${skill} icon`}/>
        </Box>
        <Text color="gray.50" fontSize="2xl" fontWeight="semibold">{skill}</Text>
    </Flex>
  )
}

export default SkillCard