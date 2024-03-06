"use client"
import {getAllSites, IUser, Setting} from "@/app/lib/actions";
import Image from "next/image";
import {useEffect, useState} from "react";
import {Sites} from "@generated/models/Sites";

const UserDashboard= (props: any) => {
    const [sites, setSites] = useState<Sites[]>([]);

    useEffect(() => {
        const allSites = async()=> {
            const data = await getAllSites();
            return data;
        }
        allSites().then(sites =>{
            setSites(sites.data);
        })
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-start justify-start">
                <h1 className="font-bold text-2xl">Bienvenu {props.username}</h1>
                <div className="w-full flex justify-center mt-10 space-x-4">
                    <div className="flex-1">
                        <div className="flex items-center justify-center w-full h-20 bg-white rounded-md">
                            <Image
                                src="/logoTaskDashboard.svg"
                                priority={true}
                                alt="task completed"
                                width={34}
                                height={34}
                                className="mr-8"
                            />
                            <p className="text-gray-600 italic text-xl">Tâche Terminée</p>
                            <span className="ml-8 font-bold text-xl">08</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-center w-full h-20 bg-white rounded-md">
                            <Image
                                src="/logoNewTaskDashboard.svg"
                                priority={true}
                                alt="new task"
                                width={34}
                                height={34}
                                className="mr-8"
                            />
                            <p className="text-gray-600 italic text-xl">Nouvelle Tâche</p>
                            <span className="ml-8 font-bold text-xl">10</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-center w-full h-20 bg-white rounded-md">
                            <Image
                                src="/logoProjectDoneDashboard.svg"
                                priority={true}
                                alt="task"
                                width={34}
                                height={34}
                                className="mr-8"
                            />
                            <p className="text-gray-600 italic text-xl">Projet Réalisé</p>
                            <span className="ml-8 font-bold text-xl">10</span>
                        </div>
                    </div>
                </div>
                {sites.length > 0 ? (
                    <div className="w-full">
                        <h1 className="font-bold text-2xl mt-12">Sites</h1>
                        {sites.map(site => (
                            <div key={site.id} className="w-full flex items-center justify-center space-x-4 mt-4">
                                <div className="flex-shrink-0">
                                    <Image
                                        src="/linkBlue.svg"
                                        priority={true}
                                        alt="linkBlue"
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className="flex-1 bg-white rounded-md p-4 flex flex-col relative">
                                    <div>
                                        <h2 className="font-bold text-xl">{site.name}</h2>
                                        <div className="flex items-center">
                                            <Image
                                                src="/link.svg"
                                                priority={true}
                                                alt="linkBlue"
                                                width={17.87}
                                                height={17.87}
                                                className='mr-2'
                                            />
                                            <a href={site.link} target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">{site.link}</a>
                                        </div>
                                    </div>
                                    <button
                                        className="bg-[#EDECFE] text-[#5051F9] py-2 px-10 rounded-lg absolute top-1/2 transform -translate-y-1/2 right-4">
                                        Détails
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    ""
                )}
                <div className="w-full">
                    <h1 className="font-bold text-2xl mt-12">Factures</h1>
                    <div className="w-full mt-4">
                        <table className="w-full bg-white rounded-md table-auto">
                            <thead>
                            <tr>
                                <th className="py-2 px-4 text-left">
                                    <div className="flex items-center">
                                        <span className="text-[#768396]">Nom</span>
                                        <Image
                                            src="/upArrow.svg"
                                            priority={true}
                                            alt="upArrow"
                                            width={12}
                                            height={12}
                                            className="ml-2"
                                        />
                                    </div>
                                </th>
                                <th className="py-2 px-4 text-left">
                                    <div className="flex items-center">
                                        <span className="text-[#768396]" style={{whiteSpace: 'nowrap'}}>Service</span>
                                        <Image
                                            src="/upArrow.svg"
                                            priority={true}
                                            alt="upArrow"
                                            width={12}
                                            height={12}
                                            className="ml-2"
                                        />
                                    </div>
                                </th>
                                <th className="py-2 px-4 text-left">
                                    <div className="flex items-center">
                                        <span className="text-[#768396] whitespace-nowrap">Taille</span>
                                        <Image
                                            src="/upArrow.svg"
                                            priority={true}
                                            alt="upArrow"
                                            width={12}
                                            height={12}
                                            className="ml-2"
                                        />
                                    </div>
                                </th>
                                <th className="py-2 px-4 text-left">
                                    <div className="flex items-center">
                                        <span className="text-[#768396] whitespace-nowrap">Dernière modification</span>
                                        <Image
                                            src="/upArrow.svg"
                                            priority={true}
                                            alt="upArrow"
                                            width={12}
                                            height={12}
                                            className="ml-2"
                                        />
                                    </div>
                                </th>
                                <th className="py-2 px-4 text-left">
                                    <div className="flex items-center">
                                        <span className="text-[#768396] whitespace-nowrap">Total</span>
                                        <Image
                                            src="/upArrow.svg"
                                            priority={true}
                                            alt="upArrow"
                                            width={12}
                                            height={12}
                                            className="ml-2"
                                        />
                                    </div>
                                </th>
                                <th className="py-2 px-4"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="py-2 px-4"><div className="flex items-center">
                                    <Image
                                        src="/logoFileDashboard.svg"
                                        priority={true}
                                        alt="upArrow"
                                        width={30}
                                        height={30}
                                        className="mr-2"
                                    />
                                    <span className="font-bold">Facture Maintenance</span>

                                </div></td>
                                <td className="py-2 px-4 text-[#768396]"><a>Site 1</a></td>
                                <td className="py-2 px-4 text-[#768396]">2.9MB</td>
                                <td className="py-2 px-4 text-[#768396]">25 Fevrier 2024</td>
                                <td className="py-2 px-4 text-[#768396]">1800€</td>
                                <td className="py-2 px-4 text-[#768396]"><Image
                                    src="/3point.svg"
                                    priority={true}
                                    alt="3point"
                                    width={4}
                                    height={18}
                                    className="mr-2"
                                /></td>
                                {/* Ajoutez d'autres données si nécessaire */}
                            </tr>
                            {/* Ajoutez d'autres lignes de données si nécessaire */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;