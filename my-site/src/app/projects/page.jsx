import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Text} from '@chakra-ui/react'

function Projects() {

  const projects =[
    {title: "stephen-tao.com.", source: "https://github.com/stephzilla20", desc: "", link: "https://stephen-tao.com"},
    {title: "Gist", source: "https://github.com/stephzilla20", desc: "", link: ""},
    {title: "Smoggle Maps", source: "https://github.com/stephzilla20", desc: "", link: ""},
    {title: "Stand", source: "https://github.com/stephzilla20", desc: "", link: ""}


  ]



  return (
    <div className='flex justify-center m-10 '>
      {projects.map((project) => (
        <div>
          <Card>
            <CardBody>
              <CardHeader>
                {/* check value of link, if not empty then add as link else just display title */}
                {project.link ? (
                  <a href = {project.link} target= "_blank">
                    {project.title}  
                  </a>              
                ) : (
                <span>{project.title}</span>
                )}
    
              </CardHeader>
              <Stack spacing={8} direction='row'>
                <Text>
                  {project.desc}
                </Text>
              </Stack>
              <CardFooter>
                <a href = {project.source} target='_blank'>Source</a>
              </CardFooter>
            </CardBody>
          </Card>
        </div>
      ))}
      
    </div>
  )
}

export default Projects
