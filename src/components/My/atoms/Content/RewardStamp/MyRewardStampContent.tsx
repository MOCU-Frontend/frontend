import React from 'react';
import MyRewardStamp from '../../Stamp/RewardStamp/MyRewardStamp';
import MyRewardStoreNameText from '../../Text/RewardStoreName/MyRewardStoreNameText';
import styles from './MyRewardStampContent.module.css';

interface Props {
  storeName: string;
  dateText?: string | undefined;
  menuText: string;
  menuNum?: number | undefined;
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
        // dateText={dateText}
        menuText={menuText}
        // menuNum={menuNum}
      />
      <MyRewardStoreNameText text={storeName} />
    </div>
  );
};

export default MyRewardStampContent;
