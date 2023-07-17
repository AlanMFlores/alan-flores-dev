import React from 'react'
import { Button } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'

const DownloadResumeButton = () => {
  return (
    <Button 
        rightIcon={<DownloadIcon />} 
        color="gray.50"  
        _hover={{
            background: "transparent",
            color: "mainColor",
          }} 
        background="transparent" variant='solid'
    >
        Descargar CV
    </Button>
  )
}

export default DownloadResumeButton