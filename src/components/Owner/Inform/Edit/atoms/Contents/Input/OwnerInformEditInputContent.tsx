import React from 'react';
import OwnerInformSecTitleText from '../../../../atoms/Texts/SecTitle/OwnerInformSecTitleText';
import OwnerInformEditBasicInput from '../../Input/Basic/OwnerInformEditBasicInput';
import styles from './OwnerInformEditInputContent.module.css';

interface Props {
  title: string;
  inputValue: string;
  placeholder: string;
  handleChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OwnerInformEditInputContent: React.FC<Props> = ({
  title,
  inputValue,
  handleChangeInputValue,
  placeholder,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text={title} />
      <OwnerInformEditBasicInput
        text={inputValue}
        handleChange={handleChangeInputValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default OwnerInformEditInputContent;
