import React, { useState, useEffect } from 'react';

export interface NormalizeM {
    countryName: string;
    alpha2Code: string;
    callingCode: string;
}

interface PhoneProps {
    onSelectPhoneNumber: (phoneNumber: string, callingCode: string) => void;
}

const Phone: React.FC<PhoneProps> = ({ onSelectPhoneNumber }) => {
    const [countries, setCountries] = useState<NormalizeM[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<NormalizeM | null>(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [callingCode, setCallingCode] = useState('');

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch('https://restcountries.com/v2/all');
                const countriesData = await res.json();
                const normalizedCountries: NormalizeM[] = countriesData.map((country: any) => ({
                    countryName: country.name,
                    alpha2Code: country.alpha2Code as string,
                    callingCode: country.callingCodes[0],
                }));
                setCountries(normalizedCountries);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleCountrySelect = (country: NormalizeM) => {
        setSelectedCountry(country);
        setCallingCode(country?.callingCode || '');
        setPhoneNumber('');
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Permitir solo números en el campo de entrada
        if (!isNaN(value as any)) {
            setPhoneNumber(value);
        }
    };

    useEffect(() => {
        if (selectedCountry && phoneNumber) {
            const fullPhoneNumber = `+${callingCode}${phoneNumber}`;
            onSelectPhoneNumber(fullPhoneNumber, callingCode);
        }
    }, [selectedCountry, phoneNumber, callingCode, onSelectPhoneNumber]);

    return (
        <div className="flex items-center">
            <div className="mr-2">
                <select
                    value={selectedCountry?.alpha2Code || ''}
                    onChange={(event) => {
                        const countryCode = event.target.value;
                        const country = countries.find(country => country.alpha2Code === countryCode);
                        if (country) {
                            handleCountrySelect(country);
                        }
                    }}
                    className="bg-white border border-black rounded-md py-2 px-3 w-40 placeholder:font-normal text-black" 
                >
                    <option value="" disabled>Código de tu país</option>
                    {countries.map(country => (
                        <option key={country.alpha2Code} value={country.alpha2Code}>
                            {country.countryName} (+{country.callingCode})
                        </option>
                    ))}
                </select>
            </div>
            <input
                type="tel"
                placeholder="Numero de celular"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="bg-white border border-black rounded-md py-2 px-3 w-80 placeholder:font-normal text-black"
            />
        </div>
    );
};

export default Phone;
