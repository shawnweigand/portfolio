
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import profile from '/public/images/profile-pic.jpeg'
import { MapPinIcon } from '@heroicons/react/24/solid'; // or solid for filled icons

interface Skill {
    name: string
    color: string
    skills: string[]
}

export default function Page() {

    const skills: Skill[] = [
        {
            name: "Frontend",
            color: "red",
            skills: [
                        "React",
                        "Next.js",
                        "HTML",
                        "CSS",
                        "Tailwind",
                        "JavaScript"
                    ],
        },
        {
            name: "Backend",
            color: "blue",
            skills: [
                        "Node.js",
                        "Express",
                        "PHP",
                        "Laravel",
                    ],
        },
        {
            name: "Cloud/DevOps",
            color: "yellow",
            skills: [
                        "Azure",
                        "Docker",
                        "Kubernetes",
                        "Terraform",
                    ],
        }

    ]

    return (
        <>
        <Head title='Portfolio' />
        <div className="min-h-screen bg-white text-gray-900">
          {/* Hero Section */}
          <header className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}>
            <div className="flex flex-col items-center md:flex-row md:space-x-8">
                {/* Profile Picture */}
                <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg">
                    <img
                    src={profile}
                    alt="Shawn Weigand"
                    className="w-full h-full translate-x-[-15%] translate-y-[-5%] object-top object-cover transform scale-150"
                    />
                </div>

                {/* Introduction Text */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Shawn</h1>
                    <p className="text-xl md:text-2xl mb-3">Web Developer, Cloud Engineer, DevOps</p>
                    <div className='flex'>
                        <MapPinIcon className='text-blue-600 w-12 h-12 mb-8'/>
                        <p className='text-lg md:text-xl mt-3 ml-2'>Brooklyn, NY</p>
                    </div>
                    <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition">
                    View My Work
                    </a>
                    {/* Socials */}
                    <div className="mt-10 grid grid-cols-6 gap-2" >
                    <a href="https://github.com/shawnweigand" target="_blank" className="block col-span-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-500 hover:opacity-75 transition-opacity duration-200">
                            <path fill-rule="evenodd" d="M12 1.75a10.25 10.25 0 00-3.24 19.96c.51.09.7-.22.7-.48v-1.68c-2.89.63-3.5-1.4-3.5-1.4-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.63.07-.63 1.04.08 1.6 1.07 1.6 1.07.92 1.58 2.42 1.12 3.01.85.09-.67.36-1.12.65-1.38-2.31-.26-4.75-1.15-4.75-5.12 0-1.13.4-2.05 1.07-2.78-.11-.26-.46-1.28.1-2.67 0 0 .87-.28 2.85 1.06a9.88 9.88 0 015.19 0c1.98-1.34 2.85-1.06 2.85-1.06.56 1.39.21 2.41.1 2.67.67.73 1.07 1.65 1.07 2.78 0 3.99-2.45 4.86-4.78 5.11.37.32.7.94.7 1.89v2.8c0 .27.18.58.7.48A10.25 10.25 0 0012 1.75z" clip-rule="evenodd"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/shawn-weigand/" target="_blank" className="block col-span-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-blue-500 hover:opacity-75 transition-opacity duration-200">
                            <path d="M22.225 0H1.775C.795 0 0 .785 0 1.75v20.5C0 23.215.795 24 1.775 24h20.45C23.205 24 24 23.215 24 22.25V1.75C24 .785 23.205 0 22.225 0zm-15.5 20.452H4.125V9h3.6v11.452zm-1.8-13.16a2.075 2.075 0 110-4.15 2.075 2.075 0 010 4.15zm16.275 13.16h-3.6v-5.69c0-1.353-.024-3.09-1.885-3.09-1.887 0-2.173 1.475-2.173 3v5.78h-3.6V9h3.47v1.54h.05c.489-.92 1.69-1.88 3.47-1.88 3.734 0 4.42 2.447 4.42 5.63v6.24z"/>
                        </svg>
                    </a>
                    <a href="https://medium.com/@weigandshawn" target="_blank" className="block col-span-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-blue-500 hover:opacity-75 transition-opacity duration-200">
                            <path d="m24 24h-24v-24h24zm-8.986-15.006v7.326c0 .198 0 .234-.127.362l-1.302 1.264v.27h6.32v-.27l-1.257-1.234c-.091-.07-.148-.178-.148-.3 0-.022.002-.043.005-.064v.002-9.07c-.003-.019-.005-.04-.005-.062 0-.121.058-.229.148-.298l.001-.001 1.286-1.234v-.27h-4.456l-3.176 7.924-3.609-7.924h-4.675v.271l1.502 1.813c.127.115.207.281.207.466 0 .022-.001.043-.003.064v-.003 7.126c.007.041.011.088.011.136 0 .222-.088.423-.231.571l-1.69 2.054v.27h4.8v-.27l-1.691-2.054c-.149-.154-.241-.363-.241-.595 0-.04.003-.079.008-.117v.004-6.16l4.215 9.195h.49z"/>
                        </svg>
                    </a>
                    <a href="https://x.com/theshawnshop" target="_blank" className="block col-span-1 mt-1">
                        <svg width="40" height="40" viewBox="0 0 357 322" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 hover:opacity-75 transition-opacity duration-200">
                            <path d="M281.026 0.125H335.608L216.362 136.415L356.645 321.875H246.805L160.774 209.394L62.335 321.875H7.71996L135.265 176.097L0.690964 0.125H113.32L191.084 102.936L281.026 0.125ZM261.869 289.205H292.114L96.886 31.079H64.4305L261.869 289.205Z" fill="#3B82F6"/>
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
        </header>

          {/* About Section */}
          <section id="about" className="py-20 px-4 md:px-16 bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
              <p className="text-lg leading-relaxed text-center">
              I'm a Full Stack Engineer working in the Cloud and DevOps spaces with experience in building scalable, secure applications and automating infrastructure.
              I specialize in developing cloud-native solutions using React, PHP, Terraform, Kubernetes, and Azure DevOps.
              Passionate about optimizing systems and integrating DevSecOps practices, I thrive at the intersection of development and operations to deliver reliable, high-performing software.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 px-4 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
              <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                {/* Skill one */}
                <h3 className="text-xl font-semibold mb-4">{skills[0].name}</h3>
                <div className='flex flex-wrap justify-center'>
                    {skills[0].skills.map((value: string) => (
                        <div className={`text-white bg-red-600 rounded-full px-4 py-2 mx-1 mb-2`}>{value}</div>
                    ))}
                </div>
                </div>
                <div className="p-4">
                {/* Skill two */}
                <h3 className="text-xl font-semibold mb-4">{skills[1].name}</h3>
                <div className='flex flex-wrap justify-center'>
                    {skills[1].skills.map((value: string) => (
                        <div className={`text-white bg-blue-600 rounded-full px-4 py-2 mx-1 mb-2`}>{value}</div>
                    ))}
                </div>
                </div>
                <div className="p-4">
                {/* Skill three */}
                <h3 className="text-xl font-semibold mb-4">{skills[2].name}</h3>
                <div className='flex flex-wrap justify-center'>
                    {skills[2].skills.map((value: string) => (
                        <div className={`text-white bg-yellow-600 rounded-full px-4 py-2 mx-1 mb-2`}>{value}</div>
                    ))}
                </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-4 md:px-16 bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-2">Project 1</h3>
                  <p className="mb-4">A description of the project goes here. Highlight the tech stack, features, and what makes this project interesting.</p>
                  <a href="https://github.com/your-github" className="text-blue-500 underline">View on GitHub</a>
                </div>

                {/* Add more project blocks similarly */}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
              <p className="text-lg leading-relaxed text-center mb-8">
                I'm always open to new opportunities and collaborations. Feel free to reach out to me for any inquiries, projects, or just to say hello!
              </p>
              <div className="flex justify-center">
                <a href="mailto:your.email@example.com" className="px-8 py-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition">Contact Me</a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 bg-gray-100 text-center">
            <p>&copy; 2024 Shawn Weigand. All rights reserved.</p>
          </footer>
        </div>
        </>
    );
}
