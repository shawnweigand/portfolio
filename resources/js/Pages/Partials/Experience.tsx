import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/16/solid"

export default function Experience() {

    return (
        <section id="experience" className="py-20 px-4 md:px-16">
            <h2 className="text-[#2e250a] text-3xl font-bold text-center mb-16">My Experience</h2>
            <div className="flex justify-center">
                {/* <ul className="list-none list-outside space-y-8 mr-4">
                    <li className="relative mb-4">
                        <p className="text-sm italic">July 2021 - Present</p>
                    </li>
                    <li className="relative mb-4">

                    </li>
                </ul> */}
                <ul className="list-none list-outside space-y-8">
                    <li className="relative mb-4 flex">
                        <div className="w-1 h-4 bg-[#799B62]">

                        </div>
                        <span className="absolute -left-11 -top-2 w-5 h-5 bg-[#799B62] rounded-full mt-2 border-4 border-[#EFEFEF]" />
                        <div className="flex flex-col">
                            <p className="font-bold text-lg">Senior Platform Engineer</p>
                            <p className="italic">The Estée Lauder Companies</p>
                        </div>
                    </li>
                    <li className="relative mb-4">
                        <span className="absolute -left-11 -top-2 w-5 h-5 bg-[#799B62] rounded-full mt-2 border-4 border-[#EFEFEF]" />
                        <p className="font-bold text-lg">Technical Manager</p>
                        <p className="italic">The Estée Lauder Companies</p>
                    </li>
                </ul>
            </div>
            <Disclosure as="div" className="p-6" defaultOpen={true}>
            <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium group-data-[hover]:text-white/80">
                What is your refund policy?
                </span>
                <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5">
                If you're unhappy with your purchase, we'll refund you in full.
            </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium group-data-[hover]:text-white/80">
                Do you offer technical support?
                </span>
                <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5">No.</DisclosurePanel>
            </Disclosure>

        </section>
    )

}
