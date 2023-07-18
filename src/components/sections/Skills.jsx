import React from 'react'
import { Flex, Grid, Heading, Text, Box } from '@chakra-ui/react'
import SkillCard from '../SkillCard'

const Skills = () => {
  return (
    <Flex py="40px" px="128px" direction="column">
        <Heading as="h3" color="gray.50">
            <Text as="span" py="16px" mb="32px" fontSize="4xl" display="inline-block" borderBottom="4px" borderColor="mainColor">
                Habilidades
            </Text>
        </Heading>
        <Box mb="48px">
            <Heading as="h4" fontSize="2xl" color="gray.50" fontWeight="semibold" mb="32px">
                Desarrollo Web
            </Heading>
            <Grid templateColumns={"repeat(4, 1fr)"} gap={"16px"}>
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
            <Heading as="h4" fontSize="2xl" color="gray.50" fontWeight="semibold" mb="32px">
                Diseño UI
            </Heading>
            <Grid templateColumns={"repeat(4, 1fr)"} gap={"16px"}>
                <SkillCard iconName={"figma"} skill={"Figma"}/>
                <SkillCard iconName={"adobexd"} skill={"Adobe XD"}/>
                <SkillCard iconName={"photoshop"} skill={"Photoshop"}/>
                <SkillCard iconName={"illustrator"} skill={"Illustrator"}/>
            </Grid>
        </Box>
        <Box mb="48px">
            <Heading as="h4" fontSize="2xl" color="gray.50" fontWeight="semibold" mb="32px">
                Próximamente
            </Heading>
            <Grid templateColumns={"repeat(4, 1fr)"} gap={"16px"}>
                <SkillCard iconName={"firebase"} skill={"Firebase"}/>
                <SkillCard iconName={"wordpress"} skill={"WordPress"}/>
            </Grid>
        </Box>
        <Box mb="48px">
            <Heading as="h4" fontSize="2xl" color="gray.50" fontWeight="semibold" mb="32px">
                Idioma
            </Heading>
            <Grid templateColumns={"repeat(4, 1fr)"} gap={"16px"}>
                <SkillCard iconName={"language"} skill={"Inglés B1"}/>
            </Grid>
        </Box>
    </Flex>
  )
}

export default Skills