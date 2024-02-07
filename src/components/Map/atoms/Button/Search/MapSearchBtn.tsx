import React from 'react';
import styles from './MapSearchBtn.module.css';
import { ReactComponent as ReIcon } from '../../../../../assets/icon/re.svg';
import { colors } from '../../../../../styles/colors';
import MapSearchBtnText from '../../Text/SearchBtn/MapSearchBtnText';
interface Props {
  onClick: () => void;
}

const MapSearchBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button className={styles.wholeWrapper} onClick={onClick}>
      <ReIcon width={18} height={18} stroke={colors.mainPurple} />
      <MapSearchBtnText text='현 지도에서 검색' />
    </button>
  );
};

export default MapSearchBtn;
