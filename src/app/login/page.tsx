'use client'

import {authenticate, IUser} from '@/app/lib/actions';
import { useFormStatus } from 'react-dom';
import {useRouter} from "next/navigation";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Connexion
                    </h2>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}

function LoginForm() {
    const { pending } = useFormStatus();
    const router = useRouter();
    async function handleSubmit (formData: FormData) {

        const email =  formData.get('email') ?? ''
        const password =  formData.get('password') ?? ''
        const user: IUser = {
            email: email.toString(),
            password:password.toString()
        }
        //await authenticate(user);
        router.push('/dashboard')
    };

    return (
        <form className="mt-8 space-y-6" action={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    pending && 'opacity-50 cursor-not-allowed'
                }`}
                aria-disabled={pending}
            >
                {pending ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
}
