import styles from './Input.module.css';

function Input({ type, text, name, value, handleChange, placeholder }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>
        {text}
        <input    
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            />
        </label>
    </div>
  );
}

export default Input;