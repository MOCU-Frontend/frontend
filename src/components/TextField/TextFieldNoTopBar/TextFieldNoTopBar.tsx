import React from 'react';
import ModalBasic from '../../Modal/atoms/Basic/ModalBasic';
import InputWithCharCounter from '../atoms/InputWithCharCounter/InputWithCharCounter';
import styles from './TextFieldNoTopBar.module.css';
interface Props {
  placeholder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextFieldNoTopBar: React.FC<Props> = ({
  placeholder,
  text,
  setText,
}: Props) => {
  return (
    <ModalBasic>
      <div className={styles.wrapper}>
        <InputWithCharCounter
          placeholder={placeholder}
          text={text}
          setText={setText}
        />
      </div>
    </ModalBasic>
  );
};

export default TextFieldNoTopBar;
