'use client'
import Image from "next/image"
import {Setting, UpdateUserInformation} from "@/app/lib/actions";
import {useEffect, useState} from "react";
import {StatusCodes} from "http-status-codes";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UserInformations} from "@generated/models/UserInformations";
import {UserInformationsUpdateInput} from "@generated/models/UserInformationsUpdateInput";
export default function Page() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [tva, setTva] = useState(0);
    const [siret, setSiret] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipcode, setZipCode] = useState('');
    const [userInformation, setUserInformation] = useState<UserInformations>({
        address: "",
        city: "",
        email: "",
        firstname: "",
        id: "",
        lastname: "",
        phoneNumber: "",
        siret: "",
        state: "",
        tva: 0,
        userId: "",
        zip: ""
    });
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
       if (userInformation) {
           setFirstname(userInformation.firstname || '');
           setLastName(userInformation.lastname || '');
           setCity(userInformation.city || '');
           setTva(userInformation.tva || 0);
           setZipCode(userInformation.zip || '');
           setStreetAddress(userInformation.address || '');
           setSiret(userInformation.siret || '');
           setPhone(userInformation.phoneNumber || '');
           setEmail(userInformation.email || '');
       }
   },[userInformation])


    async function handleSubmit(formData: FormData) {

        const firstname = formData.get('firstname') ?? ''
        const lastname = formData.get('lastname') ?? ''
        const city = formData.get('city') ?? ''
        const tva = parseInt(formData.get('tva') as string) ?? ''
        const zipcode = formData.get('zipcode') ?? ''
        const streetadress = formData.get('street') ?? ''
        const siret = formData.get('siret') ?? ''
        const phone = formData.get('phone') ?? ''
        const email = formData.get('email') ?? ''

        const userInformation: UserInformationsUpdateInput = {
            firstname: firstname.toString(),
            lastname: lastname.toString(),
            city: city.toString(),
            tva: tva,
            zip: zipcode.toString(),
            address: streetadress.toString(),
            siret: siret.toString(),
            phoneNumber: phone.toString(),
            email: email.toString(),
        }
        const response = await UpdateUserInformation(userInformation)
        console.log(response)
        if (response?.statusCode === StatusCodes.NOT_FOUND) {
            showErrorToast(response.data);
        }else if(response?.statusCode === StatusCodes.OK){
            showToast(response.data);
        }

    };

    const showErrorToast = (error: string) => {
        toast.error(error, {
            position: 'bottom-left', // Position du toast en bas à gauche
            autoClose: 5000, // Durée d'affichage du toast en millisecondes
            hideProgressBar: true, // Masquer la barre de progression
            closeOnClick: true, // Fermer le toast lorsqu'il est cliqué
            pauseOnHover: true, // Mettre en pause le timer lorsqu'on survole le toast
            draggable: true, // Permettre de faire glisser le toast
            progress: undefined, // Paramètre de progression (peut être personnalisé si nécessaire)
            theme: "colored",
            style: {
                backgroundColor: 'red', // Couleur de fond rouge
            },
        });
    };

    const showToast = (ok: string) => {
        toast.success(ok, {
            position: 'bottom-left', // Position du toast en bas à gauche
            autoClose: 5000, // Durée d'affichage du toast en millisecondes
            hideProgressBar: true, // Masquer la barre de progression
            closeOnClick: true, // Fermer le toast lorsqu'il est cliqué
            pauseOnHover: true, // Mettre en pause le timer lorsqu'on survole le toast
            draggable: true, // Permettre de faire glisser le toast
            progress: undefined, // Paramètre de progression (peut être personnalisé si nécessaire)
            theme: "colored",
            style: {
                backgroundColor: 'green', // Couleur de fond vert
            },
        });
    };

    return (
        <>
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center">
                <div className="relative">
                    {/* Image principale */}
                    <Image src="/setting.svg" alt="setting" width='1000' height='200' className='rounded'/>
                    {/* Image en rond en bas à gauche */}
                    <div className="absolute bottom-8 left-4">
                        <Image src="/avatarTest.svg" alt="circle" className="rounded-full" width='107' height='100'/>
                    </div>
                </div>
                <div className="w-full max-w-[62.5rem]">
                    <form className='mt-3' action={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="firstname">
                                    First Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstname" name='firstname' type="text" placeholder="First Name" value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="lastname">
                                    Last Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastname" name="lastname" type="text" placeholder="Last Name" value={lastname}
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
                                    id="email" name="email" type="email" placeholder="Email" value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone" name="phone" type="tel" placeholder="Phone" value={phone}
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
                                    id="tva" name="tva" type="number" placeholder="TVA" value={tva}
                                    onChange={(e) => setTva(parseInt(e.target.value))}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="siret">
                                    SIRET
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="siret" name="siret" type="text" placeholder="SIRET" value={siret}
                                    onChange={(e) => setSiret(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="street">
                                Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="street" name="street" type="text" placeholder="Street Address" value={streetAddress}
                                onChange={(e) => setStreetAddress(e.target.value)}/>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="city">
                                    City
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="city" name="city" type="text" placeholder="City" value={city}
                                    onChange={(e) => setCity(e.target.value)}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="zipcode">
                                    Zipcode
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="zipcode" name="zipcode" type="text" placeholder="Zipcode" value={zipcode}
                                    onChange={(e) => setZipCode(e.target.value)}/>
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <button
                                className="bg-[#5051F9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    <ToastContainer/>
    </>
    )
}