import React from 'react';
import StoreScoreTitleText from '../../Text/ScoreTitle/StoreScoreTitleText';
import styles from './StoreScoreContent.module.css';
import { ReactComponent as StarGageBarIcon } from '../../../../../assets/icon/starGageBarRegular.svg';
import StoreScoreBodyText from '../../Text/ScoreBody/StoreScoreBodyText';
import ScoreGageBar from '../../GageBar/ScoreGageBar';
import StarGageBar from '../../../../StarGageBar/StarGageBar';
interface Props {
  rating: number | undefined;
}

const StoreScoreContent: React.FC<Props> = ({ rating }: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.titleWrapper}>
        <StoreScoreTitleText text={`${rating}`} />
        <StarGageBar width={84} height={18} score={1.2} />
      </div>
      <div className={styles.scoreDetailsWrapper}>
        <div className={styles.scoreDetail}>
          <StoreScoreBodyText text="5점" />
          <ScoreGageBar ratio={100} />
          <StoreScoreBodyText text="165" />
        </div>
        <div className={styles.scoreDetail}>
          <StoreScoreBodyText text="4점" />
          <ScoreGageBar ratio={0} />
          <StoreScoreBodyText text="0" />
        </div>
        <div className={styles.scoreDetail}>
          <StoreScoreBodyText text="3점" />
          <ScoreGageBar ratio={0} />
          <StoreScoreBodyText text="0" />
        </div>
        <div className={styles.scoreDetail}>
          <StoreScoreBodyText text="2점" />
          <ScoreGageBar ratio={0} />
          <StoreScoreBodyText text="0" />
        </div>
        <div className={styles.scoreDetail}>
          <StoreScoreBodyText text="1점" />
          <ScoreGageBar ratio={0} />
          <StoreScoreBodyText text="0" />
        </div>
      </div>
    </div>
  );
};

export default StoreScoreContent;
