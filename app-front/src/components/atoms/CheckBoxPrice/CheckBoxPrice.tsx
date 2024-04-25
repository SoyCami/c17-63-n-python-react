import React, {useState} from 'react';

interface CheckBoxPriceProps {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}

const CheckBoxPrice: React.FC<CheckBoxPriceProps> = ({ label, style }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <div style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px'}}>
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
                <div className="relative mt-2 rounded-md shadow-sm">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 sm:text-sm">$</span>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        disabled={!checked}
                        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black pl-7"
                        placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">
                            Currency
                        </label>
                        <select
                            id="currency"
                            name="currency"
                            disabled={!checked}
                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                            <option>COP</option>
                            <option>USD</option>
                            <option>EUR</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckBoxPrice;