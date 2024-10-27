interface Project {
    title: string,
    description: string,
    github: string,
    link: string,
    image: string
}

export default function Projects() {

    const projects: Project[] = [
        {
            title: "Personal Portfolio",
            description: "personal portfolio page",
            github: "https://github.com/shawnweigand/portfolio",
            link: "https://shawnweigand.com",
            image: "shawnweigand.png"
        },
        {
            title: "test",
            description: "test",
            github: "https://github.com/shawnweigand/portfolio",
            link: "https://shawnweigand.com",
            image: "shawnweigand.png"
        }
    ]


    return (
        <section id="projects" className="py-20 px-4 md:px-16 bg-gray-100">
<div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                    <>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <a href={project.github} className="text-blue-500 underline">View on GitHub</a>
                        </div>
                        <div className="col-start-2 col-span-2 bg-white p-6 rounded-lg shadow-md">
                            <p>Put pic of project here</p>
                        </div>
                    </>
                    ))}
                </div>
            </div>
      </section>
    )
}
