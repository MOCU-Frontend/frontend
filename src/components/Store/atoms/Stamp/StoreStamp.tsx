import React from 'react';
import styles from './StoreStamp.module.css';
import { ReactComponent as StampStarIcon } from '../../../../../assets/icon/stampSmall.svg';
import { colors } from '../../../../styles/colors';
import StoreStampBodyText from '../Text/StampBody/StoreStampBodyText';
interface Props {
  bodyText: string;
  isActivated: boolean;
}

const StoreStamp: React.FC<Props> = ({ bodyText, isActivated }: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <StampStarIcon
        width={48}
        height={48}
        fill={isActivated ? colors.subPurpleLight : colors.greyLight00}
      />
      <div className={styles.textsWrapper}>
        <StoreStampBodyText text={bodyText} />
      </div>
    </div>
  );
};

export default StoreStamp;
