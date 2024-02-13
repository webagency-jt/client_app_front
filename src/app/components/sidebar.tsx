// components/Sidebar.js
import Image from "next/image"
const Sidebar = () => {
    const logo = require('../../../public/Logo.svg');
    return (
        <aside className="bg-white h-screen w-40 border-r-2 border-test">
            <div className="flex items-center justify-center p-4">
                <Image src="Logo.svg" alt='logo' width="46" height="46"/>
            </div>
            <nav>
                <ul className="space-y-2">
                    <li className="p-4">
                        <a href="/dashboard" className="flex items-center text-white hover:bg-blue-700 rounded">
                            <span className='text-black'>Dashboard</span>
                        </a>
                    </li>
                    <li className="p-4">
                        <a href="#" className="flex items-center text-white hover:bg-blue-700 rounded">
                            <span className='text-black'>Item 2</span>
                        </a>
                    </li>
                    {/* Ajoutez d'autres éléments de la barre latérale ici */}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
