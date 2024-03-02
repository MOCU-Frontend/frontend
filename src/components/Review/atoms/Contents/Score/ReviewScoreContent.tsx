import React, { useState } from 'react';
import styles from './ReviewScoreContent.module.css';
import ReviewScoreText from '../../Text/Score/ReviewScoreText';
import StarGageBarBtn from '../../../../StarGageBar/StarGageBarBtn';

const ReviewScoreContent = () => {
  const [score, setScore] = useState(0);
  let scoreText = '';
  switch (score) {
    case 5:
      scoreText = '아주 만족해요';
      break;
    case 4:
      scoreText = '만족해요';
      break;
    case 3:
      scoreText = '괜찮아요';
      break;
    case 2:
      scoreText = '아쉬워요';
      break;
    case 1:
      scoreText = '매우 아쉬워요';
      break;
    case 0:
      scoreText = '';
      break;
    default:
      throw new Error('invalid score!');
  }
  return (
    <div className={styles.wholeWrapper}>
      <StarGageBarBtn
        width={128}
        height={24}
        score={score}
        setScore={setScore}
      />
      <ReviewScoreText text={scoreText} />
    </div>
  );
};

export default ReviewScoreContent;
