import shawnweigand from '/public/images/projects/shawnweigand.png';

interface Tool {
    name: string
    image: string
}
interface Project {
    title: string,
    description: string,
    github: string,
    link: string,
    image: string,
    tools: Tool[]
}

export default function Projects() {

    const projects: Project[] = [
        {
            title: "Personal Portfolio",
            description: "personal portfolio page",
            github: "https://github.com/shawnweigand/portfolio",
            link: "https://shawnweigand.com",
            image: shawnweigand,
            tools: [
                {
                    name: "React",
                    image: "React"
                },
                {
                    name: "Laravel",
                    image: "Laravel"
                }
            ]
        },
        {
            title: "test",
            description: "test",
            github: "https://github.com/shawnweigand/portfolio",
            link: "https://google.com",
            image: shawnweigand,
            tools: [
                {
                    name: "React",
                    image: "React"
                }
            ]
        }
    ]


    return (
        <section id="projects" className="py-20 px-4 md:px-16 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                    <>
                    {index % 2 == 0 ?
                    <>
                        <div className="my-4">
                            <h3 className="col-start-1 col-span-1 text-2xl font-bold mb-1">{project.title}</h3>
                            <a target="_blank" href={project.link} className="text-blue-500 hover:underline">{project.link}</a>
                            <div className="flex">
                                {project.tools.map((tool, index) => (
                                    <p className='m-3'>{tool.name}</p>
                                ))}
                            </div>
                            <a target="_blank" href={project.github} className="text-blue-500 hover:underline">View on GitHub</a>
                        </div>
                        <div className="my-4 col-start-2 col-span-2 bg-white p-6 rounded-lg shadow-md">
                            <a href={project.link} target="_blank"><img src={project.image} alt={project.title} /></a>
                        </div>
                    </>
                    :
                    <>
                         <div className="my-4 col-start-1 col-span-2 bg-white p-6 rounded-lg shadow-md">
                            <a href={project.link} target="_blank"><img src={project.image} alt={project.title} /></a>
                        </div>
                        <div className="my-4">
                            <h3 className="col-start-3 col-span-1 text-2xl font-bold mb-1">{project.title}</h3>
                            <a target="_blank" href={project.link} className="text-blue-500 hover:underline">{project.link}</a>
                            <p className="my-4">{project.description}</p>
                            <a target="_blank" href={project.github} className="text-blue-500 hover:underline">View on GitHub</a>
                        </div>
                    </>
                    }
                    </>
                    ))}
                </div>
            </div>
      </section>
    )
}
