import React from 'react'
import { Flex, Grid, Heading, Text, Box, Link, GridItem } from '@chakra-ui/react'

const Education = () => {
  return (
    <Flex py={{base:"24px", lg:"40px"}} px={{base:"32px", lg:"112px",'2xl':"128px"}} mb="40px" direction="column">
        <Heading as="h3" color="gray.50" textAlign={{base:"center", lg:"left"}}>
            <Text as="span" py="16px" mb="32px" fontSize="4xl" display="inline-block" borderBottom="4px" borderColor="mainColor">
                Formación 
            </Text>
            <Grid gap="24px" templateColumns={"repeat(2, 1fr)"} templateRows={"repeat(3, 1fr)"} placeContent="center" display={{base:"flex", lg:"grid"}} flexDirection="column" maxW={{base:"fit-content", lg:"none"}} m={{base:"auto", lg:"unset"}}>
                <GridItem order={"1"}>
                    <Flex alignItems="center" gap="16px">
                        <Text color="mainColor">•</Text>
                        <Text color="gray.400" fontSize="xl" fontWeight="semibold">2020</Text>
                        <Text color="gray.400" fontSize="xl" fontWeight="semibold">-</Text>
                        <Flex direction="column" gap="8px">
                            <Text color="gray.50" fontSize="2xl" textAlign="left">Diseño de Interfaces</Text>
                            <Flex gap="16px">
                                <Text color="gray.50" fontSize="lg" fontWeight="normal">Platzi</Text>
                                <Text color="blue.600" fontSize="lg" fontWeight="normal">Completado</Text>
                                </Flex>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem order={"3"}>
                    <Flex alignItems="center" gap="16px">
                        <Text color="mainColor">•</Text>
                        <Text color="gray.400" fontSize="xl" fontWeight="semibold">2022</Text>
                        <Text color="gray.400" fontSize="xl" fontWeight="semibold">-</Text>
                        <Flex direction="column" gap="8px">
                            <Text color="gray.50" fontSize="2xl" textAlign="left">Desarrollo Frontend en React</Text>
                            <Flex gap="16px">
                                <Text color="gray.50" fontSize="lg" fontWeight="normal">CoderHouse</Text>
                                <Text color="blue.600" fontSize="lg" fontWeight="normal">Completado</Text>
                                </Flex>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem order={"5"}>
                    <Flex alignItems="center" gap="16px">
                            <Text color="mainColor">•</Text>
                            <Text color="gray.400" fontSize="xl" fontWeight="semibold">2020</Text>
                            <Text color="gray.400" fontSize="xl" fontWeight="semibold">-</Text>
                            <Flex direction="column" gap="8px">
                                <Text color="gray.50" fontSize="2xl" textAlign="left">Desarrollo Backend con Node.js</Text>
                                <Flex gap="16px">
                                    <Text color="gray.50" fontSize="lg" fontWeight="normal">Platzi</Text>
                                    <Text color="gray.400" fontSize="lg" fontWeight="normal">En progreso</Text>
                                    </Flex>
                            </Flex>
                    </Flex>
                </GridItem>
                <GridItem order={"2"}>
                    <Link href="https://platzi.com/p/alanmflores/ruta/19-interfaces-ui/diploma/detalle/" color="mainColor" target='blank' fontSize="lg" fontWeifht="semibold">Ver certificado online</Link>
                </GridItem>
                <GridItem order={"4"}>
                    <Link href="https://www.coderhouse.com/certificados/63657a6d0fa3c3000f75c8bb" target='blank' color="mainColor" fontSize="lg" fontWeifht="semibold">Ver certificado online</Link>
                </GridItem>                
            </Grid>
        </Heading>
    </Flex>
  )
}

export default Education