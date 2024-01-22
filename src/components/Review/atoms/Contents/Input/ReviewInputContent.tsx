import React, { useState } from 'react';
import InputWithCharCounter from '../../../../TextField/atoms/InputWithCharCounter/InputWithCharCounter';
import TextFieldWithTopBar from '../../../../TextField/TextFieldWithTopBar/TextFieldWithTopBar';
import styles from './ReviewInputContent.module.css';

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const ReviewInputContent: React.FC<Props> = ({ text, setText }: Props) => {
  const [isShowTextField, setIsShowTextField] = useState(false);
  return (
    <div className={styles.wholeWrapper}>
      <div
        className={styles.dummyInputwrapper}
        onClick={() => setIsShowTextField(true)}
      >
        <InputWithCharCounter
          placeholder='음식의 맛, 가게 분위기, 청결 상태 등에 대한 솔직한 리뷰를 최소 20자 이상 남겨주세요!'
          text={text}
          setText={setText}
        />
      </div>

      {isShowTextField && (
        <TextFieldWithTopBar
          placeholder='음식의 맛, 가게 분위기, 청결 상태 등에 대한 솔직한 리뷰를 최소 20자 이상 남겨주세요!'
          onClickCheckBtn={() => setIsShowTextField(false)}
          onClickXBtn={() => setIsShowTextField(false)}
          text={text}
          setText={setText}
        />
      )}
    </div>
  );
};

export default ReviewInputContent;
