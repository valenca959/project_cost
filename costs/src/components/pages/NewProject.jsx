import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';

function NewProject() {
  return (
    <div className={styles.newProject}>
      <h1>Crie seu projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar Projeto"/>
    </div>
  );
}

export default NewProject;
