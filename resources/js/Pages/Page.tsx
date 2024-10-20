
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Header from '@/Pages/Partials/Header';
import About from '@/Pages/Partials/About';
import Skills from '@/Pages/Partials/Skills';
import Projects from '@/Pages/Partials/Projects';
import Contact from '@/Pages/Partials/Contact';

export default function Page() {

    return (
        <>
        <Head title='Portfolio' />
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <Header />

            {/* About Section */}
            <About />

            {/* Skills Section */}
            <Skills />

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
