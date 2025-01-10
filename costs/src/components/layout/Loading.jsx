import style from './Loading.module.css';

import loading from '../../img/loading.svg';


function Loading() {
    return (
        <div className={style.loading_container}>
            <img className={style.loading} src={loading} alt="Loading" />
        </div>
    );
    }

export default Loading;