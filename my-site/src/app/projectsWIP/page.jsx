"use client"
import React from 'react'
import { Card, CardHeader,VStack, CardBody, CardFooter, Tag, Text, TagLabel, HStack} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Microlink from '@microlink/react'
import {AiFillGithub} from 'react-icons/ai';


function Projects() {

  const projects =[
    {title: "stephen-tao.com.", source: "https://github.com/stephzilla20", desc: "", link: "https://stephen-tao.com", tags: ["Nextjs", "Tailwind", "Vercel"]},
    {title: "Gist", source: "https://github.com/DxctorHu/Deerhacks-III-2024", desc: "", link: "https://devpost.com/software/gist-es7d1t", tags: ["React" , "Nextjs", "Python", "Flask","Open AI"]},
    {title: "Smoggle Maps", source: "https://github.com/mustafakhafaji/deltahacks-x", desc: " ", link: "https://devpost.com/software/smoggle-maps",tags: ["React-Native", "Expo Go","Google Maps API"]},
    {title: "EcoEats", source: "https://github.com/stephzilla20/terrahacks", desc: "", link: "https://devpost.com/software/ecoeats-6ky3rx",tags: ["React Native","Flask", "Google Gemini", "Azure Vision","Expo Go"]}
  ]
// A mobile based app aimed to provide navigation while encourging users to be concious about their CO2 emissions whenA mobile-based a
// pp aimed to provide navigation while encouraging users to be conscious of their CO2 emissions when traveling. travelling
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
                <CardHeader fontSize={25}>
                  {/* check value of link, if not empty then add as link else just display title */}
                  {project.link ? (
                    <a 
                      href = {project.source} 
                      target= "_blank"
                      className='hover:underline'
                    >
                       <HStack spacing={2}>
                        <Text>{project.title}</Text>
                        <AiFillGithub />
                      </HStack>
                    </a>              
                  ) : (
                  <span>{project.title}</span>
                  )}
                </CardHeader>
                <CardBody>
                  {/* <Text
                    fontSize={{base:14, md:16}}
                  >
                    {project.desc}
                  </Text> */}
                  <div key={project.title}>
                    <Microlink url={project.link}/>
                  </div>
                 
                </CardBody>
                <CardFooter>
                 <HStack 
                 spacing={'4'}
                 flexWrap={'wrap'}
                 >
                    {project.tags.map((tag) => (  
                        <Tag
                        size={{base:'md', md:'lg'}}
                        variant={'subtle'}
                        colorScheme={'blue'}
                      > 
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                  </HStack>
                </CardFooter>
            </Card>
          </div>
        ))}
        
        </div>
      </div>
    
  )
}

export default Projects
