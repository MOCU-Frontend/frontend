import React from 'react';
import StoreStamp from '../../Stamp/StoreStamp';
import StoreStampInfoText from '../../Text/StampInfo/StoreStampInfoText';
import StoreStampTitleText from '../../Text/StampTitle/StoreStampTitleText';
import styles from './StoreStampContent.module.css';

interface Props {
  numOfStamp: number | undefined;
  maxStamp: number | undefined;
  reward: string | undefined;
}

const StoreStampContent: React.FC<Props> = ({
  numOfStamp,
  maxStamp,
  reward,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.headerWRapper}>
        <StoreStampTitleText text='내 스탬프 적립 현황' />
        <StoreStampInfoText text={`${numOfStamp}/${maxStamp}`} />
      </div>
      <div className={styles.stampTable}>
        <div className={styles.stampRow}>
          <StoreStamp bodyText='23.11.16' isActivated />
          <StoreStamp bodyText='23.11.16' isActivated />
          <StoreStamp bodyText='23.11.16' isActivated />
          <StoreStamp bodyText='23.11.16' isActivated />
          <StoreStamp bodyText='23.11.16' isActivated />
        </div>
        <div className={styles.stampRow}>
          <StoreStamp bodyText='23.11.16' isActivated />
          <StoreStamp bodyText='' isActivated={false} />
          <StoreStamp bodyText='' isActivated={false} />
          <StoreStamp bodyText='' isActivated={false} />
          <StoreStamp bodyText={`${reward}`} isActivated={false} />
        </div>
      </div>
    </div>
  );
};

export default StoreStampContent;
