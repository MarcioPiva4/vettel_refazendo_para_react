import React, { useState } from 'react';
import styles from './style.module.scss';

export default function FormModelRegister({ title, subtitle, labels, types, children, onSubmit, shadow }) {
  const [focusedInput, setFocusedInput] = useState(null);
  const [inputValues, setInputValues] = useState(Array(labels.length).fill(''));

  const handleFocus = (index) => {
    setFocusedInput(index);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValues);
  };

  return (
    <section className={styles.form__container}>
      <h1 style={{'textShadow': shadow}}>{title}</h1>
      <h3>{subtitle}</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        {labels.map((label, index) => (
          <div key={index} className={styles.form__content}>
            <label className={focusedInput === index ? styles.focusedLabel : ''}>
              {label}
            </label>
            <input
              type={types[index]}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              onChange={(e) => handleInputChange(index, e.target.value)}
            ></input>
          </div>
        ))}
        <button type='submit'>{children}</button>
      </form>
    </section>
  );
}
