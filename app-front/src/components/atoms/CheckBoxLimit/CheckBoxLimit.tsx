import React, { useState } from 'react';

interface CheckboxLimitProps {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxLimit: React.FC<CheckboxLimitProps> = ({ label }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label htmlFor={label} className="mb-2" style={{fontSize: '1.2em', color: '#143C3A', fontWeight: 'bold', marginRight: '10px'}}>
                    {label}
                </label>
                <input
                    type="checkbox"
                    id={label}
                    checked={checked}
                    onChange={handleChange}
                    style={{ width: '25px', height: '25px', backgroundColor: checked ? '#143C3A' : 'transparent', borderRadius: '4px', marginBottom: '5px' }}
                />
            </div>
            <div style={{ opacity: checked ? 1 : 0.5 }}>
                <input
                    type="number"
                    name="limit"
                    id="limit"
                    disabled={!checked}
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
                    placeholder="0"
                />
            </div>
        </div>
    );
};

export default CheckboxLimit;