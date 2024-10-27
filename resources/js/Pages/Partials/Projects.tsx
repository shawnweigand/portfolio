export default function Projects() {


    return (
        <section id="projects" className="py-20 px-4 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Project 1 */}
            <div>
                <h3 className="text-2xl font-bold mb-2">Personal Portfolio</h3>
                <p className="mb-4">A description of the project goes here. Highlight the tech stack, features, and what makes this project interesting.</p>
                <a href="https://github.com/your-github" className="text-blue-500 underline">View on GitHub</a>
            </div>
            <div className="col-start-2 col-span-2 bg-white p-6 rounded-lg shadow-md">
                <p>Put pic of project here</p>
            </div>

            {/* Add more project blocks similarly */}
          </div>
        </div>
      </section>
    )
}
