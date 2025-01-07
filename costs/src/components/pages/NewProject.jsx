import { useNavigate } from 'react-router-dom';

import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';

function NewProject() {
  const navigate = useNavigate(); // Substitui useHistory

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        navigate('/projects', { state: { msg: 'Projeto criado com sucesso!' } });
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.newProject}>
      <h1>Crie seu projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
