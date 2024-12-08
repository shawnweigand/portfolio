
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Header from '@/Pages/Partials/Header';
import About from '@/Pages/Partials/About';
import Skills from '@/Pages/Partials/Skills';
import Projects from '@/Pages/Partials/Projects';
import Contact from '@/Pages/Partials/Contact';
import Articles from './Partials/Articles';

interface Props {
    articles: []
}

export default function Page({ articles }: Props) {

    document.documentElement.classList.add('scroll-smooth');

    return (
        <>
        <Head title='Portfolio' />
        <div className="bg-[#EFEFEF] min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <Header />

            {/* About Section */}
            <About />

            {/* Skills Section */}
            <Skills />

            {/* Articles Section */}
            <Articles articles={articles}/>

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <footer className="py-6 bg-gray-100 text-center">
                <p>&copy; 2024 Shawn Weigand. All rights reserved.</p>
            </footer>
        </div>
        </>
    );
}
