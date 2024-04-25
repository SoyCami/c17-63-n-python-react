import React, { useState, useEffect, useRef, useCallback } from 'react';
import { alpha2Code } from '../../../options/Alpha2Code.option';
// import { IconClose } from '../../svgs/IconClose';
// import { IconArrow } from '../../svgs/IconArrow';
import { InputM } from '../../atoms/Input/Input.model';

interface NormalizeM {
    countryName: string;
    nativeName: string;
    alpha2Code: alpha2Code;
    callingCode: string;
    flagUrl: string;
    formatField: string;
}

interface SelectCountryMRProps extends InputM {
    onSelectCountry?: (country: (NormalizeM & { fieldName: string }) | null) => void;
    defaultCountry?: alpha2Code;
}

const SelectCountry: React.FC<SelectCountryMRProps> = ({
    className = '',
    onSelectCountry,
    name,
    defaultCountry,
}) => {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState<NormalizeM[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<NormalizeM[]>([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [openOptions, setOpenOptions] = useState(false);
    const inputRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        const getCountries = async () => {
            const res = await fetch('https://restcountries.com/v2/all');
            const countries = await res.json();
            const normalizedCountries: NormalizeM[] = countries.map((country: any) => ({
                countryName: country.name,
                nativeName: country.nativeName,
                alpha2Code: country.alpha2Code as alpha2Code,
                callingCode: country.callingCodes[0],
                flagUrl: country.flag,
                formatField: `${country.name} (${country.alpha2Code})`,
            }));
            setCountries(normalizedCountries);
            setFilteredCountries(normalizedCountries);
            setLoading(false);
        };
        getCountries();
    }, []);

    useEffect(() => {
        if (countries.length === 0) return;
        if (defaultCountry) {
            const country = countries.find(country => country.alpha2Code === defaultCountry);
            if (country) {
                setSelectedCountry(country.countryName);
                onSelectCountry?.({ ...country, fieldName: name });
            }
        }
    }, [countries, defaultCountry, name, onSelectCountry]);

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountryName = event.target.value;
        setSelectedCountry(selectedCountryName);
        const country = countries.find(country => country.countryName === selectedCountryName);
        onSelectCountry?.(country ? { ...country, fieldName: name } : null);
    };

    return (
        <div className={`${className} relative`}>
           <select
    value={selectedCountry}
    onChange={handleCountryChange}
    disabled={loading}
    ref={inputRef}
    className="w-full flex px-3 py-3 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium text-black placeholder-gray-400"
>
    <option value="" disabled className="text-gray-400"> 
        Selecciona tu país
    </option>
    {filteredCountries.map(country => (
        <option key={country.alpha2Code} value={country.countryName}>
            {country.formatField}
        </option>
    ))}
</select>
            {!loading && (
                <div className={`${
                    openOptions ? '' : 'hidden'
                } absolute top-full left-0 right-0 border border-gray-300 rounded-md overflow-auto bg-white max-h-60`}>
                    {filteredCountries.length === 0 ? (
                        <div className="p-2">No se encontraron resultados</div>
                    ) : (
                        filteredCountries.map(country => (
                            <div
                                className="flex items-center p-2 cursor-pointer text-black"
                                key={country.alpha2Code}
                                onClick={() => {
                                    setSelectedCountry(country.countryName);
                                    setOpenOptions(false);
                                    onSelectCountry?.({ ...country, fieldName: name });
                                }}
                            >
                        
                                <span className="text-black">{country.formatField}</span>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default SelectCountry;
