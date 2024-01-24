import React from 'react';
import OwnerInformSecSubTitleText from '../../../../atoms/Texts/SecSubTitle/OwnerInformSecSubTitleText';
import OwnerInformSecTitleText from '../../../../atoms/Texts/SecTitle/OwnerInformSecTitleText';
import OwnerInformEditMoreBtn from '../../Btns/More/OwnerInformEditMoreBtn';
import OwnerInformEditBasicInput from '../../Input/Basic/OwnerInformEditBasicInput';
import styles from './OwnerInformEditInputsContent.module.css';

type SubInputInform = {
  title: string;
  inputValue: string;
  handleChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

interface Props {
  title: string;
  subInputInformArr: SubInputInform[];
  moreBtnText: string;
  onClickMoreBtn: () => void;
}

const OwnerInformEditInputsContent: React.FC<Props> = ({
  title,
  subInputInformArr,
  moreBtnText,
  onClickMoreBtn,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text={title} />
      {subInputInformArr.map((data, index) => (
        <div className={styles.subSecWrapper} key={data.title + index}>
          <OwnerInformSecSubTitleText text={data.title} />
          <OwnerInformEditBasicInput
            text={data.inputValue}
            handleChange={data.handleChangeInputValue}
            placeholder={data.placeholder}
          />
        </div>
      ))}
      <OwnerInformEditMoreBtn bodyText={moreBtnText} onClick={onClickMoreBtn} />
    </div>
  );
};

export default OwnerInformEditInputsContent;
