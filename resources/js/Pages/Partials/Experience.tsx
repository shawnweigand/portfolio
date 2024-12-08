import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/16/solid"

export default function Experience() {

    return (
        <section id="experience" className="py-20 px-4 md:px-16">
            <h2 className="text-[#2e250a] text-3xl font-bold text-center mb-16">My Experience</h2>

            {/* <Disclosure as="div" className="p-6" defaultOpen={true}>
            <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                What is your refund policy?
                </span>
                <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                If you're unhappy with your purchase, we'll refund you in full.
            </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                Do you offer technical support?
                </span>
                <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-white/50">No.</DisclosurePanel>
            </Disclosure> */}

        </section>
    )

}
