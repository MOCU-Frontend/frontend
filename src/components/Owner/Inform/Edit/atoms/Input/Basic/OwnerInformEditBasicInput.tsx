import React from 'react';
import OwnerInformEditBasicBox from '../../Box/OwnerInformEditBasicBox';
import styles from './OwnerInformEditBasicInput.module.css';

interface Props {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const OwnerInformEditBasicInput: React.FC<Props> = ({
  text,
  handleChange,
  placeholder,
}: Props) => {
  return (
    <OwnerInformEditBasicBox>
      <input
        type='text'
        className={styles.input}
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </OwnerInformEditBasicBox>
  );
};

export default OwnerInformEditBasicInput;
