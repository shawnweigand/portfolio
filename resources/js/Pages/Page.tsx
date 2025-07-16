
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Header from '@/Pages/Partials/Header';
import About from '@/Pages/Partials/About';
import Skills from '@/Pages/Partials/Skills';
import Projects from '@/Pages/Partials/Projects';
import Contact from '@/Pages/Partials/Contact';
import Articles from './Partials/Articles';
import Experience from './Partials/Experience';
import Certs from './Partials/Certs';

interface Props {
    articles: []
}

export default function Page({ articles }: Props) {

    document.documentElement.classList.add('scroll-smooth');

    return (
        <>
        <Head title='Portfolio' />
        <div className="bg-[#EFEFEF] min-h-screen text-[#2e250a]">
            {/* Hero Section */}
            <Header />

            {/* About Section */}
            <About />

            {/* Experience Section */}
            <Experience />

            {/* Skills Section */}
            <Skills />

            {/* Certifications Section */}
            <Certs />

            {/* Articles Section */}
            <Articles articles={articles}/>

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <footer className="py-6 text-center">
                <p>&copy; 2024 Shawn Weigand. All rights reserved.</p>
            </footer>
        </div>
        </>
    );
}
