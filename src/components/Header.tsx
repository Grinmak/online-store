import '../css/Header.css';
import { Link } from 'react-router-dom';
import mainLogo from '../logo_dummy.png';
import cartLogo from '../cart.png';

function Header() {
  return (
    <header className='header'>
      <div className='store-logo'>
        <Link to='/'>
          <img className='logo-img' src={mainLogo} alt='main logo' />
        </Link>
      </div>

      <div className='cart'>
        <div className='cart-total'>Cart total $___</div>
        <div className='cart-logo'></div>
        <Link to='/cart'>
          <img className='cart-img' src={cartLogo} alt='cart logo' />
        </Link>
      </div>
    </header>
  );
}

export default Header;
