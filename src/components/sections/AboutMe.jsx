import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Heading, Box, Text, Link} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const AboutMe = () => {
  return (
    <Flex py="40px" px="128px" direction="column" id="about-me">
        <Heading as="h3" color="gray.50">
            <Text as="span" py="16px" mb="32px" display="inline-block" borderBottom="4px" borderColor="mainColor">
                Sobre Mí
            </Text>
        </Heading>
        <Flex gap="48px" alignItems="center">
            <Box>
                <Text color="gray.50" mb="24px">
                    Soy Alan Flores, <Text as="span" color="mainColor" fontWeight="semibold">Desarrollador Web</Text> especializado en el <Text as="span" color="mainColor" fontWeight="semibold">Frontend</Text> con un sólido criterio de <Text as="span" color="mainColor" fontWeight="semibold">diseño</Text>, que busca seguir avanzando en el camino adquiriendo conocimientos de Backend.
                </Text>
                <Text color="gray.50" mb="24px">
                    El camino que me condujo hasta el presente no fue en línea recta, las distintas bifurcaciones me fueron llevando hacia otros lugares que me brindaron herramientas que hoy en día me permiten trabajar <Text as="span" color="mainColor" fontWeight="semibold">proyectos de mejor calidad</Text>. Desde nociones básicas de SEO y Copywriting, maquetación en Wordpress, hasta Diseño UI, siendo este último un aspecto fundamental en mis trabajos.
                </Text>
                <Text color="gray.50" mb="24px">
                    Confío plenamente en la <Text as="span" color="mainColor" fontWeight="semibold">organización y la planeación</Text> de cada proyecto, y soy riguroso con la calidad del resultado final. Estas premisas definen mi perfil como desarrollador. Considero que <Text as="span" color="mainColor" fontWeight="semibold">la diferencia está en los detalles</Text>. Si tu forma de trabajar coincide con la mía, podemos hacerlo juntos. <Link color="mainColor" textDecoration="underline" href="#contact">Hablemos</Link>.
                </Text>
            </Box>
            <Box>
                <Image src="/assets/images/profile-photo.png" alt="profile-photo" height="100%"/>
            </Box>
        </Flex>
    </Flex>
  )
}

export default AboutMe