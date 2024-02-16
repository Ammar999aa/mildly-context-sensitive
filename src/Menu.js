import { Link } from 'react-router-dom';

const Menu = ({ inventory }) => {
    return (
        <div>
            {inventory.length === 0 ? (
                <h1>
                    Looks like your inventory is empty, proceed to add phonemes in <Link to='./inventory'>the inventory</Link>.
                </h1>
            ) : (
                <Link to='./inventory'>the inventory</Link>
            )}
        </div>
    );
};

export default Menu;