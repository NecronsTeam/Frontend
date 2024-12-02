import React, { FC, InputHTMLAttributes, PropsWithChildren } from 'react';
import { TextField } from '../../../hooks/useTextFormField';
import styles from './ValidableInput.module.scss';

interface ValidableInputProps extends InputHTMLAttributes<HTMLInputElement> {
  field: TextField
}

const ValidableTextInput:FC<PropsWithChildren<ValidableInputProps>> = ({children, field, ...props}) => {
  return (
    <div>
      <div className={styles.inputContainer}>
        <input id={field.id} 
          value={field.value} 
          onChange={field.handleChange} 
          onBlur={field.handleBlur}
          {...props}/>
        {children}
      </div>
      <div className={`${styles.error} ${!!field.error ? "" : '_hidden'}`}>
        {field.error}
      </div>
    </div>
  );
};

export default ValidableTextInput;