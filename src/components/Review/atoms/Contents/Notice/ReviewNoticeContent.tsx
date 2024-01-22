import React from 'react';
import ReviewNoticeText from '../../Text/Notice/ReviewNoticeText';
import styles from './ReviewNoticeContent.module.css';
import { ReactComponent as InformIcon } from '../../../../../assets/icon/information.svg';
import { colors } from '../../../../../styles/colors';
interface Props {}

const ReviewNoticeContent: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <InformIcon width={14} height={14} fill={colors.grey} />
      <ReviewNoticeText text='리뷰는 가게에서 최소 1일 후에 확인할 수 있으니, 안심하고 남겨주세요.' />
    </div>
  );
};

export default ReviewNoticeContent;
