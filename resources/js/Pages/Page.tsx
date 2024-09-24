
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
                    <p className="text-xl md:text-2xl mb-3">Web Developer, Cloud Engineer, DevSecOps</p>
                    <div className='flex'>
                        <MapPinIcon className='text-blue-600 w-12 h-12 mb-8'/>
                        <p className='text-lg md:text-xl mt-3 ml-2'>Brooklyn, NY</p>
                    </div>
                    <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition">
                    View My Work
                    </a>
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
