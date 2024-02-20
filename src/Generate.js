import React from 'react';

const Generate = ({ inventory, syllables }) => {

    // Helper function to select a syllable based on probability
    const selectSyllable = () => {
        const rand = Math.random();
        let cumProb = 0;
        for (const syllableObj of syllables) {
            const syllableKey = Object.keys(syllableObj)[0]; // Get the syllable pattern (e.g., "CV")
            const syllableValue = syllableObj[syllableKey]; // Get the probability value

            cumProb += syllableValue;
            if (rand <= cumProb) {
                return syllableKey; // Return the syllable pattern
            }
        }
        return null; // In case no syllable is selected
    };

    // Helper function to generate a sound based on a syllable pattern
    const generateSoundFromSyllable = (syllablePattern) => {
        return syllablePattern.split('').map(char => {
            if (char === 'C') {
                // Pick a consonant randomly
                const consonants = inventory.filter(sound => sound.type === 'consonant');
                return consonants[Math.floor(Math.random() * consonants.length)].sound;
            } else if (char === 'V') {
                // Pick a vowel randomly
                const vowels = inventory.filter(sound => sound.type === 'vowel');
                return vowels[Math.floor(Math.random() * vowels.length)].sound;
            }
            return '';
        }).join('');
    };

    // Generate 10 words
    const words = Array.from({ length: 10 }).map(() => {
        const selectedSyllable = selectSyllable();
        return generateSoundFromSyllable(selectedSyllable);
    });

    // Render the generated words
    return (
        <div>
            {words.map((word, index) => (
                <div key={index}>{word}</div>
            ))}
        </div>
    );
};

export default Generate;