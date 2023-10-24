import React from 'react'
import { Button } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import resumePDF from '../../public/assets/pdf/Alan Marcelo Flores - CV.pdf'

const DownloadResumeButton = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Currículum Vitae - Alan M. Flores';
    link.click()
  }

  return (
    <Button 
        rightIcon={<DownloadIcon />} 
        color="gray.50"  
        _hover={{
            background: "transparent",
            color: "mainColor",
          }} 
        background="transparent" variant='solid'
        onClick={handleDownloadResume}
    >
        Descargar CV
    </Button>
  )
}

export default DownloadResumeButton