interface Skill {
    name: string
    skills: string[]
}

export default function Skills() {

    const skills: Skill[] = [
        {
            name: "Cloud",
            skills: [
                "Azure",
                "Kubernetes",
                "Terraform",
                "Ansible",
                "Azure AI Services",
            ]
        },
        {
            name: "DevOps",
            skills: [
                "Azure DevOps",
                "GitHub Actions",
                "GitLab CI/CD",
                "Docker",
                "Helm",
                "Bash",
                "Powershell",
            ]
        },
        {
            name: "Development",
            skills: [
                "React",
                "Typescript",
                "JavaScript",
                "Tailwind CSS",
                "PHP",
                "Laravel",
                "Python",
                "Node.js",
            ]
        }
    ]

    return (
          <section id="skills" className="py-20 px-4 md:px-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl text-[#2e250a] font-bold text-center mb-8">Skills</h2>
              <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                {/* Skill one */}
                <h3 className="text-xl font-semibold mb-4">{skills[0].name}</h3>
                <div className='flex flex-wrap justify-center'>
                    {skills[0].skills.map((value: string) => (
                        <div key={value} className={`text-white bg-[#799B62] rounded-full px-4 py-2 mx-1 mb-2`}>{value}</div>
                    ))}
                </div>
                </div>
                <div className="p-4">
                {/* Skill two */}
                <h3 className="text-xl font-semibold mb-4">{skills[1].name}</h3>
                <div className='flex flex-wrap justify-center'>
                    {skills[1].skills.map((value: string) => (
                        <div key={value} className={`text-white bg-[#B79065] rounded-full px-4 py-2 mx-1 mb-2`}>{value}</div>
                    ))}
                </div>
                </div>
                <div className="p-4">
                {/* Skill three */}
                <h3 className="text-xl font-semibold mb-4">{skills[2].name}</h3>
                <div className='flex flex-wrap justify-center'>
                    {skills[2].skills.map((value: string) => (
                        <div key={value} className={`text-white bg-[#2e250a] rounded-full px-4 py-2 mx-1 mb-2`}>{value}</div>
                    ))}
                </div>
                </div>
              </div>
            </div>
          </section>
    )
}
