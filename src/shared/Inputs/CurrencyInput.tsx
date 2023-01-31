import React, { ChangeEvent } from 'react';

import { CODES } from '../../constants';

type CurrencyInputProps = {
    activeCode: string;
    value: string;
    setCurrency: (currency: string) => void;
    handleInput: (value: string) => void;
    label?: string;
};

export const CurrencyInput = ({
    activeCode,
    setCurrency,
    value,
    handleInput,
    label,
}: CurrencyInputProps) => {
    return (
        <div>
            {label && (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            )}
            <label className="input-group">
                <input
                    type="text"
                    placeholder="0"
                    className="input input-bordered"
                    value={value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInput(e?.target?.value)
                    }
                />
                <select
                    className="select select-bordered"
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setCurrency(e?.target?.value ?? '')
                    }
                    value={activeCode}
                >
                    {Object.keys(CODES).map((code: string) => (
                        <option key={code}>{CODES[code]}</option>
                    ))}
                </select>
            </label>
        </div>
    );
};
