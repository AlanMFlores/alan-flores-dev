import React from 'react'
import { Button } from '@chakra-ui/react'

const ActionButton = ({action}) => {
  return (
    <Button bg="mainColor" color="gray.900" fontSize="lg" fontWeight="semibold" px="32px" py="8px" rounded="0" maxW={{base:"none", xl:"fit-content"}} w="100%">
        {action}
    </Button>
  )
}

export default ActionButton