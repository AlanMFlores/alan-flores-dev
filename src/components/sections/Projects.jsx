import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import ProjectCard from '../ProjectCard'
import projectsData from '../../data/projects.json'

const Projects = () => {
  return (
    <Flex py={{base:"24px", lg:"40px"}} px={{base:"32px", lg:"112px",'2xl':"128px"}} direction="column" id="projects">
        <Heading as="h3" color="gray.50" textAlign={{base:"center", lg:"left"}}>
            <Text as="span" py="16px" mb="32px" fontSize="4xl" display="inline-block" borderBottom="4px" borderColor="mainColor">
                Proyectos
            </Text>
        </Heading>
        <Flex direction="column" gap="32px" display={{base:"flex", md:"grid", xl: "flex"}} gridTemplateColumns="repeat(2, 1fr)">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              tags={project.tags}
              description={project.description}
              content={project.content}
              repository={project.repository}
              deploy={project.deploy}
            />
          ))}
        </Flex>
    </Flex>
  )
}

export default Projects