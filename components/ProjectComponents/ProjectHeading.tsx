const ProjectHeading = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-2xl font-semibold text-grey max-w-prose break-words">
        {description}
      </p>
    </div>
  )
}

export default ProjectHeading