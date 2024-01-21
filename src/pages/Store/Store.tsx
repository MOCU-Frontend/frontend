import React from 'react';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './Store.module.css';
import { ReactComponent as ShareIcon } from '../../assets/icon/share.svg';
import { colors } from '../../styles/colors';
import StoreInfoContent from '../../components/Store/atoms/Contents/Info/StoreInfoContent';
import StoreStampContent from '../../components/Store/atoms/Contents/Stamp/StoreStampContent';
import StoreAccumBtn from '../../components/Store/atoms/Button/Accum/StoreAccumBtn';
import StoreScoreContent from '../../components/Store/atoms/Contents/Score/StoreScoreContent';
interface Props {}

const Store: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn backBtnColor={colors.white}>
          <div className={styles.shareBtnWrapper}>
            <button className={styles.shareBtn}>
              <ShareIcon width={24} height={24} fill={colors.white} />
            </button>
          </div>
        </HeaderBackBtn>
      </div>
      <div className={styles.imgDummyBox}></div>
      <div className={styles.topContentBox}>
        <div className={styles.infoWrapper}>
          <StoreInfoContent title='크림베이글 건대점' category='베이커리' />
        </div>
        <div className={styles.stampWrapper}>
          <StoreStampContent />
        </div>
        <div className={styles.accumBtnWrapper}>
          <StoreAccumBtn onClick={() => {}} />
        </div>
        <div className={styles.scoreWrapper}>
          <StoreScoreContent />
        </div>
      </div>
    </div>
  );
};

export default Store;
