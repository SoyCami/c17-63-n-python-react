import React, { ReactElement, useState, ChangeEvent, CSSProperties } from 'react';

interface InputFieldProps {
    type: string;
    label: string;
    placeholder: string;
    validate: (value: string | FileList) => boolean;
    errorMessage: string;
    style?: CSSProperties;
}

export default function InputField({ type, label, placeholder, validate, errorMessage, style }: InputFieldProps): ReactElement {

    const [value, setValue] = useState<string | FileList>('');
    const [error, setError] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (type === 'file' && event.target instanceof HTMLInputElement) {
            setValue(event.target.files!);
            const isValid = validate(event.target.files!);
            setError(isValid ? '' : errorMessage);
        } else {
            setValue(event.target.value);
            const isValid = validate(event.target.value);
            setError(isValid ? '' : errorMessage);
        }
    };

    return (
        <div className="flex flex-col" style={style}>
            <label htmlFor={label} className="mb-2" style={{fontSize: '1.2em', color: '#143C3A', fontWeight: 'bold'}}>{label}</label>
            {type === 'description' ? (
                <textarea
                    id={label}
                    value={value as string}
                    onChange={handleChange}
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
                    placeholder={placeholder}
                    required
                    rows={3}
                />
            ) : (
                <input
                    type={type}
                    id={label}
                    value={type === 'file' ? undefined : value as string}
                    onChange={handleChange}
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
                    placeholder={placeholder}
                    required
                />
            )}
            <div className="text-red-500 mt-2">{error}</div>
        </div>
    );
};