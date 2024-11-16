import React from 'react';

// Projects
import shawnweigand from '/public/images/projects/shawnweigand.png'
import devops from '/public/images/projects/devops.png'
// Tools
import ReactPic from '/public/images/tools/React.png'
import Laravel from '/public/images/tools/Laravel.png'
import Docker from '/public/images/tools/Docker.png'
import Kubernetes from '/public/images/tools/Kubernetes.png'
import Helm from '/public/images/tools/Helm.png'
import Tailwind from '/public/images/tools/Tailwind.png'
import Typescript from '/public/images/tools/Typescript.png'
import GitHub from '/public/images/tools/GitHub.png'

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
            description: "This portfolio site serves as both a showcase of my work and a hands-on project to deepen my skills in full-stack development. It allows me to practice deploying and managing full stack applications with a stateful frontend and API-powered backend on a personal cluster.",
            github: "https://github.com/shawnweigand/portfolio",
            link: "https://shawnweigand.com",
            image: shawnweigand,
            tools: [
                {
                    name: "React",
                    image: ReactPic
                },
                {
                    name: "Laravel",
                    image: Laravel
                },
                {
                    name: "Tailwind CSS",
                    image: Tailwind
                },
                {
                    name: "Typescript",
                    image: Typescript
                },
            ]
        },
        {
            title: "DevOps",
            description: "I developed a set of CI/CD pipeline templates in GitHub Actions that streamline the deployment process for various projects. These templates automate the building of Docker images, pushing them to a container repository, and deploying to Kubernetes clusters using Helm.",
            github: "https://github.com/shawnweigand/devops",
            link: "https://github.com/shawnweigand/devops",
            image: devops,
            tools: [
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
                },
                {
                    name: "GitHub Actions",
                    image: GitHub
                },
            ]
        },
        {
            title: "Coming soon...",
            description: "",
            github: "",
            link: "",
            image: "https://via.placeholder.com/300x200?text=More+Coming+Soon+...",
            tools: []
        }
    ]


    return (
        <section id="projects" className="py-20 px-4 md:px-16 bg-gray-100">
            <div className="mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                    {projects.map((project: Project, index: number) => (
                        <div key={index} className="flex-col p-4 bg-white w-full rounded-lg shadow-md">
                            <a className='flex items-center justify-center mb-4' href={project.link} target="_blank">
                                <img className='rounded w-full h-48 object-cover' src={project.image} alt={project.title} />
                            </a>
                            <div className='flex flex-col justify-between flex-grow mb-4'>
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                <a target="_blank" href={project.link} className="text-blue-500 hover:underline">{project.link}</a>
                                <p className='my-4'>{project.description}</p>
                                {project.link && <a target="_blank" href={project.github} className='text-blue-500 hover:underline'>View on GitHub</a>}
                            </div>
                            { project.tools.length > 0 &&
                            <>
                            <p className='italic text-gray-500'>What I used:</p>
                            <div className='flex flex-wrap justify-center border-dashed border-2 rounded'>
                                {project.tools.map((tool: Tool, toolIndex: number) => (
                                    <div key={toolIndex} className='grid place-items-center my-4'>
                                        <img src={tool.image} alt={tool.name} className='h-12 object-cover' />
                                        <div className={`px-4 py-2 mx-1`}>{tool.name}</div>
                                    </div>
                                ))}
                            </div>
                            </>}
                        </div>
                    ))}
                </div>
            </div>
      </section>
    )
}
