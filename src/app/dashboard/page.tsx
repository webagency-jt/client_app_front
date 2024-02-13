'use client'

import Header from '../components/header';
import Sidebar from '../components/sidebar';

const DashboardPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <main className="p-4 flex-1">
                    {/* Contenu principal du tableau de bord */}
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
