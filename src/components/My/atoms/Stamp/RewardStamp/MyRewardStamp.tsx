import React from 'react';
import styles from './MyRewardStamp.module.css';
import { ReactComponent as StampStarIcon } from '../../../../../assets/icon/stampSmall.svg';
import { colors } from '../../../../../styles/colors';
import MyStampMenuText from '../../Text/StampMenu/MyStampMenuText';
interface Props {
  // dateText: string;
  menuText: string;
  // menuNum: number;
}

const MyRewardStamp: React.FC<Props> = ({
  // dateText,
  // menuNum,
  menuText,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <StampStarIcon width={66} height={66} color={colors.subPurpleLight} />
      <div className={styles.textsWrapper}>
        {/* <MyStampeDateText text={dateText} /> */}
        <MyStampMenuText text={menuText} />
        {/* <MyStampMenuNumText text={`${menuNum}잔`} /> */}
      </div>
    </div>
  );
};

export default MyRewardStamp;
