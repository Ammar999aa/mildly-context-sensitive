
import './ChooseInventory.css'

const ChooseInventory = ({ inventory, toggleInventoryItem }) => {
    const handleSubmit = () => {

    }

    // Expanded list of IPA symbols by category
    const phonemes = {
        "Plosives": ['p', 'b', 't', 'd', 'k', 'g'],
        "Nasals": ['m', 'n', 'ŋ'],
        "Fricatives": ['f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'h'],
        "Approximants": ['ɹ', 'j', 'w', 'l'],
        "Vowels": ['i', 'e', 'æ', 'a', 'ɑ', 'o', 'u'],
        // Add more categories as needed
    };

    return (
        <div id="choose-inventory">
            {Object.entries(phonemes).map(([category, items]) => (
                <div key={category} className='inventory-row'>
                    <div>
                        <h3>{category}</h3>
                        <div className='row-list'>
                            {items.map((item) => (
                                <div
                                    key={item}
                                    className={`row-item ${inventory.includes(item) ? 'selected-phoneme' : ''}`}
                                    onClick={() => toggleInventoryItem(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <button
                onClick={handleSubmit}
                className='submit-button'
            >
                Submit
            </button>
        </div>
    );
};

export default ChooseInventory;