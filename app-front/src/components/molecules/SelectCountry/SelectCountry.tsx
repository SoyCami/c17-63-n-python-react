import React, { useState, useEffect, useRef, useCallback } from 'react';
import { alpha2Code } from '../../../options/Alpha2Code.option';
import { IconClose } from '../../svgs/IconClose';
import { IconArrow } from '../../svgs/IconArrow';
import { InputM } from '../../atoms/Input/Input.model';
import Image from 'next/image';

interface NormalizeM {
    selectedCountry: string;
    countryName: string;
    nativeName: string;
    alpha2Code: alpha2Code;
    callingCode: string;
    flagUrl: string;
    formatField: string;
}

interface SelectCountryMRProps extends InputM {
    onSelectCountry?: (country: (NormalizeM & { fieldName: string }) | null) => void;
    widthOptionList?: string;
    withFlag?: string;
    valueDisplay?: 'countryName' | 'nativeName' | 'alpha2Code' | 'callingCode' | 'none';
    defaultCountry?: alpha2Code;
    valueCountry?: alpha2Code;
    iconSize?: string;
}

const SelectCountry: React.FC<SelectCountryMRProps> = ({
    className = '',
    invalid,
    valueDisplay = 'countryName',
    onSelectCountry,
    name,
    disabled,
    valueCountry,
    defaultCountry,
}) => {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState<NormalizeM[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<NormalizeM[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<NormalizeM | null>(null);
    const [openOptions, setOpenOptions] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

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
        let country = null;
        if (valueCountry || defaultCountry) {
            country = countries.find(country => country.alpha2Code === (valueCountry || defaultCountry));
        }
        if (country) {
            setSelectedCountry(country);
            onSelectCountry?.(country ? { ...country, fieldName: name } : null);
        }
    }, [countries, defaultCountry, name, onSelectCountry, valueCountry]);

    const countryDisplay = useCallback((country: NormalizeM): any => {

        const SELECTED_COUNTRY_DISPLAY = {
            countryName: country.countryName,
            nativeName: country.nativeName,
            alpha2Code: country.alpha2Code,
            callingCode: `+(${country.callingCode})`,
            none: country.alpha2Code,
        };
        return (
            <div style={{ color: 'black' }}>
                {SELECTED_COUNTRY_DISPLAY[valueDisplay]}
            </div>
        );
    }, [valueDisplay]);

    const handleCountrySelect = (country: NormalizeM | null) => {
        setSelectedCountry(country);
        setInputValue(country ? countryDisplay(country) : '');
        setOpenOptions(false);
        onSelectCountry?.(country ? { ...country, fieldName: name } : null);
        // Envía los datos al backend para guardarlos en la base de datos
        if (country) {
            saveCountryToDatabase(country);
        }
    };

    // Función para enviar los datos al backend
    const saveCountryToDatabase = async (country: NormalizeM) => {
        try {
            const response = await fetch('/ruta-al-backend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(country)
            });
            if (response.ok) {
                console.log('Datos guardados exitosamente en la base de datos.');
            } else {
                console.error('Hubo un error al guardar los datos en la base de datos.');
            }
        } catch (error) {
            console.error('Hubo un error en la solicitud:', error);
        }
    };

    const [inputValue, setInputValue] = useState<string>('');
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    return (
        <div className={`${className} relative`}>
            <div
                className={`${
                    openOptions ? 'border-b-2 border-gray-500' : ''
                } flex items-center justify-between border text-black border-gray-300 rounded-md p-2`}
                onClick={e => {
                    const clickedElement = e.target;
                    const closestSvgElement = (clickedElement as HTMLElement).closest('svg');
                    if (!closestSvgElement?.classList.contains('arrow-icon')) {
                        inputRef.current?.focus();
                        setOpenOptions(true);
                    }
                }}
            >
                <input
                    className={`flex-grow text-black ${
                        openOptions ? 'cursor-text' : 'cursor-pointer'
                    }`}
                    type="text"
                    ref={inputRef}
                    autoComplete="off"
                    disabled={disabled || loading}

                    placeholder={showPlaceholder ? 'Selecciona tu país' : ''}
                    onChange={e => {
                        setOpenOptions(true);
                        const value = e.target.value;
                        setInputValue(value);
                        setShowPlaceholder(value === '');
                        const filteredCountries = countries.filter(country =>
                            country.formatField.toLowerCase().includes(value.toLowerCase())
                        );
                        setFilteredCountries(filteredCountries);
                        setSelectedCountry(null);
                    }}
                    onFocus={() => {
                        setOpenOptions(true);
                        setShowPlaceholder(false);
                    }}
                    onBlur={event => {
                        setOpenOptions(false);
                    }}
                    // value={inputValue || countryDisplay(selectedCountry) || ''}

                />
                {!disabled && !loading && !valueCountry && (
                    <div className="flex items-center">
                        {inputValue && (
                            <IconClose
                                className="cursor-pointer w-4 h-4 mr-2"
                                onClick={() => {
                                    setOpenOptions(true);
                                    setInputValue('');
                                    setShowPlaceholder(true);
                                    setFilteredCountries(countries);
                                    setSelectedCountry(null);
                                }}
                            />
                        )}
                        <IconArrow
                            className={`arrow-icon w-4 h-4 transform transition-transform ${
                                openOptions ? 'rotate-180' : ''
                            }`}
                            onClick={() => {
                                if (!openOptions) {
                                    inputRef.current?.focus();
                                } else {
                                    inputRef.current?.blur();
                                }
                                setOpenOptions(!openOptions);
                            }}
                        />
                    </div>
                )}
            </div>
            {!disabled && !loading && !valueCountry && (
                <div className={`${
                    openOptions ? '' : 'hidden'
                } absolute top-full left-0 right-0 border border-gray-300 text-black rounded-md overflow-auto bg-white max-h-60`}>
                    {filteredCountries.length === 0 ? (
                        <div className="p-2">No se encontraron resultados</div>
                    ) : (
                        filteredCountries.map(country => (
                            <div
                                className="flex items-center p-2 cursor-pointer text-black"
                                key={country.alpha2Code}
                                onClick={() => {
                                    if (selectedCountry) {
                                        handleCountrySelect(selectedCountry);
                                    }
                                }}
                            >
                                <Image
                                width={20}
                                    height={15}
                                    className="w-8 h-6 mr-2"
                                    src={country?.flagUrl}
                                    alt={country?.countryName}
                                />
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