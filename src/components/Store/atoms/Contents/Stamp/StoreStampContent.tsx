import React from 'react';
import MyRewardStamp from '../../../../My/atoms/Stamp/RewardStamp/MyRewardStamp';
import StoreStamp from '../../Stamp/StoreStamp';
import StoreStampInfoText from '../../Text/StampInfo/StoreStampInfoText';
import StoreStampTitleText from '../../Text/StampTitle/StoreStampTitleText';
import styles from './StoreStampContent.module.css';

interface Props {}

const StoreStampContent: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.afa}>
        <StoreStampTitleText text='내 스탬프 적립 현황' />
        <StoreStampInfoText text='6/10' />
      </div>
      <StoreStamp bodyText='23.11.16' />
      <StoreStamp bodyText='23.11.16' />
      <StoreStamp bodyText='23.11.16' />
      <StoreStamp bodyText='23.11.16' />
      <StoreStamp bodyText='23.11.16' />
      <StoreStamp bodyText='23.11.16' />
      <StoreStamp bodyText='' />
      <StoreStamp bodyText='' />
      <StoreStamp bodyText='' />
      <StoreStamp bodyText='베이글 1개' />
    </div>
  );
};

export default StoreStampContent;
