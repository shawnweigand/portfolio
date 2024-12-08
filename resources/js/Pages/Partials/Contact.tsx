import { useForm } from "@inertiajs/react"
import { useState } from "react";

export default function Contact() {

    const [sent, setSent] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        content: ''
    })

    function submit(e: any) {
        e.preventDefault()
        console.log(e);
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => { reset(), setSent(true) }
        })
    }

    return (
        <section id="contact" className="py-20 px-4 md:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[#2e250a] text-3xl font-bold text-center mb-8">Get In Touch</h2>
                <p className="text-[#2e250a] text-lg leading-relaxed text-center mb-8">
                    I'm always open to new opportunities and collaborations. Feel free to reach out to me for any inquiries, projects, or just to say hello!
                </p>

                {sent &&
                    <p className="mb-6 px-1 text-lg text-center place-self-center bg-green-300">Thanks for reaching out! I will respond to your message as soon as I can :)</p>
                }

                <form className="flex flex-col items-left gap-4 w-1/2 place-self-center place-items-center" onSubmit={submit}>
                    <div className="text-[#2e250a] grid w-full">
                        Name
                        <input className="hover:border-blue-600 rounded" type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
                        {errors.name && <div className="text-red-500 mt-1">{errors.name}</div>}
                    </div>
                    <div className="text-[#2e250a] grid w-full">
                        Email
                        <input className="hover:border-blue-600 rounded" type="text" value={data.email} onChange={e => setData('email', e.target.value)} />
                        {errors.email && <div className="text-red-500 mt-1">{errors.email}</div>}
                    </div>
                    <div className="text-[#2e250a] grid w-full">
                        Content
                        <textarea className="h-64 hover:border-blue-600 rounded" value={data.content} onChange={e => setData('content', e.target.value)} />
                        {errors.content && <div className="text-red-500 mt-1">{errors.content}</div>}
                    </div>
                    <button className="place-self-center px-8 py-4 my-4 bg-[#B79065] hover:bg-[#AE8157] text-white text-center rounded-md shadow-md transition" type="submit" disabled={processing}>Submit</button>
                </form>

            </div>
        </section>
    )
}
