import React, { useState } from 'react';

interface CheckboxLimitProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean, limit: number) => void;
}

const CheckboxLimit: React.FC<CheckboxLimitProps> = ({ label, checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);
    const [limit, setLimit] = useState(0);

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        // Llamar a la función onChange para pasar el evento y el valor de limit
        onChange(event.target.checked, limit);
    };

    const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newLimit = Number(event.target.value);
        setLimit(newLimit);
        onChange(isChecked, newLimit); // Llamar a onChange aquí también
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label htmlFor={label} className="mb-2" style={{ fontSize: '1.2em', color: '#143C3A', fontWeight: 'bold', marginRight: '10px' }}>
                    {label}
                </label>
                <input
                    type="checkbox"
                    id={label}
                    checked={isChecked}
                    onChange={handleSelectChange}
                    style={{ width: '25px', height: '25px', backgroundColor: checked ? '#143C3A' : 'transparent', borderRadius: '4px', marginBottom: '5px' }}
                />
            </div>
            <div style={{ opacity: checked ? 1 : 0.5 }}>
                <input
                    type="number"
                    name="limit"
                    id="limit"
                    disabled={!isChecked}
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
                    placeholder="0"
                    onChange={handleLimitChange}
                />
            </div>
        </div>
    );
};

export default CheckboxLimit;