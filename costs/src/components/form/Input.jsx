import styles from './Input.module.css';

function Input({ type, text, name, value, handleOnChange, placeholder, autoComplete = "off" }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>
        {text}
        <input    
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </label>
    </div>
  );
}

export default Input;
