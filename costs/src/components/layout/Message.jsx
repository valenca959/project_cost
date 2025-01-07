import styles from './Message.module.css';
import { useState, useEffect } from 'react';

function Message({ message, type }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log('Mensagem recebida no Message:', message);
        if (!message) {
            setShow(false);
            return;
        }
        setShow(true);

        const timer = setTimeout(() => {
            setShow(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <>
            {show && (
                <div className={`${styles.message} ${styles[type]}`}>
                    <p>{message}</p>
                </div>
            )}
        </>
    );
}

export default Message;
