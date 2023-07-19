import React from 'react'
import { Flex, Heading, Text, Image } from '@chakra-ui/react'
import ContactButton from '../ContactButton'

const Contact = () => {
  return (
    <Flex py={{base:"24px", lg:"40px"}} px={{base:"32px", lg:"112px",'2xl':"128px"}} direction="column" bg="gray.800" id="contact">
        <Heading as="h3" color="gray.50" textAlign={{base:"center", lg:"left"}}>
            <Text as="span" py="16px" mb="32px" display="inline-block" borderBottom="4px" borderColor="mainColor">
                Contacto
            </Text>
        </Heading>
        <Flex direction="column" gap="48px">
            <Text fontSize="md" fontWeight="normal" color="gray.50">
                Si te interesa mi propuesta y querés que trabajemos juntos te invito a que hablemos, a través de los siguientes medios de contacto, o bien si te interesa saber más sobre mis trabajos, podes seguirme en LinkedIn o ver mis repositorios en GitHub.   
            </Text>
            <Flex alignItems="center" justifyContent="center" gap="32px" display={{base:"grid", lg:"flex"}} gridTemplateColumns="repeat(2, 1fr)" maxW={{base:"fit-content", lg:"none"}} m={{base: "auto", lg:"unset"}}>
                <ContactButton icon={"email"} cta={"Enviar email"} href="mailto:alanmfloresdev@gmail.com"/>
                <ContactButton icon={"whatsapp"} cta={"Enviar mensaje"} href="https://wa.me/5491127928986"/>
                <ContactButton icon={"linkedin"} cta={"Conectar"} href="https://www.linkedin.com/in/alanmflores/"/>
                <ContactButton icon={"github"} cta={"Ver repositorios"} href="https://github.com/AlanMFlores"/>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Contact