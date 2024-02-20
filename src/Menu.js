import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = ({ inventory }) => {
    return (
        <div>
            {inventory.length === 0 ? (
                <h1>
                    Looks like your inventory is empty, proceed to add phonemes in <Link to='./inventory'>the inventory</Link>.
                </h1>
            ) : (
                <div className='menu-options'>
                    <Link to='./inventory'>the inventory</Link>
                    <Link to='./syllable'>set syllable constraints</Link>
                    <Link to='/generate'>Generate text</Link>
                </div>
            )}
        </div>
    );
};

export default Menu;