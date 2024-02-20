import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Syllable = ({ syllables, setSyllables }) => {
    const [inputText, setInputText] = useState('');

    const navigate = useNavigate();
    const handleSubmit = () => {
        const keyValuePairs = inputText.split(',').map(item => item.split(':').map(part => part.trim()));

        const keysSeen = new Set();
        let totalValue = 0;
        const syllablesArray = [];
        let isValid = true;

        for (const [key, valueStr] of keyValuePairs) {
            // Validate and capitalize the key
            const validKey = key.toUpperCase();
            if (!/^[CV]{1,}$/.test(validKey)) {
                alert(`Invalid key found: ${key}. Keys may only include C, c, V, or v.`);
                isValid = false;
                break;
            }

            if (keysSeen.has(validKey)) {
                alert(`Duplicate key found after capitalization: ${validKey}. Each key must be unique.`);
                isValid = false;
                break;
            }
            keysSeen.add(validKey);

            const value = Number(valueStr);
            if (isNaN(value)) {
                alert(`Invalid value for key ${validKey}: ${valueStr}. Ensure all values are numbers.`);
                isValid = false;
                break;
            }

            totalValue += value;
            syllablesArray.push({ [validKey]: value });
        }

        if (isValid && Math.abs(totalValue - 1) > Number.EPSILON) {
            alert(`The total of values does not add up to 1. Total is: ${totalValue}.`);
            isValid = false;
        }

        if (isValid) {
            // Proceed only if all checks pass
            setSyllables(syllablesArray);
            navigate('/');
        }
    };

    return (
        <div>
            Set Probabilitsic FSA:
            <input
                type='text'
                placehorder='e.g. CV: 0.4, CVC: 0.6'
                onChange={(event) => setInputText(event.target.value)}
            >
            </input>
            <button
                onClick={handleSubmit}
            >
                Submit
            </button>

            <ul>
                {syllables.map((syllable, index) => (
                    <li key={index}>
                        {Object.entries(syllable).map(([key, value]) => (
                            <span key={key}>{`${key}: ${value}`}</span>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Syllable;