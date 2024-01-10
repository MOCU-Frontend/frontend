import React from 'react';
import MyMainContentSubText from '../../Text/MainContentSub/MyMainContentSubText';
import MyMainContentSubColorText from '../../Text/MainContentSubColor/MyMainContentSubColorText';
import MyMainNormalHeaderWrapper from '../../Wrapper/Main/NormalHeader/MyMainNormalHeaderWrapper';
import styles from './MyReviewContent.module.css';

interface Props {
  possibleReviewNum: number;
  onClick: () => void;
}

const MyReviewContent: React.FC<Props> = ({
  possibleReviewNum,
  onClick,
}: Props) => {
  return (
    <MyMainNormalHeaderWrapper gap={17} headerText='내 리뷰' onClick={onClick}>
      <div className={styles.textWrapper}>
        <MyMainContentSubText text='작성 가능 리뷰' />
        <MyMainContentSubColorText text={`${possibleReviewNum}`} />
      </div>
    </MyMainNormalHeaderWrapper>
  );
};

export default MyReviewContent;
