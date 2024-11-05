import { useForm } from "@inertiajs/react"

export default function Contact() {

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
            onSuccess: () => reset(),
        })
    }

    return (
        <section id="contact" className="py-20 px-4 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
                <p className="text-lg leading-relaxed text-center mb-8">
                    I'm always open to new opportunities and collaborations. Feel free to reach out to me for any inquiries, projects, or just to say hello!
                </p>

                <form className="flex flex-col items-left gap-4 w-1/2 place-self-center" onSubmit={submit}>
                    <div className="grid">
                        Name
                        <input className="hover:border-blue-600 rounded" type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
                        {errors.name && <div className="text-red-500 mt-1">{errors.name}</div>}
                    </div>
                    <div className="grid">
                        Email
                        <input className="hover:border-blue-600 rounded" type="text" value={data.email} onChange={e => setData('email', e.target.value)} />
                        {errors.email && <div className="text-red-500 mt-1">{errors.email}</div>}
                    </div>
                    <div className="grid">
                        Content
                        <textarea className="h-64   hover:border-blue-600 rounded" value={data.content} onChange={e => setData('content', e.target.value)} />
                        {errors.content && <div className="text-red-500 mt-1">{errors.content}</div>}
                    </div>
                    <button className="place-self-center w-1/4 my-4 px-8 py-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition" type="submit" disabled={processing}>Submit</button>
                </form>

            </div>
        </section>
    )
}
