// components/Sidebar.js
import Image from "next/image"
const Sidebar = () => {
    return (
        <aside className="bg-white h-screen w-40 border-r-2 border-b-main-color">
            <div className="flex items-center justify-center p-[25px] border-b-2 border-b-main-color">
                <Image src="logo.svg" alt='logo' width="46" height="46"/>
            </div>
            <nav>
                <ul className="space-y-2">
                    <li className="p-4">
                        <a href="/dashboard" className="flex items-center text-white hover:bg-blue-700 rounded">
                            <Image src="logoDashboard.svg" alt='logo' width="30" height="30" className=""></Image>
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
