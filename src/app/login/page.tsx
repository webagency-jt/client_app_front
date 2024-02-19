'use client'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {authenticate, IUserAuth} from '@/app/lib/actions';
import {useFormStatus} from 'react-dom';
import {useRouter} from "next/navigation";
import Image from "next/image"
import {useState} from "react";
import {StatusCodes} from "http-status-codes";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full flex items-center justify-center">
                <div className="mr-10 flex-grow">
                    <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
                        Connexion
                    </h2>
                    <LoginForm/>
                </div>
                <div>
                    <Image src='/auth.svg' priority={true} alt='auth' width='564' height='496' className="w-94 h-auto"/>
                </div>
            </div>
        </div>
    );
}

function LoginForm() {
    const {pending} = useFormStatus();
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleUsernameEmpty = () => {
        setUsername('');
    };

    async function handleSubmit(formData: FormData) {
        setError('');
        const username = formData.get('username') ?? ''
        const password = formData.get('password') ?? ''
        const user: IUserAuth = {
            username: username.toString(),
            password: password.toString()
        }
        const response = await authenticate(user);
        if (response?.statusCode === StatusCodes.NOT_FOUND) {
            showErrorToast(response.data);
        } else{
            router.push('/dashboard');
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

    return (
        <>
            <form className="mt-8 space-y-6" action={handleSubmit}>
                <div className="relative">
                    <input
                        type="username"
                        name="username"
                        placeholder="Enter username"

                        value={username} // Définir la valeur de l'entrée sur la variable username
                        onChange={(e) => setUsername(e.target.value)} // Mettre à jour la valeur de l'entrée lorsqu'elle change
                        required
                        className="appearance-none relative block w-full px-4 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-blue-100 bg-opacity-50 rounded"
                    />
                    <button
                        type="button"
                        onClick={toggleUsernameEmpty}
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
                <button
                    type="submit"
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                        pending && 'opacity-50 cursor-not-allowed'
                    }`}
                    aria-disabled={pending}
                >
                    {pending ? 'Logging in...' : 'Sign in'}
                </button>
            </form>
            <ToastContainer/>
        </>
    );
}
