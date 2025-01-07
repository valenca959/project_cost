import { useState, useEffect } from 'react';
import styles from './ProjectForm.module.css';

import Select from '../form/Select';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  const submit = (event) => {
    event.preventDefault();
    handleSubmit(project);
  }

  function handleChange(event) {
    setProject({
      ...project,
      [event.target.name]: event.target.value
    });
  }

  function handleCategory(event) {
    const selectedCategory = event.target.options[event.target.selectedIndex];
    setProject({
      ...project,
      category_id: event.target.value,
      category_name: selectedCategory.text
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input 
        type="text" 
        text="Nome do projeto" 
        name="name" 
        placeholder="Insira o nome do projeto" 
        handleOnChange={handleChange} 
        value={project.name || ''}
        autoComplete="name"
      />
      <Input 
        type="number" 
        text="Valor do orçamento" 
        name="budget" 
        placeholder="Insira o orçamento total" 
        handleOnChange={handleChange} 
        value={project.budget || ''}
        autoComplete="off"
      />
      <Select 
        name="category_id" 
        text="Selecione a categoria" 
        options={categories} 
        handleOnChange={handleCategory} 
        value={project.category_id || ''}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
