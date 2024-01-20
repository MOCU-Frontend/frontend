import React from 'react';
import styles from './StoreStamp.module.css';
import { ReactComponent as StampStarIcon } from '../../../../../assets/icon/stampSmall.svg';
import { colors } from '../../../../styles/colors';
import StoreStampBodyText from '../Text/StampBody/StoreStampBodyText';
interface Props {
  bodyText: string;
}

const StoreStamp: React.FC<Props> = ({ bodyText }: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <StampStarIcon width={48} height={48} fill={colors.subPurpleLight} />
      <div className={styles.textsWrapper}>
        <StoreStampBodyText text={bodyText} />
      </div>
    </div>
  );
};

export default StoreStamp;
