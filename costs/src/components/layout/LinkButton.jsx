import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

function LinkButton({ text, link }) {
    return (
        <Link to={link} className={styles.linkButton}>
            {text}
        </Link>
    );
}

export default LinkButton;