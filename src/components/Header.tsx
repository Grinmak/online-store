import '../css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='store-logo'>
        <Link to='/'>Logo</Link>
      </div>
      <div className='cart-total'>Cart total</div>
      <div className='cart-logo'>
        <Link to='/cart'>Basket</Link>
      </div>
    </header>
  );
}

export default Header;
