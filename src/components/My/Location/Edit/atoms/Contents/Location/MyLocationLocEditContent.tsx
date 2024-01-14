import React from 'react';
import { colors } from '../../../../../../../styles/colors';
import BodyTitleText from '../../../../../../Text/BodyTitleText/BodyTitleText';
import MyLocationEditLocationContentSubText from '../../Texts/LocationContentSub/MyLocationEditLocationContentSubText';
import styles from './MyLocationEditLocContent.module.css';

interface Props {
  titleText: string;
  subText: string;
}

const MyLocationEditLocContent: React.FC<Props> = ({
  titleText,
  subText,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <BodyTitleText text={titleText} color={colors.navy} />
      <MyLocationEditLocationContentSubText text={subText} />
    </div>
  );
};

export default MyLocationEditLocContent;
