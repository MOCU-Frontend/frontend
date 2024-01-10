import React from 'react';
import MyLocationContentText from '../../Text/LocationContent/MyLocationContentText';
import MyMainLocationWrapper from '../../Wrapper/Main/Location/MyMainLocationWrapper';
import styles from './MyLocationContent.module.css';
import { ReactComponent as MapIcon } from '../../../../../assets/icon/mapMarkerSmall.svg';
import { ReactComponent as ArrowRightIcon } from '../../../../../assets/icon/arrowRight.svg';
import { colors } from '../../../../../styles/colors';
interface Props {
  locationText: string;
  onClick: () => void;
}

const MyLocationContent: React.FC<Props> = ({
  locationText,
  onClick,
}: Props) => {
  return (
    <MyMainLocationWrapper onClick={onClick}>
      <div className={styles.titleWrapper}>
        <MapIcon width={24} height={24} stroke={colors.subPurpleLight} />
        <MyLocationContentText text={locationText} />
      </div>
      <ArrowRightIcon width={16} height={16} stroke={colors.greyLight02} />
    </MyMainLocationWrapper>
  );
};

export default MyLocationContent;
