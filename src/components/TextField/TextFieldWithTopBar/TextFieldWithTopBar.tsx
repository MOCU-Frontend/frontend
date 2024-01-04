import React from 'react';
import ModalBasic from '../../Modal/atoms/Basic/ModalBasic';
import InputWithCharCounter from '../atoms/InputWithCharCounter/InputWithCharCounter';
import TextFieldTopBar from '../atoms/TopBar/TextFieldTopBar';
import styles from './TextFieldWithTopBar.module.css';
interface Props {
  placeholder: string;
}

const TextFieldWithTopBar: React.FC<Props> = ({ placeholder }: Props) => {
  return (
    <ModalBasic>
      <TextFieldTopBar onClickCheckBtn={() => {}} onClickXBtn={() => {}} />
      <div className={styles.wrapper}>
        <InputWithCharCounter placeholder={placeholder} />
      </div>
    </ModalBasic>
  );
};

export default TextFieldWithTopBar;
