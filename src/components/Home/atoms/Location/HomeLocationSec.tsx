import React from 'react';
import HomeLocationBodyText from '../Text/LocationBody/HomeLocationBodyText';
import HomeLocationTitleText from '../Text/LocationTitle/HomeLocationTitleText';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/icon/arrowDown.svg';
import styles from './HomeLocationSec.module.css';
import { colors } from '../../../../styles/colors';

interface Props {
  titleText: string;
  bodyText: string;
  onClickLoc: () => void;
}

const HomeLocationSec: React.FC<Props> = ({
  titleText,
  bodyText,
  onClickLoc,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <HomeLocationTitleText text={titleText} />
      <button className={styles.locationBody} onClick={onClickLoc}>
        <HomeLocationBodyText text={bodyText} />
        <ArrowDownIcon width={24} height={24} stroke={colors.white} />
      </button>
    </div>
  );
};

export default HomeLocationSec;
