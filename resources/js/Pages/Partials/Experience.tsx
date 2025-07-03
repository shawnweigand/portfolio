import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDownIcon, MapPinIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid"

interface Experience {
    dates: string;
    title: string;
    company: string;
    location: string;
    projects: {
        title: string;
        tools: string;
        description: string;
        contributions: string;
        impact: string;
    }[];
}

export default function Experience() {

    const experiences: Experience[] = [
        {
            dates: "Mar 2025 - Present",
            title: "Cloud Engineer",
            company: "Lazard",
            location: "New York, New York",
            // Need to refine both projects
            projects: [
                {
                    title: "Shared Kubernetes Cluster",
                    tools: "Kubernetes, Terraform, Azure",
                    description: "Kubernetes cluster shared across multiple teams to host applications and services while minimizing cost and resource usage.",
                    contributions: "Architected a cluster security framework with namespace isolation, resource quotas, access control, SSL certificate vault syncing (secret store CSI), private IPs, and pod workload identities. CNI Overlay and NGINX ingress controller are leveraged for efficient network usage. Secret Store CSI.",
                    impact: "Cost reduction through sharing compute resources across multiple teams while maintaining networking efficiency and robust security."
                    // future: network policies, montoring, logging, autoscaling, cost back separation
                },
                {
                    title: "Terraform Module Validation and Standardization",
                    tools: "Terraform, GitLab CI/CD",
                    description: "Configure terraform modules to validate function with the latest azurerm provider while standardizing their structures.",
                    contributions: "50 modules successfully validated and integrated into their worskpace. Implemented unit testing and validation blocks in a CI pipeline to shift left future module validation.",
                    impact: "Prevents future issues with module usage and enabled the latest features offered by Azure."
                },
                /*
                {
                    title: "Azure OpenAI Cloud Agent",
                    tools: "Azure OpenAI, Azure OpenAI Assistants, Azure AI Search, Python LangChain",
                    description: "An AI agent that assists engineers with company-specific cloud tasks. Capabilities include referencing internal Confluence documentation, reading internal Digicert certificates, and reading existing infrastructure and costs from Azure.",
                    contributions: "Developed the Langchain ingestion, chunking, AI Search storage for Confluence documentation. Built all tools for the agent to use and the python CLI application to chat with the agent.",
                    impact: "Began the AI transformation for the cloud team, enabled ease of access to internal cloud documentation and data."
                }
                */
            ]
        },
        {
            dates: "Jul 2021 - Mar 2025",
            title: "Senior Full-Stack Engineer, Cloud Platforms",
            company: "The Estée Lauder Companies",
            location: "Long Island City, New York",
            projects: [
                {
                    title: "DNS Entry Pipeline",
                    tools: "DNS, Kerberos, Node.js, Azure DevOps",
                    description: "Pipeline automation to authenticate a service account with DNS servers and automatically create A records to point domains to cloud services.",
                    contributions: "Pipeline development, script writing, DNS entry creation/deletion/validation, and Kerberos authentication for the service account.",
                    impact: "Allows the cloud team to deploy standard DNS entries for cloud services, saving 2-3 days per request on waiting time."
                },
                {
                    title: "Kubernetes Backup Infrastructure and Automation",
                    tools: "Kubernetes, AKS Backup Vault, Terraform, Bicep, Azure DevOps, Powershell, Bash",
                    description: "Automated backup and restore process for all new and existing Kubernetes clusters to ensure data integrity and disaster recovery.",
                    contributions: "Deployed the backup vaults and policies per subscription, with Terraform automation to apply the backup extensions for new clusters and an Azure DevOps/Bicep automation to apply the backup extensions to existing clusters.",
                    impact: "Enabled backups for all clusters in the environment, ensuring data integrity and disaster recovery for around 100 clusters."
                },
                {
                    title: "Kubernetes Version Upgrade Automation",
                    tools: "Kubernetes, Azure DevOps, Powershell, Bash",
                    description: "An automated end-to-end kubernetes version upgrade process to ensure security, reliability, scalability and minimal downtime.",
                    contributions: "Architected backups, pre- and post-upgrade snapshots, version and image availability checks, manual and maintenance window gates, IP availability checks, node pool scaling and upgrading, and control plane upgrading.",
                    impact: "Enabled upgrades of 100+ clusters over 5 major versions to the latest supported, significantly cutting upgrade times."
                },
                {
                    title: "Cloud Infrastructure Deployment Portal",
                    tools: "React, Typescript, PHP Laravel, MySQL, Redis, Terraform",
                    description: "Developed an internal developer portal to intake user infrastructure requests and generate Terraform code for deployment.",
                    contributions: "Streamlined cloud intake with a dynamic form for users to request infrastructure and engineers to add additional specifications.",
                    impact: "Used to deploy 95% of Azure infrastructure with enhanced version control, repeatability, speed, and compliance. Leads to potential time savings of 3 days per request and 113 additional fulfillments annually."
                },
                {
                    title: "GitOps and CI/CD DevOps Pipelines",
                    tools: "Azure, Kubernetes, Helm, Docker, Azure DevOps, Ansible, Terraform",
                    description: "Full infrastructure-as-code and application deployments for containerized microservice architectures.",
                    contributions: "Enforced security practices with code/image scanning, IP authorization, secret management, and backups.",
                    impact: "Allowed for more frequent deployments and 3x faster time to deploy."
                },
                {
                    title: "Cloud Infrastructure AI Chatbot",
                    tools: "Azure OpenAI, Azure Function Apps, Python LangChain, React, Typescript, PHP Laravel, PostgreSQL",
                    description: "An AI chatbot leveraging semantic search and tool calling to assist engineers with company-specific cloud tasks. Capabilities include referencing internal Confluence/Sharepoint documentation, making private external Bing searches, reading/writing to Jira tickets, reading existing infrastructure from Azure, and summarizing Teams meeting transcsriptions into Confluence documentation.",
                    contributions: "Developed the Langchain ingestion and chunking for Confluence documentation, and the capability to transform Teams transcriptions into Confluence documentation.",
                    impact: "Began the AI transformation for IT, enabled ease of access to internal cloud documentation, and allowed for an increase in documentation for core cloud processes."
                },
                {
                    title: "Kubernetes Helm Templates",
                    tools: "Kubernetes, Helm",
                    description: "Templatized vault secret syncing and configmap environment variables for helm deployments.",
                    contributions: "Permitted syncing SSL certificates from auto-renewal vault with single-secret scoping for least privilege access.",
                    impact: "Cut certificate expiration outages to zero for 10+ teams who have implemented for their kubernetes ingress."
                },
                {
                    title: "Site Reliability Engineering Operations Portal",
                    tools: "React, Typescript, PHP, Laravel, MySQL, Redis, Bicep",
                    description: "Engineering an developer portal used to automate infrastructure maintenance operations.",
                    contributions: "Led a successful intern project to develop the infra-as-code automation.\nExecuted features for single sign-on integration, automated SSL certificate renewal utilizing websockets, and the ability to add manageable application gateways with customized configuration validations.",
                    impact: "SSL certificate renewals are automated for 50% of teams, eliminating manual work with applying those certificates to their Kubernetes and Application Gateways infrastrucutures."
                }
            ]
        },
        {
            dates: "Jul 2022 - Feb 2023",
            title: "Technical Manager",
            company: "The Estée Lauder Companies",
            location: "Kuala Lumpur, Malaysia",
            projects: [
                {
                    title: "Kuala Lumpur IT Hiring Automation",
                    tools: "Node.js, Azure DevOps Pipelines, Azure Logic Apps, Jira",
                    description: "Fully-automated candidate intake, scheduler, feedback, and monitoring HR system.",
                    contributions: "Developed the implementation plan, deployed the infrastructure, and wrote the automation scripts to reach all stakeholders in the hiring process.",
                    impact: "Reduced time to hire over 40 technical positions by 40% and assisted in spearheading the newest global technology center."
                },
                {
                    title: "Kuala Lumpur Global Technology Center",
                    tools: "",
                    description: "The newest global technology center for The Estée Lauder Companies, supporting Asia Pacific operations.",
                    contributions: "Interviewed and hired for over 40 full time positions and spearheaded over 10 programs to set up the new center.",
                    impact: "Support for APAC operations with 40 full time employees in all sectors of IT."
                }
            ]
        }
    ]

    return (
        <section id="experience" className="py-20 px-4 md:px-16">
            <h2 className="text-[#2e250a] text-3xl font-bold text-center mb-16">My Experience</h2>
            <div className="flex justify-center text-[#2e250a]">
                <div className="flex flex-col w-full">
                    {experiences.map((job, index) => (
                        <div className="relative grid grid-cols-9 h-full" key={index}>
                            <div className="col-span-3 text-right">
                                <p className="italic text-xl text-gray-600">{job.dates}</p>
                            </div>
                            <div className="col-span-1 flex justify-center relative">
                                <span className="absolute w-5 h-5 bg-[#799B62] rounded-full border-4 border-[#EFEFEF]" />
                                <div className={`w-1 h-full ${index !== experiences.length - 1 ? "bg-[#799B62]" : ""}`} />
                            </div>
                            <Disclosure as="div" className={`col-span-3 ${index !== experiences.length - 1 ? "mb-12" : ""}`} key="job1">
                                <DisclosureButton key="job1" className="mb-6 group flex w-full items-center justify-between hover:text-[#AE8157]">
                                    <div className="flex flex-col justify-start text-left">
                                        <p className="font-bold text-xl leading-none mb-2">{job.title}</p>
                                        <p className="italic text-md leading-none mb-2">{job.company}</p>
                                        <div className="flex">
                                            <MapPinIcon className="size-5 mr-2" />
                                            <p>{job.location}</p>
                                        </div>
                                    </div>
                                    <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-4 text-sm/5 flex flex-col space-y-3">
                                    {job.projects.map((project, projectIndex) => (
                                        <Disclosure as="div" className="">
                                            {({open}) => ( <>
                                            <DisclosureButton className="group flex items-center justify-between">
                                                <div className="flex space-x-4 text-left">
                                                    {!open ? <PlusIcon className="size-5" /> : <MinusIcon className="size-5" />}
                                                    <div className="mb-4">
                                                        <p className="font-bold text-lg leading-none mb-1 hover:underline">{project.title}</p>
                                                        {project.tools && <p className="italic text-sm text-gray-600">{project.tools}</p>}
                                                    </div>
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel className="ml-7 mb-3">
                                                <div className="flex flex-col space-y-3">
                                                    <div className="ml-2 text-sm text-gray-600">
                                                        <p className="font-bold italic">What is it?</p>
                                                        <p>{project.description}</p>
                                                    </div>
                                                    <div className="ml-2 text-sm text-gray-600">
                                                        <p className="font-bold italic">What did I contribute?</p>
                                                        <p>{project.contributions}</p>
                                                    </div>
                                                    <div className="ml-2 text-sm text-gray-600">
                                                        <p className="font-bold italic">What was the impact?</p>
                                                        <p>{project.impact}</p>
                                                    </div>
                                                </div>
                                            </DisclosurePanel>
                                            </> )}
                                        </Disclosure>
                                    ))}
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )

}
