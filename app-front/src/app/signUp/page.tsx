'use client';

import React, { FormEvent, ReactElement, useEffect, useState } from 'react';
import { Btn } from '@/components/atoms/Btn/Btn';
import { postRegisterUser } from '@/api/postRegisterUser';
import EmailField from '@/components/templates/inputs/EmailTextField/EmailField';
import SignUpPassword from '@/components/templates/inputs/SignUpPassword/SignUpPassword';

export default function SignUpPage(): ReactElement {
    const [requirements, setRequeriments] = useState(false);
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [matchEmails, setMatchEmails] = useState(false);
    const [selects, setSelects] = useState({
        idType: '',
        nationalId: '',
        phoneCountry: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [registeredUser, setRegisteredUser] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!requirements) {
            setError('Por favor revisa el campo contraseña');
            return;
        }

        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const requiredFields = [
            'firstName',
            'firstLastName',
            'secondLastName',
            'phoneNum',
            'email',
            'pass',
            'idNum',
        ];

        if (requiredFields.some((field) => !formData.get(field))) {
            setLoading(false);
            setError('Los campos del formulario no están completos');
            return;
        }

        const userData = {
            id_type: selects.idType ?? '',
            id_num: (formData.get('idNum') as string) ?? '',
            national_id: selects.nationalId ?? '',
            first_name: (formData.get('firstName') as string) ?? '',
            second_name: (formData.get('secondName') as string) ?? '',
            third_name: '',
            first_last_name: (formData.get('firstLastName') as string) ?? '',
            second_last_name: (formData.get('secondLastName') as string) ?? '',
            third_last_name: '',
            email: (formData.get('email') as string) ?? '',
            password: (formData.get('pass') as string) ?? '',
            phone: (formData.get('phoneNum') as string) ?? '',
            phone_country: selects.nationalId ?? '',
            avatar: '',
        };

        const raw = JSON.stringify(userData);

        const resp = await postRegisterUser(raw);
        if (!resp.success) {
            setLoading(false);
            setError('Error al crear el usuario: ' + resp.error.message);
        } else {
            setLoading(false);
            setRegisteredUser(true);
        }
    };

    useEffect(() => {
        setMatchEmails(email === emailConfirm);
    }, [email, emailConfirm]);

    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            <div className="hidden lg:flex flex-col justify-between bg-[#143C3A] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
                {/* Sidebar Content */}
                <div className="flex items-center justify-start space-x-3">
                    <span className="bg-black rounded-full w-8 h-8"></span>
                    <a href="#" className="font-medium text-xl">FindUs</a>
                </div>
                <div className='space-y-5'>
                    <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Crea una cuenta y únete a la comunidad</h1>
                </div>
                <p className="font-medium">© 2024 FindUs</p>
            </div>

            {/* Formulario de Registro */}
            <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                <div className="flex lg:hidden justify-between items-center w-full py-4">
                    <div className="flex items-center justify-start space-x-3">
                        <span className="bg-black rounded-full w-6 h-6"></span>
                        <a href="#" className="font-medium text-lg">FindUs</a>
                    </div>
                   
                </div>

                {/* Contenedor del Formulario */}
                <form onSubmit={handleSubmit} className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
                    {/* Título del Formulario */}
                    <div className="flex flex-col space-y-2 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-black">¡Crea una cuenta!</h2>
                        <p className="mb-4 text-sm text-gray-700">Estás a un click de unirte a la mejor plataforma para hacer conexiones y conocer los mejores eventos </p>
                        <p className="mb-4 text-sm text-gray-700">¡Llena todos los campos para unirte a la comunidad!</p>
                    </div>

                    <div className="flex flex-col max-w-md space-y-5">
                        <EmailField
                        />
                        <SignUpPassword />
                                        <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Crear cuenta</button>

                    </div>
                </form>
            </div>
        </div>
    );
}
