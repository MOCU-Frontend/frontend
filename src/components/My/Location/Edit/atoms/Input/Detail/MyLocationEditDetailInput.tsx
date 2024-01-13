import React from 'react';
import styles from './MyLocationEditDetailInput.module.css';

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyLocationEditDetailInput: React.FC<Props> = ({
  value,
  handleChange,
}: Props) => {
  return (
    <input type={'search'} className={styles.input} onChange={handleChange} />
  );
};

export default MyLocationEditDetailInput;
