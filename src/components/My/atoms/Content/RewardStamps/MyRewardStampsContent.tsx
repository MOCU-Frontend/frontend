import React from 'react';
import MyRewardStampContent from '../RewardStamp/MyRewardStampContent';
import styles from './MyRewardStampsContent.module.css';
import { RecentCouponUsage } from '../../../../../store/Type/My/myPageResponse';

interface Props {
  rewardDataArr: RecentCouponUsage[];
}

const MyRewardStampsContent: React.FC<Props> = ({ rewardDataArr }: Props) => {
  return (
    <div className={styles.wrapper}>
      {rewardDataArr.map((data, index) => (
        <MyRewardStampContent
          key={data.storeName + index}
          // dateText={data.date}
          storeName={data.storeName}
          // menuNum={data.menuNum}
          menuText={data.benefit}
        />
      ))}
    </div>
  );
};

export default MyRewardStampsContent;
