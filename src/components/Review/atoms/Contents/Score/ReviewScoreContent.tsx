import React from 'react';
import styles from './ReviewScoreContent.module.css';
import { ReactComponent as StarGageBarIcon } from '../../../../../assets/icon/starGageBarRegular.svg';
import { colors } from '../../../../../styles/colors';
import ReviewScoreText from '../../Text/Score/ReviewScoreText';
interface Props {
  scoreText: string;
}

const ReviewScoreContent: React.FC<Props> = ({ scoreText }: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <StarGageBarIcon width={128} height={24} fill={colors.pointYellow} />
      <ReviewScoreText text={scoreText} />
    </div>
  );
};

export default ReviewScoreContent;
