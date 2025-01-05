import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <img src={logo} alt="Costs" />
            </Link>
            <ul className={styles.navLinks}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li><Link to="/company">Empresa</Link></li>
                <li><Link to="/contact">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
