import styles from './ProjectForm.module.css';

import Select from '../form/Select';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({btnText}) {
  return (
    <form className={styles.form}>
        <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />
        <Input type="number" text="Valor do orçamento" name="budget" placeholder="Insira o orçamento total" />
        <Select name="category_id" text="Selecione a categoria" />
        <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
