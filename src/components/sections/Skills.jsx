import React from 'react'
import { Flex, Grid, Heading, Text, Box } from '@chakra-ui/react'
import SkillCard from '../SkillCard'

const Skills = () => {
  return (
    <Flex py={{base:"24px", lg:"40px"}} px={{base:"32px", lg:"112px",'2xl':"128px"}} direction="column">
        <Heading as="h3" color="gray.50" textAlign={{base:"center", lg:"left"}}>
            <Text as="span" py="16px" mb="32px" fontSize="4xl" display="inline-block" borderBottom="4px" borderColor="mainColor">
                Habilidades
            </Text>
        </Heading>
        <Box mb="48px">
            <Heading as="h4" fontSize={{base:"xl", lg:"2xl"}} color="gray.50" fontWeight="semibold" mb="32px" textAlign={{base:"center", lg:"left"}}>
                Desarrollo Web
            </Heading>
            <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)", xl:"repeat(4, 1fr)"}} gap={"16px"} justifyItems={{base: "center"}}>
                <SkillCard iconName={"html"} skill={"HTML"}/>
                <SkillCard iconName={"css"} skill={"CSS"}/>
                <SkillCard iconName={"javascript"} skill={"Javascript"}/>
                <SkillCard iconName={"sass"} skill={"SASS"}/>
                <SkillCard iconName={"react"} skill={"React.js"}/>
                <SkillCard iconName={"next"} skill={"Next.js"}/>
                <SkillCard iconName={"bootstrap"} skill={"Bootstrap"}/>
                <SkillCard iconName={"tailwind"} skill={"Tailwind"}/>
            </Grid>
        </Box>
        <Box mb="48px">
            <Heading as="h4" fontSize="2xl" color="gray.50" fontWeight="semibold" mb="32px" textAlign={{base:"center", lg:"left"}}>
                Diseño UI
            </Heading>
            <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)", xl:"repeat(4, 1fr)"}} gap={"16px"} justifyItems={{base: "center"}}>
                <SkillCard iconName={"figma"} skill={"Figma"}/>
                <SkillCard iconName={"adobexd"} skill={"Adobe XD"}/>
                <SkillCard iconName={"photoshop"} skill={"Photoshop"}/>
                <SkillCard iconName={"illustrator"} skill={"Illustrator"}/>
            </Grid>
        </Box>
        <Box mb="48px">
            <Heading as="h4" fontSize="2xl" color="gray.50" fontWeight="semibold" mb="32px" textAlign={{base:"center", lg:"left"}}>
                Próximamente
            </Heading>
            <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)", xl:"repeat(4, 1fr)"}} gap={"16px"} justifyItems={{base: "center"}}>
                <SkillCard iconName={"firebase"} skill={"Firebase"}/>
                <SkillCard iconName={"wordpress"} skill={"WordPress"}/>
            </Grid>
        </Box>
        <Box>
            <Heading as="h4" fontSize="2xl" color="gray.50" fontWeight="semibold" mb="32px" textAlign={{base:"center", lg:"left"}}>
                Idioma
            </Heading>
            <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)", xl:"repeat(4, 1fr)"}} gap={"16px"} justifyItems={{base: "center"}}>
                <SkillCard iconName={"language"} skill={"Inglés B1"}/>
            </Grid>
        </Box>
    </Flex>
  )
}

export default Skills