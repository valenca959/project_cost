import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Projects.module.css';
import Message from '../layout/Message';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';

function Projects() {
    const [projects, setProjects] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const [msg, setMsg] = useState('');

    useEffect(() => {
        if (location.state?.msg) {
            setMsg(location.state.msg);
            navigate(location.pathname, { replace: true });
        }
    }, [location, navigate]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/projects', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Erro ao carregar projetos:', error);
            }
        };
        fetchProjects();
    }, []);

    const handleRemove = (id) => {
        setProjects(projects.filter((project) => project.id !== id));
    };

    return (
        <div className={styles.Projects}>
            <div className={styles.tittle_container}>
                <h1>Meus Projetos</h1>
                <LinkButton link="/newproject" text="Criar Projeto" />
            </div>
            {msg && <Message type="success" message={msg} />}
            <div className={styles.project_list}>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category_id={project.category_id}
                            category_name={project.category_name}
                            handleRemove={handleRemove}
                        />
                    ))
                ) : (
                    <p>Nenhum projeto encontrado.</p> 
                )}
            </div>
        </div>
    );
}

export default Projects;
