import React from 'react';
import MyRewardStamp from '../../Stamp/RewardStamp/MyRewardStamp';
import MyRewardStoreNameText from '../../Text/RewardStoreName/MyRewardStoreNameText';
import styles from './MyRewardStampContent.module.css';

interface Props {
  dateText: string;
  menuText: string;
  menuNum: number;
  storeName: string;
}

const MyRewardStampContent: React.FC<Props> = ({
  dateText,
  menuNum,
  menuText,
  storeName,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <MyRewardStamp
        dateText={dateText}
        menuText={menuText}
        menuNum={menuNum}
      />
      <MyRewardStoreNameText text={storeName} />
    </div>
  );
};

export default MyRewardStampContent;
