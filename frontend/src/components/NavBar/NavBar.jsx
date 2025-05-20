import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/panda.png';

const NavBar = props => {
    return (
    <nav className='navbar'>
        <Link to='/' className='logo-link'>
            <img src={logo} alt="logo" className='logo'/>
        </Link>

        <ul className='links'>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/about'>Contact</Link></li>
            {/* <li><a href="">Contact</a></li> */}
        </ul>
    </nav>

    )
}

export default NavBar