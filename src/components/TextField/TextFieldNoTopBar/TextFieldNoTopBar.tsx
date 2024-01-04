import React from 'react';
import ModalBasic from '../../Modal/atoms/Basic/ModalBasic';
import InputWithCharCounter from '../atoms/InputWithCharCounter/InputWithCharCounter';
import styles from './TextFieldNoTopBar.module.css';
interface Props {
  placeholder: string;
}

const TextFieldNoTopBar: React.FC<Props> = ({ placeholder }: Props) => {
  return (
    <ModalBasic>
      <div className={styles.wrapper}>
        <InputWithCharCounter placeholder={placeholder} />
      </div>
    </ModalBasic>
  );
};

export default TextFieldNoTopBar;
