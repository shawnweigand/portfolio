import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDownIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid"

export default function Experience() {

    return (
        <section id="experience" className="py-20 px-4 md:px-16">
            <h2 className="text-[#2e250a] text-3xl font-bold text-center mb-16">My Experience</h2>
            <div className="flex justify-center text-[#2e250a]">
                <ul className="list-none list-outside w-full">
                    <li className="relative grid grid-cols-9 h-full">
                        <div className="col-span-3 text-right">
                            <p className="italic text-gray-600">July 2021 - Present</p>
                        </div>
                        <div className="col-span-1 flex justify-center relative">
                            <span className="absolute w-5 h-5 bg-[#799B62] rounded-full border-4 border-[#EFEFEF]" />
                            <div className="w-1 h-full bg-[#799B62]" />
                        </div>
                        <Disclosure as="div" className="col-span-3">
                            <DisclosureButton className="group flex w-full items-center justify-between hover:text-[#AE8157]">
                                <div className="flex flex-col justify-start text-left">
                                    <p className="font-bold text-lg leading-none mb-2">Senior Platform Engineer</p>
                                    <p className="italic text-sm leading-none mb-2">The Estée Lauder Companies</p>
                                </div>
                                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-4 text-sm/5">
                                <Disclosure as="div" className="">
                                    {({open}) => ( <>
                                    <DisclosureButton className="group flex items-center justify-between">
                                        <div className="flex space-x-4 text-left">
                                            {!open ? <PlusIcon className="size-5" /> : <MinusIcon className="size-5" />}
                                            <div className="mb-4">
                                                <p className="font-bold text-md leading-none mb-1 hover:underline">Kubernetes Version Upgrade Automation</p>
                                                <p className="italic text-xs text-gray-600">Tools: Kubernetes, Azure DevOps, Powershell, Bash</p>
                                            </div>
                                        </div>
                                    </DisclosureButton>
                                    <DisclosurePanel className="ml-7">
                                        <div className="flex flex-col space-y-3">
                                            <div className="ml-2 text-xs text-gray-600">
                                                <p className="font-bold italic">What is it?</p>
                                                <p>An automated end-to-end kubernetes version upgrade process to ensure security, reliability, scalability and minimal downtime.</p>
                                            </div>
                                            <div className="ml-2 text-xs text-gray-600">
                                                <p className="font-bold italic">How did I contribute?</p>
                                                <p>Architected backups, pre- and post-upgrade snapshots, version and image availability checks, manual and maintenance window gates, IP availability checks, node pool scaling and upgrading, and control plane upgrading.</p>
                                            </div>
                                            <div className="ml-2 text-xs text-gray-600">
                                                <p className="font-bold italic">What was the impact?</p>
                                                <p>Enabled upgrades of 100+ clusters over 5 major versions to the latest supported, significantly cutting upgrade times.</p>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                    </> )}
                                </Disclosure>
                            </DisclosurePanel>
                        </Disclosure>
                    </li>
                    {/* <li className="relative grid grid-cols-5 h-full">
                        <div className="col-span-2 text-right">
                            <p className="italic text-gray-600">July 2022 - Feb 2023</p>
                        </div>
                        <div className="col-span-1 flex justify-center relative">
                            <span className="absolute w-5 h-5 bg-[#799B62] rounded-full border-4 border-[#EFEFEF]" />
                            <div className="w-1 h-full" />
                        </div>
                        <div className="flex flex-col col-span-2 justify-start text-left">
                            <p className="font-bold text-lg leading-none mb-2">Technical Manager</p>
                            <p className="italic text-sm leading-none mb-2">The Estée Lauder Companies</p>
                            <Disclosure as="div">
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium group-data-[hover]:text-[#AE8157]">
                                        Projects
                                    </span>
                                    <ChevronDownIcon className="size-5 group-data-[hover]:fill-[#AE8157] group-data-[open]:rotate-180" />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5">
                                    <Disclosure as="div">
                                        <DisclosureButton className="group flex w-full items-center justify-between">
                                            <span className="text-sm/6 font-medium group-data-[hover]:text-[#AE8157]">
                                                Projects
                                            </span>
                                            <ChevronDownIcon className="size-5 group-data-[hover]:fill-[#AE8157] group-data-[open]:rotate-180" />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 text-sm/5">No.</DisclosurePanel>
                                    </Disclosure>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                    </li> */}
                </ul>
            </div>

        </section>
    )

}
