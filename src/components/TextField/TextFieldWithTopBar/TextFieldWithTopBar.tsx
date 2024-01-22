import React from 'react';
import ModalBasic from '../../Modal/atoms/Basic/ModalBasic';
import InputWithCharCounter from '../atoms/InputWithCharCounter/InputWithCharCounter';
import TextFieldTopBar from '../atoms/TopBar/TextFieldTopBar';
import styles from './TextFieldWithTopBar.module.css';
// TODO: 나중에 클릭했을때 모달창으로 textfield 뜨는거 구현하고 x버튼이랑 체크 버튼 누를때 어떻게 되는지
// 물어보고 적용하기
interface Props {
  placeholder: string;
  onClickCheckBtn: () => void;
  onClickXBtn: () => void;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextFieldWithTopBar: React.FC<Props> = ({
  placeholder,
  onClickCheckBtn,
  onClickXBtn,
  text,
  setText,
}: Props) => {
  return (
    <ModalBasic>
      <TextFieldTopBar
        onClickCheckBtn={onClickCheckBtn}
        onClickXBtn={onClickXBtn}
      />
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

export default TextFieldWithTopBar;
