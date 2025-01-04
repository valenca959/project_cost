import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>© 2025 Costs. Todos os direitos reservados.</p>
                <ul className={styles.socialLinks}>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/valenca959" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
