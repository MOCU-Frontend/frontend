import React from 'react';
import MyLocationLocEditBtn from '../../Button/LocEdit/MyLocationLocEditBtn';
import MyLocationLocEditBodyText from '../../Text/LocEditBody/MyLocationLocEditBodyText';
import { ReactComponent as MarkerIcon } from '../../../../../../assets/icon/mapMarkerSmall.svg';
import styles from './MyLocationLocEditContent.module.css';
import { colors } from '../../../../../../styles/colors';
import MyLocationLocEditTitleText from '../../Text/LocEditTitle/MyLocationLocEditTitleText';

interface Props {
  onClickBtn: () => void;
  titleText: string;
  locationText: string;
}

const MyLocationLocEditContent: React.FC<Props> = ({
  onClickBtn,
  locationText,
  titleText,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <MyLocationLocEditTitleText text={titleText} />
      <div className={styles.bodyWrapper}>
        <div className={styles.bodyTextWrapper}>
          <MarkerIcon width={24} height={24} stroke={colors.greyLight02} />
          <MyLocationLocEditBodyText text={locationText} />
        </div>
        <MyLocationLocEditBtn onClick={onClickBtn} />
      </div>
    </div>
  );
};

export default MyLocationLocEditContent;
