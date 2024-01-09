import React from 'react';
import HomeLocationBodyText from '../Text/LocationBody/HomeLocationBodyText';
import HomeLocationTitleText from '../Text/LocationTitle/HomeLocationTitleText';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/icon/arrowDown.svg';
import styles from './HomeLocationSec.module.css';
import { colors } from '../../../../styles/colors';

interface Props {
  titleText: string;
  bodyText: string;
}

const HomeLocationSec: React.FC<Props> = ({ titleText, bodyText }: Props) => {
  return (
    <div className={styles.wrapper}>
      <HomeLocationTitleText text={titleText} />
      <div className={styles.locationBody}>
        <HomeLocationBodyText text={bodyText} />
        <ArrowDownIcon width={24} height={24} stroke={colors.white} />
      </div>
    </div>
  );
};

export default HomeLocationSec;
