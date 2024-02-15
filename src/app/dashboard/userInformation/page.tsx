import Image from "next/image"
import {Setting} from "@/app/lib/actions";
import { cookies } from 'next/headers'

export default async function Page() {

    const cookieSession = cookies();
    const session = cookieSession.get('session');
    console.log(session)
   // const userInformation = await Setting();

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center">
                <div className="relative">
                    {/* Image principale */}
                    <Image src="/setting.svg" alt="setting" width='811' height='200' className='rounded'/>
                    {/* Image en rond en bas à gauche */}
                    <div className="absolute bottom-8 left-4">
                        <Image src="/avatartest.svg" alt="circle" className="rounded-full" width='107' height='100'/>
                    </div>
                </div>
                <div className="w-full max-w-3xl">
                    <form className='mt-3'>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="firstname">
                                    First Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstname" type="text" placeholder="First Name"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="lastname">
                                    Last Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastname" type="text" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="email" placeholder="Email"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone" type="tel" placeholder="Phone"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="tva">
                                    TVA
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="tva" type="text" placeholder="TVA"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="siret">
                                    SIRET
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="siret" type="text" placeholder="SIRET"/>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="street">
                                Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="street" type="text" placeholder="Street Address"/>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="city">
                                    City
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="city" type="text" placeholder="City"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="state">
                                    State/Province
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="state" type="text" placeholder="State/Province"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="zipcode">
                                    Zipcode
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="zipcode" type="text" placeholder="Zipcode"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <button
                                className="bg-[#5051F9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}