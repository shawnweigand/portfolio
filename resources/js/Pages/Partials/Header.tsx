import { MapPinIcon } from '@heroicons/react/24/solid'; // or solid for filled icons
import profile from '/public/images/Profile.png'

export default function Header() {


    return (
        <header className="flex flex-col items-center justify-center h-screen bg-cover bg-center">
        <div className="flex flex-col items-center md:flex-row md:space-x-8">
            {/* Profile Picture */}
            <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg">
                <img
                src={profile}
                alt="Shawn Weigand"
                className="w-full h-full translate-y-[10%] object-top object-cover transform scale-125"
                />
            </div>

            {/* Introduction Text */}
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Shawn</h1>
                <p className="text-xl md:text-2xl mb-3">Web Developer, Cloud Engineer, DevOps</p>
                <div className='flex'>
                    <MapPinIcon className='text-blue-600 w-12 h-12 mb-8'/>
                    <p className='text-lg md:text-xl mt-3 ml-2'>Brooklyn, NY</p>
                </div>
                <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500">
                View My Work
                </a>
                {/* Socials */}
                <div className="mt-10 grid grid-cols-6 gap-2" >
                <a href="https://github.com/shawnweigand" target="_blank" className="block col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-500 hover:opacity-75 transition-opacity duration-200">
                        <path fillRule="evenodd" d="M12 1.75a10.25 10.25 0 00-3.24 19.96c.51.09.7-.22.7-.48v-1.68c-2.89.63-3.5-1.4-3.5-1.4-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.63.07-.63 1.04.08 1.6 1.07 1.6 1.07.92 1.58 2.42 1.12 3.01.85.09-.67.36-1.12.65-1.38-2.31-.26-4.75-1.15-4.75-5.12 0-1.13.4-2.05 1.07-2.78-.11-.26-.46-1.28.1-2.67 0 0 .87-.28 2.85 1.06a9.88 9.88 0 015.19 0c1.98-1.34 2.85-1.06 2.85-1.06.56 1.39.21 2.41.1 2.67.67.73 1.07 1.65 1.07 2.78 0 3.99-2.45 4.86-4.78 5.11.37.32.7.94.7 1.89v2.8c0 .27.18.58.7.48A10.25 10.25 0 0012 1.75z" clipRule="evenodd"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/shawn-weigand/" target="_blank" className="block col-span-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-blue-500 hover:opacity-75 transition-opacity duration-200">
                        <path d="M22.225 0H1.775C.795 0 0 .785 0 1.75v20.5C0 23.215.795 24 1.775 24h20.45C23.205 24 24 23.215 24 22.25V1.75C24 .785 23.205 0 22.225 0zm-15.5 20.452H4.125V9h3.6v11.452zm-1.8-13.16a2.075 2.075 0 110-4.15 2.075 2.075 0 010 4.15zm16.275 13.16h-3.6v-5.69c0-1.353-.024-3.09-1.885-3.09-1.887 0-2.173 1.475-2.173 3v5.78h-3.6V9h3.47v1.54h.05c.489-.92 1.69-1.88 3.47-1.88 3.734 0 4.42 2.447 4.42 5.63v6.24z"/>
                    </svg>
                </a>
                <a href="https://medium.com/@weigandshawn" target="_blank" className="block col-span-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-blue-500 hover:opacity-75 transition-opacity duration-200">
                        <path d="m24 24h-24v-24h24zm-8.986-15.006v7.326c0 .198 0 .234-.127.362l-1.302 1.264v.27h6.32v-.27l-1.257-1.234c-.091-.07-.148-.178-.148-.3 0-.022.002-.043.005-.064v.002-9.07c-.003-.019-.005-.04-.005-.062 0-.121.058-.229.148-.298l.001-.001 1.286-1.234v-.27h-4.456l-3.176 7.924-3.609-7.924h-4.675v.271l1.502 1.813c.127.115.207.281.207.466 0 .022-.001.043-.003.064v-.003 7.126c.007.041.011.088.011.136 0 .222-.088.423-.231.571l-1.69 2.054v.27h4.8v-.27l-1.691-2.054c-.149-.154-.241-.363-.241-.595 0-.04.003-.079.008-.117v.004-6.16l4.215 9.195h.49z"/>
                    </svg>
                </a>
                <a href="https://x.com/theshawnshop" target="_blank" className="block col-span-1 mt-1">
                    <svg width="43" height="43" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='hover:opacity-75 transition-opacity duration-200'>
                        <path d="M11.154 9.72955L7.08868 4.0412H4.92041L9.9563 11.0871L10.5902 11.9734L14.9006 18.0096H17.0689L11.7852 10.6159L11.154 9.72955Z" fill="#3B82F6"/>
                        <path d="M20.1598 0H1.84021C0.823853 0 0 0.823853 0 1.84021V20.1598C0 21.1761 0.823853 22 1.84021 22H20.1598C21.1761 22 22 21.1761 22 20.1598V1.84021C22 0.823853 21.1761 0 20.1598 0ZM14.2354 19L9.8728 12.787L4.41144 19H3L9.24689 11.8953L3 3H7.76465L11.8948 8.88196L17.0696 3H18.481L12.524 9.77563L19 19H14.2354Z" fill="#3B82F6"/>
                    </svg>
                </a>
                </div>
            </div>
        </div>
    </header>
    )

}
