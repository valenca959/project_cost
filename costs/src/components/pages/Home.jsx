import styles from './Home.module.css';
import savings from '../../img/savings.svg';

import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1>Controle seus custos</h1>
                    <p>Com o Costs você pode controlar seus custos de forma simples e eficiente.</p>
                    <LinkButton link="/newproject" text="Criar Projeto"/>
                </div>
                <div className={styles.image}>
                    <img src={savings} alt="Controle seus custos" />
                </div>
            </div>
        </section>
    );
}

export default Home;
