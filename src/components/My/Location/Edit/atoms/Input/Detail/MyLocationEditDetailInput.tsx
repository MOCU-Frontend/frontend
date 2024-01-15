import React from 'react';
import styles from './MyLocationEditDetailInput.module.css';

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const MyLocationEditDetailInput: React.FC<Props> = ({
  value,
  handleChange,
  placeholder,
}: Props) => {
  return (
    <input
      type={'search'}
      placeholder={placeholder || ''}
      className={styles.input}
      value={value}
      onChange={handleChange}
    />
  );
};

export default MyLocationEditDetailInput;
