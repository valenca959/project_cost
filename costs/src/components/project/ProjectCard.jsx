import styles from './ProjectCard.module.css';

import {Link} from 'react-router-dom';
import {BsPencil, BsTrashFill} from 'react-icons/bs';

function ProjectCard({ id, name, budget, category_name, handleRemove }) {

    const remove = (event) => {
        event.preventDefault();
        handleRemove(id);
    }
    
    return (
        <div className={styles.ProjectCard}>
            <div className={styles.project_info}>
                <h3>{`${name}`}</h3>
                <p><strong>Categoria:</strong> {category_name}</p>
                <p><strong>Orçamento:</strong> R$ {budget}</p>
            </div>
            <div>
                <Link to={`/project/${id}`}>
                    <BsPencil />Editar
                </Link>
                <button onClick={remove}>
                    <BsTrashFill />Excluir
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;