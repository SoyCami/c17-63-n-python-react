import React, { useEffect, useState, } from 'react';
import { getEventCategories } from '@/api/eventCategories';

interface Category {
    id: number;
    name: string;
    // Incluye otras propiedades de los objetos de categoría si es necesario
}

interface EventCategorySelectorProps {
    label: string;
    placeholder: string;
    style: React.CSSProperties;
    value: string | FileList | undefined;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const EventCategorySelector: React.FC<EventCategorySelectorProps> = ({ label, placeholder, style, value, onChange }) => {
    const [data, setData] = useState<Category[]>([]);

    useEffect(() => {
        getEventCategories().then(data => {
            console.log(data)
            setData(data);
        });
    }, []);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event); // Llamar a la función onChange para pasar el evento al componente padre
    };

    return (
        <div style={{ ...style, marginTop: '10px', marginBlockEnd: '15px' }}>
            <div className="flex flex-col">
                <label htmlFor={label} className="mb-2" style={{ fontSize: '1.2em', color: '#143C3A', fontWeight: 'bold' }}>{label}</label>
                <select
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
                    id={label}
                    value={value as string} // Asignar el valor seleccionado al componente select
                    onChange={handleSelectChange} // Manejar el cambio de selección
                >
                    <option value="">{placeholder}</option>
                    {data.map(category => (
                        <option key={category.id} value={category.id.toString()}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default EventCategorySelector;