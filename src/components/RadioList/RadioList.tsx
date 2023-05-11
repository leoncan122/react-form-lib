import React, { useState } from 'react';
import '../../../public/global.css'

interface RadioProps {
    title?: string;
    name: string;
    options: string[];
    onChange: (selected: string) => void;
    selectedValue?: string;
    columns?: number;
}

const RadioList: React.FC<RadioProps> = ({ title, options, onChange, selectedValue, columns = 1, ...props }) => {
    let selected = selectedValue || options[0]

    const sortedOptions = options.sort();
    const columnLength = Math.ceil(sortedOptions.length / columns);


    return (
        <div className='question-body'>
            <h2>{title}</h2>
            {Array.from({ length: columns }, (_, i) => (
                <div key={i} >
                    {sortedOptions.slice(i * columnLength, (i + 1) * columnLength).map((option, index) => (
                        <label key={i * index} >
                            <input
                                type="radio"
                                value={option}
                                {...props}
                                defaultChecked={selected === option}
                            />
                            {option}
                            {option === 'Other' && (
                            <input
                                type="text"
                                value={option}
                                {...props}
                                name={`${props.name}Other`}
                                defaultChecked={selected === option}
                            />
                        )}
                        </label>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default RadioList;