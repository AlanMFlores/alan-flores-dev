import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Tag = ({tag}) => {
  return (
    <Box bg="blue.800" color="gray.50" fontSize="xs" fontWeight="normal" px="16px" py="2px">
        <Text>{tag}</Text>
    </Box>
  )
}

export default Tag