import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Tag, Text, TagLabel, HStack} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


function Projects() {

  const projects =[
    {title: "stephen-tao.com.", source: "https://github.com/stephzilla20", desc: "The site you are on right now! Built with Nextjs and Tailwind. Using Vercel to deploy.", link: "https://stephen-tao.com", tags: ["Nextjs", "Tailwind", "Vercel"]},
    {title: "Gist", source: "https://github.com/DxctorHu/Deerhacks-III-2024", desc: "", link: "", tags: ["React/Nextjs", "Python/Flask","Open AI"]},
    {title: "Smoggle Maps", source: "https://github.com/mustafakhafaji/deltahacks-x", desc: "A mobile based app aimed to provide navigation while encourging users to be concious about their CO2 emissions whenA mobile-based app aimed to provide navigation while encouraging users to be conscious of their CO2 emissions when traveling. travelling ", link: "",tags: ["React-Native", "Expo Go","Google Maps API"]},
    {title: "Stand", source: "https://github.com/stephzilla20/Stand", desc: "", link: "",tags: ["React/Nextjs", "Java/Spring Boot","Postgresql"]}
  ]

  const breakpoints = {
    base: '0px',
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
  
  const theme = extendTheme({ breakpoints })


  return (
   
      <div className=' flex justify-center items-center min-h-screen'>
        <div className='grid md:grid-cols-2 gap-2'>
        {projects.map((project) => (
          <div className='m-4 ' key={project.title}>
            <Card boxSize={{base: '350', md: '300', lg:'450'}}>
              <CardBody>
                <CardHeader fontSize={25}>
                  {/* check value of link, if not empty then add as link else just display title */}
                  {project.link ? (
                    <a href = {project.link} target= "_blank">
                      {project.title}  
                    </a>              
                  ) : (
                  <span>{project.title}</span>
                  )}
                </CardHeader>
                <a href = {project.source} target='_blank'>Source</a>
                  <Text>
                    {project.desc}
                  </Text>
                
                <CardFooter>
                 <HStack spacing={'4'}>
                    {project.tags.map((tag) => (  
                        <Tag
                        size={'md'}
                        variant={'subtle'}
                        colorScheme={'blue'}
                      > 
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                  </HStack>
                </CardFooter>
              </CardBody>
            </Card>
          </div>
        ))}
        
        </div>
      </div>
    
  )
}

export default Projects
