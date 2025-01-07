import styles from './Select.module.css';

function Select({ text, name, value, handleOnChange, options }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name} value={value || ''} onChange={handleOnChange}>
        <option value="" disabled>Selecione uma opção</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
