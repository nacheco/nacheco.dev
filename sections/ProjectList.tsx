import { SectionHeading } from '@/components'
import ProjectCard from '@/components/ProjectComponents/ProjectCard'
import React from 'react'

const ProjectList = () => {
  return (
    <section
      id="projects"
      className="relative z-10 w-full"
    >
      <div className="container mx-auto px-2">
        <SectionHeading heading="Selected Projects." />
        {/* Iterates over the projects and renders a card for each one.  */}
        <div className="mt-16">
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}

export default ProjectList
