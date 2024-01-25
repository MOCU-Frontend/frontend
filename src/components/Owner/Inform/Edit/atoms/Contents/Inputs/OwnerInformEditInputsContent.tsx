import React from 'react';
import OwnerInformSecSubTitleText from '../../../../atoms/Texts/SecSubTitle/OwnerInformSecSubTitleText';
import OwnerInformSecTitleText from '../../../../atoms/Texts/SecTitle/OwnerInformSecTitleText';
import OwnerInformEditMoreBtn from '../../Btns/More/OwnerInformEditMoreBtn';
import OwnerInformEditBasicInput from '../../Input/Basic/OwnerInformEditBasicInput';
import styles from './OwnerInformEditInputsContent.module.css';

type SubInputInform = {
  title: string;
  inputValue: string;
  placeholder: string;
};

interface Props {
  title: string;
  subInputInformArr: SubInputInform[];
  moreBtnText: string;
  onClickMoreBtn: () => void;
  handleChangeInputValue: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const OwnerInformEditInputsContent: React.FC<Props> = ({
  title,
  subInputInformArr,
  moreBtnText,
  onClickMoreBtn,
  handleChangeInputValue,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text={title} />
      {subInputInformArr.map((data, index) => (
        <div className={styles.subSecWrapper} key={data.title + index}>
          <OwnerInformSecSubTitleText text={data.title} />
          <OwnerInformEditBasicInput
            text={data.inputValue}
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeInputValue(index, e)
            }
            placeholder={data.placeholder}
          />
        </div>
      ))}
      <OwnerInformEditMoreBtn bodyText={moreBtnText} onClick={onClickMoreBtn} />
    </div>
  );
};

export default OwnerInformEditInputsContent;
