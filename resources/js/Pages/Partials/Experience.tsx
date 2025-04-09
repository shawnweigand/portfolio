import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDownIcon, MapPinIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid"

export default function Experience() {

    return (
        <section id="experience" className="py-20 px-4 md:px-16">
            <h2 className="text-[#2e250a] text-3xl font-bold text-center mb-16">My Experience</h2>
            <div className="flex justify-center text-[#2e250a]">
                <div className="flex flex-col w-full">
                <div className="relative grid grid-cols-9 h-full">
                        <div className="col-span-3 text-right">
                            <p className="italic text-xl text-gray-600">Mar 2025 - Present</p>
                        </div>
                        <div className="col-span-1 flex justify-center relative">
                            <span className="absolute w-5 h-5 bg-[#799B62] rounded-full border-4 border-[#EFEFEF]" />
                            <div className="w-1 h-full bg-[#799B62]" />
                        </div>
                        {/* Job 1 */}
                        <Disclosure as="div" className="col-span-3 mb-12" key="job1">
                            <DisclosureButton key="job1" className="mb-6 group flex w-full items-center justify-between hover:text-[#AE8157]">
                                <div className="flex flex-col justify-start text-left">
                                    <p className="font-bold text-xl leading-none mb-2">Cloud Engineer</p>
                                    <p className="italic text-md leading-none mb-2">Lazard</p>
                                    <div className="flex">
                                        <MapPinIcon className="size-5 mr-2" />
                                        <p>New York, New York</p>
                                    </div>
                                </div>
                                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-4 text-sm/5 flex flex-col space-y-3">
                                {/* Project 1 */}
                                {/* <Disclosure as="div" className="">
                                    {({open}) => ( <>
                                    <DisclosureButton className="group flex items-center justify-between">
                                        <div className="flex space-x-4 text-left">
                                            {!open ? <PlusIcon className="size-5" /> : <MinusIcon className="size-5" />}
                                            <div className="mb-4">
                                                <p className="font-bold text-lg leading-none mb-1 hover:underline">DNS Entry Pipeline</p>
                                                <p className="italic text-sm text-gray-600">Tools: DNS, Kerberos, Node.js, Azure DevOps</p>
                                            </div>
                                        </div>
                                    </DisclosureButton>
                                    <DisclosurePanel className="ml-7 mb-3">
                                        <div className="flex flex-col space-y-3">
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What is it?</p>
                                                <p>Pipeline automation to authenticate a service account with DNS servers and automatically create A records to point domains to cloud services.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What did I contribute?</p>
                                                <p>Pipeline development, script writing, DNS entry creation/deletion/validation, and Kerberos authentication for the service account.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What was the impact?</p>
                                                <p>Allows the cloud team to deploy standard DNS entries for cloud services, saving 2-3 days per request on waiting time.</p>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                    </> )}
                                </Disclosure> */}
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                    <div className="relative grid grid-cols-9 h-full">
                        <div className="col-span-3 text-right">
                            <p className="italic text-xl text-gray-600">Jul 2021 - Mar 2025</p>
                        </div>
                        <div className="col-span-1 flex justify-center relative">
                            <span className="absolute w-5 h-5 bg-[#799B62] rounded-full border-4 border-[#EFEFEF]" />
                            <div className="w-1 h-full bg-[#799B62]" />
                        </div>
                        {/* Job 2 */}
                        <Disclosure as="div" className="col-span-3 mb-12" key="job1">
                            <DisclosureButton key="job1" className="mb-6 group flex w-full items-center justify-between hover:text-[#AE8157]">
                                <div className="flex flex-col justify-start text-left">
                                    <p className="font-bold text-xl leading-none mb-2">Senior Full-Stack Engineer, Cloud Platforms</p>
                                    <p className="italic text-md leading-none mb-2">The Estée Lauder Companies</p>
                                    <div className="flex">
                                        <MapPinIcon className="size-5 mr-2" />
                                        <p>Long Island City, New York</p>
                                    </div>
                                </div>
                                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-4 text-sm/5 flex flex-col space-y-3">
                                {/* Project 0 */}
                                <Disclosure as="div" className="">
                                    {({open}) => ( <>
                                    <DisclosureButton className="group flex items-center justify-between">
                                        <div className="flex space-x-4 text-left">
                                            {!open ? <PlusIcon className="size-5" /> : <MinusIcon className="size-5" />}
                                            <div className="mb-4">
                                                <p className="font-bold text-lg leading-none mb-1 hover:underline">DNS Entry Pipeline</p>
                                                <p className="italic text-sm text-gray-600">Tools: DNS, Kerberos, Node.js, Azure DevOps</p>
                                            </div>
                                        </div>
                                    </DisclosureButton>
                                    <DisclosurePanel className="ml-7 mb-3">
                                        <div className="flex flex-col space-y-3">
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What is it?</p>
                                                <p>Pipeline automation to authenticate a service account with DNS servers and automatically create A records to point domains to cloud services.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What did I contribute?</p>
                                                <p>Pipeline development, script writing, DNS entry creation/deletion/validation, and Kerberos authentication for the service account.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What was the impact?</p>
                                                <p>Allows the cloud team to deploy standard DNS entries for cloud services, saving 2-3 days per request on waiting time.</p>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                    </> )}
                                </Disclosure>
                                {/* Project 1 */}
                                <Disclosure as="div" className="">
                                    {({open}) => ( <>
                                    <DisclosureButton className="group flex items-center justify-between">
                                        <div className="flex space-x-4 text-left">
                                            {!open ? <PlusIcon className="size-5" /> : <MinusIcon className="size-5" />}
                                            <div className="mb-4">
                                                <p className="font-bold text-lg leading-none mb-1 hover:underline">Kubernetes Version Upgrade Automation</p>
                                                <p className="italic text-sm text-gray-600">Tools: Kubernetes, Azure DevOps, Powershell, Bash</p>
                                            </div>
                                        </div>
                                    </DisclosureButton>
                                    <DisclosurePanel className="ml-7 mb-3">
                                        <div className="flex flex-col space-y-3">
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What is it?</p>
                                                <p>An automated end-to-end kubernetes version upgrade process to ensure security, reliability, scalability and minimal downtime.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What did I contribute?</p>
                                                <p>Architected backups, pre- and post-upgrade snapshots, version and image availability checks, manual and maintenance window gates, IP availability checks, node pool scaling and upgrading, and control plane upgrading.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What was the impact?</p>
                                                <p>Enabled upgrades of 100+ clusters over 5 major versions to the latest supported, significantly cutting upgrade times.</p>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                    </> )}
                                </Disclosure>
                                {/* Project 2 */}
                                <Disclosure as="div" className="">
                                    {({open}) => ( <>
                                    <DisclosureButton className="group flex items-center justify-between">
                                        <div className="flex space-x-4 text-left">
                                            {!open ? <PlusIcon className="size-5" /> : <MinusIcon className="size-5" />}
                                            <div className="mb-4">
                                                <p className="font-bold text-lg leading-none mb-1 hover:underline">Cloud Infrastructure Deployment Portal</p>
                                                <p className="italic text-sm text-gray-600">Tools: React, Typescript, PHP, Laravel, MySQL, Redis, Terraform</p>
                                            </div>
                                        </div>
                                    </DisclosureButton>
                                    <DisclosurePanel className="ml-7 mb-3">
                                        <div className="flex flex-col space-y-3">
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What is it?</p>
                                                <p>Developed an internal developer portal to intake user infrastructure requests and generate Terraform code for deployment.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What did I contribute?</p>
                                                <p>Streamlined cloud intake with a dynamic form for users to request infrastructure and engineers to add additional specifications.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What was the impact?</p>
                                                <p>Used to deploy 95% of Azure infrastructure with enhanced version control, repeatability, speed, and compliance.</p>
                                                <p>Leads to potential time savings of 3 days per request and 113 additional fulfillments annually</p>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                    </> )}
                                </Disclosure>
                                {/* Project 3 */}
                                <Disclosure as="div" className="">
                                    {({open}) => ( <>
                                    <DisclosureButton className="group flex items-center justify-between">
                                        <div className="flex space-x-4 text-left">
                                            {!open ? <PlusIcon className="size-5" /> : <MinusIcon className="size-5" />}
                                            <div className="mb-4">
                                                <p className="font-bold text-lg leading-none mb-1 hover:underline">GitOps and CI/CD DevOps Pipelines</p>
                                                <p className="italic text-sm text-gray-600">Tools: Azure, Kubernetes, Helm, Docker, Azure DevOps, Ansible, Terraform</p>
                                            </div>
                                        </div>
                                    </DisclosureButton>
                                    <DisclosurePanel className="ml-7 mb-3">
                                        <div className="flex flex-col space-y-3">
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What is it?</p>
                                                <p>Full infrastructure-as-code and application deployments for containerized microservice architectures.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What did I contribute?</p>
                                                <p>Enforced security practices with code/image scanning, IP authorization, secret management, and backups.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What was the impact?</p>
                                                <p>Allowed for more frequent deployments and 3x faster time to deploy.</p>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                    </> )}
                                </Disclosure>
                                {/* Project 4 */}
                                <Disclosure as="div" className="">
                                    {({open}) => ( <>
                                    <DisclosureButton className="group flex items-center justify-between">
                                        <div className="flex space-x-4 text-left">
                                            {!open ? <PlusIcon className="size-5" /> : <MinusIcon className="size-5" />}
                                            <div className="mb-4">
                                                <p className="font-bold text-lg leading-none mb-1 hover:underline">Kubernetes Helm Templates</p>
                                                <p className="italic text-sm text-gray-600">Tools: Kubernetes, Helm</p>
                                            </div>
                                        </div>
                                    </DisclosureButton>
                                    <DisclosurePanel className="ml-7 mb-3">
                                        <div className="flex flex-col space-y-3">
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What is it?</p>
                                                <p>Templatized vault secret syncing and configmap environment variables for helm deployments.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What did I contribute?</p>
                                                <p>Permitted syncing SSL certificates from auto-renewal vault with single-secret scoping for least privilege access.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What was the impact?</p>
                                                <p>Cut certificate expiration outages to zero for 10+ teams who have implemented for their kubernetes ingress.</p>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                    </> )}
                                </Disclosure>
                                {/* Project 5 */}
                                <Disclosure as="div" className="">
                                    {({open}) => ( <>
                                    <DisclosureButton className="group flex items-center justify-between">
                                        <div className="flex space-x-4 text-left">
                                            {!open ? <PlusIcon className="size-5" /> : <MinusIcon className="size-5" />}
                                            <div className="mb-4">
                                                <p className="font-bold text-lg leading-none mb-1 hover:underline">Site Reliability Engineering Operations Portal</p>
                                                <p className="italic text-sm text-gray-600">Tools: React, Typescript, PHP, Laravel, MySQL, Redis, Bicep</p>
                                            </div>
                                        </div>
                                    </DisclosureButton>
                                    <DisclosurePanel className="ml-7 mb-3">
                                        <div className="flex flex-col space-y-3">
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What is it?</p>
                                                <p>Engineering an developer portal used to automate infrastructure maintenance operations.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What did I contribute?</p>
                                                <p>Led a successful intern project to develop the infra-as-code automation for application gateway configurations.</p>
                                                <p>Executed features for single sign-on integration, automated SSL certificate renewal utilizing websockets, and the ability to add manageable application gateways with customized configuration validations.</p>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                    </> )}
                                </Disclosure>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                    <div className="relative grid grid-cols-9 h-full">
                        <div className="col-span-3 text-right">
                            <p className="italic text-xl text-gray-600">Jul 2022 - Feb 2023</p>
                        </div>
                        <div className="col-span-1 flex justify-center relative">
                            <span className="absolute w-5 h-5 bg-[#799B62] rounded-full border-4 border-[#EFEFEF]" />
                            <div className="w-1 h-full" />
                        </div>
                        {/* Job 3 */}
                        <Disclosure as="div" className="col-span-3" key="job2">
                            <DisclosureButton key="job2" className="mb-6 group flex w-full items-center justify-between hover:text-[#AE8157]">
                                <div className="flex flex-col justify-start text-left">
                                    <p className="font-bold text-xl leading-none mb-2">Technical Manager</p>
                                    <p className="italic text-md leading-none mb-2">The Estée Lauder Companies</p>
                                    <div className="flex">
                                        <MapPinIcon className="size-5 mr-2" />
                                        <p>Kuala Lumpur, Malaysia</p>
                                    </div>
                                </div>
                                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-4 text-sm/5 flex flex-col space-y-3">
                                {/* Project 1 */}
                                <Disclosure as="div" className="">
                                    {({open}) => ( <>
                                    <DisclosureButton className="group flex items-center justify-between">
                                        <div className="flex space-x-4 text-left">
                                            {!open ? <PlusIcon className="size-5" /> : <MinusIcon className="size-5" />}
                                            <div className="mb-4">
                                                <p className="font-bold text-lg leading-none mb-1 hover:underline">Kuala Lumpur IT Hiring Automation</p>
                                                <p className="italic text-sm text-gray-600">Tools: Node.js, Azure DevOps Pipelines, Azure Logic Apps, Jira</p>
                                            </div>
                                        </div>
                                    </DisclosureButton>
                                    <DisclosurePanel className="ml-7 mb-3">
                                        <div className="flex flex-col space-y-3">
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What is it?</p>
                                                <p>Fully-automated candidate intake, scheduler, feedback, and monitoring HR system.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What did I contribute?</p>
                                                <p>Developed the implementation plan, deployed the infrastructure, and wrote the automation scripts to reach all stakeholders in the hiring process.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What was the impact?</p>
                                                <p>Reduced time to hire over 40 technical positions by 40% and assisted in spearheading the newest global technology center.</p>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                    </> )}
                                </Disclosure>
                                {/* Project 2 */}
                                <Disclosure as="div" className="">
                                    {({open}) => ( <>
                                    <DisclosureButton className="group flex items-center justify-between">
                                        <div className="flex space-x-4 text-left">
                                            {!open ? <PlusIcon className="size-5" /> : <MinusIcon className="size-5" />}
                                            <div className="mb-4">
                                                <p className="font-bold text-lg leading-none mb-1 hover:underline">Kuala Lumpur Global Technology Center</p>
                                            </div>
                                        </div>
                                    </DisclosureButton>
                                    <DisclosurePanel className="ml-7 mb-3">
                                        <div className="flex flex-col space-y-3">
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What is it?</p>
                                                <p>The newest global technology center for The Estée Lauder Companies, supporting Asia Pacific operations.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What did I contribute?</p>
                                                <p>Interviewed and hired for over 40 full time positions and spearheaded over 10 programs to set up the new center.</p>
                                            </div>
                                            <div className="ml-2 text-sm text-gray-600">
                                                <p className="font-bold italic">What was the impact?</p>
                                                <p>Support for APAC operations with 40 full time employees in all sectors of IT.</p>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                    </> )}
                                </Disclosure>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </div>
            </div>

        </section>
    )

}
