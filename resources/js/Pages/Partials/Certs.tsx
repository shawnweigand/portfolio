// Certs
import az900 from '/public/images/certs/az900.svg'
import hcta003 from '/public/images/certs/hcta003.png'

interface Cert {
    title: string,
    issuer: string,
    description: string,
    link: string,
    image: string,
    date: string,
}

export default function Certs() {

    const certs: Cert[] = [
        {
            title: "AZ-900: Azure Fundamentals",
            issuer: 'Microsoft',
            description: "Demonstrate foundational knowledge of cloud concepts, core Azure services, plus Azure management and governance features and tools.",
            link: "https://learn.microsoft.com/en-us/users/shawnweigand/credentials/4ecd2059aedeb6ea",
            image: az900,
            date: 'December 4, 2023',
        },
        {
            title: "Terraform Associate (003)",
            issuer: 'HashiCorp',
            description: "The Terraform Associate certification is for Cloud Engineers specializing in operations, IT, or development who know the basic concepts and skills associated with Terraform.",
            link: "https://www.credly.com/badges/445a79de-8bd8-4424-ac0a-9d9040790cf0",
            image: hcta003,
            date: 'February 12, 2024',
        },
    ]


    return (
        <section id="certs" className="py-20 px-4 md:px-16">
            <div className="mx-auto">
                <h2 className="text-[#2e250a] text-3xl font-bold text-center mb-16">Certifications</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 text-center">
                    {certs.map((cert: Cert, index: number) => (
                        <div key={index} className="flex-col p-4 w-full">
                            <a className='flex items-center justify-center mb-4' href={cert.link} target="_blank">
                                <img className='max-w-[180px] w-full h-auto' src={cert.image} alt={cert.title} />
                            </a>
                            <div className='flex flex-col justify-between flex-grow mb-4'>
                                <a target="_blank" href={cert.link} className="text-2xl font-bold">{cert.title}</a>
                                <p className='text-sm text-gray-500 mb-2'>Issued by: {cert.issuer}</p>
                                {cert.date && <p className='text-sm text-gray-500 mb-2'>{cert.date}</p>}
                                <p className='my-4'>{cert.description}</p>
                                {cert.link && <a target="_blank" href={cert.link} className="text-blue-500 hover:underline italic">{"Verify"}</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </section>
    )
}
