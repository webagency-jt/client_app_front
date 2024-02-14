'use client'

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import Image from "next/image";

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [code, setCode] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

    async function handleSubmit(formData: FormData) {

        if (formData.get('password') !== formData.get('passwordConfirm'))


            await router.push('/login');
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePasswordConfirmVisibility = () => {
        setPasswordConfirmVisible(!passwordConfirmVisible);
    };

    const toggleEmailEmpty = () => {
        setEmail('');
    };
    const toggleCodeEmpty = () => {
        setCode('');
    };
    const togglePseudoEmpty = () => {
        setPseudo('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full flex items-center justify-center">
                <div className="mr-10 flex-grow">
                    <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
                        Inscription
                    </h2>
                    <form className="mt-8 space-y-6" action={handleSubmit}>
                        <div className='relative'>
                            <input
                                type="pseudo"
                                name="pseudo"
                                placeholder="Pseudo"
                                required
                                value={pseudo}
                                onChange={(e) => setPseudo(e.target.value)}
                                className="appearance-none relative block w-full px-4 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-blue-100 bg-opacity-50 rounded"
                            />
                            <button
                                type="button"
                                onClick={togglePseudoEmpty}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            >
                                <Image src='crossed.svg' alt='crossed' width='19' height='16'></Image>
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                value={email} // Définir la valeur de l'entrée sur la variable email
                                onChange={(e) => setEmail(e.target.value)} // Mettre à jour la valeur de l'entrée lorsqu'elle change
                                required
                                className="appearance-none relative block w-full px-4 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-blue-100 bg-opacity-50 rounded"
                            />
                            <button
                                type="button"
                                onClick={toggleEmailEmpty}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            >
                                <Image src='crossed.svg' alt='crossed' width='19' height='16'></Image>
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                pattern=".{6,}" // Expression régulière pour vérifier que le mot de passe contient au moins 6 caractères
                                title="Le mot de passe doit contenir au moins 6 caractères"
                                required
                                className="appearance-none relative block w-full px-4 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-blue-100 bg-opacity-50 rounded"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            >
                                {passwordVisible ? (
                                    <Image src='/eye.svg' alt='passwordNoVisible' width='19' height='16'></Image>
                                ) : (
                                    <Image src='/eyecrossed.svg' alt='passwordVisible' width='19' height='16'></Image>
                                )}
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type={passwordConfirmVisible ? 'text' : 'password'}
                                name="passwordConfirm"
                                placeholder="PasswordConfirm"
                                pattern=".{6,}" // Expression régulière pour vérifier que le mot de passe contient au moins 6 caractères
                                title="Le mot de passe doit contenir au moins 6 caractères"
                                required
                                className="appearance-none relative block w-full px-4 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-blue-100 bg-opacity-50 rounded"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordConfirmVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            >
                                {passwordConfirmVisible ? (
                                    <Image src='/eye.svg' alt='passwordNoVisible' width='19' height='16'></Image>
                                ) : (
                                    <Image src='/eyecrossed.svg' alt='passwordVisible' width='19' height='16'></Image>
                                )}
                            </button>
                        </div>
                        <div className='relative'>
                            <input
                                type="code"
                                name="code"
                                placeholder="Code"
                                required
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                className="appearance-none relative block w-full px-4 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-blue-100 bg-opacity-50 rounded"
                            />
                            <button
                                type="button"
                                onClick={toggleCodeEmpty}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            >
                                <Image src='crossed.svg' alt='crossed' width='19' height='16'></Image>
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            S'inscrire
                        </button>
                    </form>
                </div>
                <div>
                    <Image src='/auth.svg' priority={true} alt='auth' width='564' height='496' className="w-94 h-auto"/>
                </div>
            </div>
        </div>
    );
}
