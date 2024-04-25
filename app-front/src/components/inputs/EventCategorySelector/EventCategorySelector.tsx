import React, { useEffect, useState } from 'react';
import { getEventCategories } from '@/api/eventCategories';

interface Category {
    id: number;
    name: string;
    // Incluye otras propiedades de los objetos de categoría si es necesario
}

interface EventCategorySelectorProps {
    label: string;
    placeholder: string;
}

const EventCategorySelector: React.FC<EventCategorySelectorProps> = ({ label, placeholder }) => {
    const [data, setData] = useState<Category[]>([]);

    useEffect(() => {
        getEventCategories().then(data => {
            setData(data);
        });
    }, []);

    return (
        <div className="flex flex-col">
            <label htmlFor={label} className="mb-2" style={{fontSize: '1.2em', color: '#143C3A', fontWeight: 'bold'}}>{label}</label>
            <select
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
                id={label}
            >
                <option value="">{placeholder}</option>
                {data.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default EventCategorySelector;