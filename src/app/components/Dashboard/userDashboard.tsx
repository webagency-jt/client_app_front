import {cookieUtils} from "@/app/lib/utils";
import {getAllSites, IUser} from "@/app/lib/actions";
import Image from "next/image";

const UserDashboard= () => {
    const userSession = cookieUtils<IUser>('session')
   // getAllSites(userSession.id,userSession.token)

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-start justify-start">
                <h1 className="font-bold text-2xl">Bienvenu {userSession.username}</h1>
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
                <h1 className="font-bold text-2xl mt-12">Sites</h1>
            </div>

        </div>
    );
};

export default UserDashboard;