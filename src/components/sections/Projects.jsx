import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import ProjectCard from '../ProjectCard'
import projectsData from '../../data/projects.json'

const Projects = () => {
  return (
    <Flex py="40px" px="128px" direction="column" id="projects">
        <Heading as="h3" color="gray.50">
            <Text as="span" py="16px" mb="32px" fontSize="4xl" display="inline-block" borderBottom="4px" borderColor="mainColor">
                Proyectos
            </Text>
        </Heading>
        <Flex direction="column" gap="32px">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              tags={project.tags}
              description={project.description}
            />
          ))}
        </Flex>
    </Flex>
  )
}

export default Projects