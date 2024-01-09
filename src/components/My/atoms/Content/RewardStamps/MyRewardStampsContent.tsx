import React from 'react';
import MyRewardStampContent from '../RewardStamp/MyRewardStampContent';
import styles from './MyRewardStampsContent.module.css';
type RewardData = {
  date: string;
  storeName: string;
  menu: string;
  menuNum: number;
};
interface Props {
  rewardDataArr: RewardData[];
}

const MyRewardStampsContent: React.FC<Props> = ({ rewardDataArr }: Props) => {
  return (
    <div className={styles.wrapper}>
      {rewardDataArr.map((data, index) => (
        <MyRewardStampContent
          key={data.storeName + data.date + index}
          dateText={data.date}
          storeName={data.storeName}
          menuNum={data.menuNum}
          menuText={data.menu}
        />
      ))}
    </div>
  );
};

export default MyRewardStampsContent;
