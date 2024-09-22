
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import profile from '/public/images/profile-pic.jpeg'

export default function Page() {


    return (
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
                    <p className="text-xl md:text-2xl mb-6">Web Dev, Cloud Engineer, DevSecOps</p>
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
                I'm a web developer specializing in building (and occasionally designing) exceptional digital experiences.
                Currently, I'm focused on developing responsive web applications using modern JavaScript frameworks like React and Next.js.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 px-4 md:px-16 bg-gray-200">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-4 bg-gray-400 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                  <p>React, Next.js, HTML, CSS, Tailwind, JavaScript</p>
                </div>
                <div className="p-4 bg-gray-400 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Backend</h3>
                  <p>Node.js, Express, PHP, Laravel</p>
                </div>
                <div className="p-4 bg-gray-400 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Cloud/DevOps</h3>
                  <p>Azure, Docker, Kubernetes, Terraform</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-4 md:px-16 bg-gray-800">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-2">Project 1</h3>
                  <p className="mb-4">A description of the project goes here. Highlight the tech stack, features, and what makes this project interesting.</p>
                  <a href="https://github.com/your-github" className="text-blue-500 underline">View on GitHub</a>
                </div>

                {/* Add more project blocks similarly */}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 md:px-16 bg-gray-900">
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
          <footer className="py-6 bg-gray-800 text-center">
            <p>&copy; 2024 [Your Name]. All rights reserved.</p>
          </footer>
        </div>
    );
}
