'use client'
import Image from "next/image"
import {Setting} from "@/app/lib/actions";
import {useEffect, useState} from "react";
export default function Page() {

    type UserData = {
        firstname: string,
        lastname: string,
        //email: string,
        phoneNumber: string,
        tva: string,
        siret: string,
        address: string,
        city: string,
        state: string,
        zip: string
    }
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [tva, setTva] = useState('');
    const [siret, setSiret] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipcode, setZipCode] = useState('');
    const [userInformation, setUserInformation] = useState<UserData>({city: "", firstname: "", lastname: "", phoneNumber: "", state: "", siret: "", address: "", tva: "", zip: ""});
   useEffect( () => {
       const userInformation = async()=> {
           const data = await Setting();
           return data;
       }
       userInformation().then(information =>{
           setUserInformation(information?.data)
       })

   },[]);

   useEffect(() =>{

       setFirstname(userInformation.firstname);
       setLastName(userInformation.lastname);
       setCity(userInformation.city);
       setTva(userInformation.tva);
       setZipCode(userInformation.zip);
       setStreetAddress(userInformation.address)
       setProvince(userInformation.state)
       setSiret(userInformation.siret)
       setPhone(userInformation.phoneNumber)
       //setEmail(userInformation.email);
   },[userInformation])




    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center">
                <div className="relative">
                    {/* Image principale */}
                    <Image src="/setting.svg" alt="setting" width='1000' height='200' className='rounded'/>
                    {/* Image en rond en bas à gauche */}
                    <div className="absolute bottom-8 left-4">
                        <Image src="/avatartest.svg" alt="circle" className="rounded-full" width='107' height='100'/>
                    </div>
                </div>
                <div className="w-full max-w-[62.5rem]">
                    <form className='mt-3'>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="firstname">
                                    First Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstname" type="text" placeholder="First Name" value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="lastname">
                                    Last Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastname" type="text" placeholder="Last Name" value={lastname}
                                    onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="email" placeholder="Email" value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone" type="tel" placeholder="Phone" value={phone}
                                    onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="tva">
                                    TVA
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="tva" type="text" placeholder="TVA" value={tva}
                                    onChange={(e) => setTva(e.target.value)}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="siret">
                                    SIRET
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="siret" type="text" placeholder="SIRET" value={siret}
                                    onChange={(e) => setSiret(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="street">
                                Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="street" type="text" placeholder="Street Address" value={streetAddress}
                                onChange={(e) => setStreetAddress(e.target.value)}/>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="city">
                                    City
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="city" type="text" placeholder="City" value={city}
                                    onChange={(e) => setCity(e.target.value)}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="state">
                                    State/Province
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="state" type="text" placeholder="State/Province" value={province}
                                    onChange={(e) => setProvince(e.target.value)}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="zipcode">
                                    Zipcode
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="zipcode" type="text" placeholder="Zipcode" value={zipcode}
                                    onChange={(e) => setZipCode(e.target.value)}/>
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