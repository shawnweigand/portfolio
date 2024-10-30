// Projects
import shawnweigand from '/public/images/projects/shawnweigand.png'
// Tools
import React from '/public/images/tools/React.png'
import Laravel from '/public/images/tools/Laravel.png'
import Docker from '/public/images/tools/Docker.png'
import Kubernetes from '/public/images/tools/Kubernetes.png'
import Helm from '/public/images/tools/Helm.png'

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
                    image: React
                },
                {
                    name: "Laravel",
                    image: Laravel
                },
                {
                    name: "Docker",
                    image: Docker
                },
                {
                    name: "Kubernetes",
                    image: Kubernetes
                },
                {
                    name: "Helm",
                    image: Helm
                }
            ]
        }
    ]


    return (
        <section id="projects" className="py-20 px-4 md:px-16 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-3 gap-10 ">
                    {projects.map((project, index) => (
                    <>
                    {index % 2 == 0 ?
                    <>
                        <div className="my-4">
                            <h3 className="col-start-1 col-span-1 text-2xl font-bold mb-1">{project.title}</h3>
                            <a target="_blank" href={project.link} className="text-blue-500 hover:underline">{project.link}</a>
                            <p className='my-4'>{project.description}</p>
                            <div className="grid grid-cols-4 place-items-center gap-8 my-8">
                                {project.tools.map((tool, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <img src={tool.image} alt={tool.name} className='h-16 object-cover' />
                                        <p className='mt-1 text-center'>{tool.name}</p>
                                    </div>
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
                            <p className='my-4'>{project.description}</p>
                            <a target="_blank" href={project.link} className="text-blue-500 hover:underline">{project.link}</a>
                            <div className="grid grid-cols-4 place-items-center gap-8 my-8">
                                {project.tools.map((tool, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <img src={tool.image} alt={tool.name} className='h-16 object-cover' />
                                        <p className='mt-1 text-center'>{tool.name}</p>
                                    </div>
                                ))}
                            </div>
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
