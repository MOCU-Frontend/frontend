import React from 'react';
import MyReviewDoneTitleText from '../../Text/DoneTitle/MyReviewDoneTitleText';
import styles from './MyReviewDoneContent.module.css';
import { ReactComponent as EmptyIcon } from '../../../../../../assets/icon/emptySheetLarge.svg';
import { colors } from '../../../../../../styles/colors';

const MyReviewDoneContent = () => {
  return (
    <div className={styles.wholeWrapper}>
      <EmptyIcon width={40} height={40} fill={colors.navy} />
      <MyReviewDoneTitleText text='작성 가능한 리뷰가 없어요' />
    </div>
  );
};

export default MyReviewDoneContent;
