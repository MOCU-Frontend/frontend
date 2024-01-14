import React from 'react';
import styles from './MyLocationEditSeeMapBtn.module.css';
import { ReactComponent as MapIcon } from '../../../../../../../assets/icon/map.svg';
import { ReactComponent as ArrowRightIcon } from '../../../../../../../assets/icon/arrowRight.svg';
import { colors } from '../../../../../../../styles/colors';
import MyLocationEditSeeMapBtnText from '../../Texts/SeeMapBtn/MyLocationEditSeeMapBtnText';
interface Props {
  onClick: () => void;
}

const MyLocationEditSeeMapBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.btnWrapper}>
      <div className={styles.bodyWrapper}>
        <MapIcon width={24} height={24} stroke={colors.grey} />
        <MyLocationEditSeeMapBtnText text='지도에서 확인/수정' />
      </div>
      <ArrowRightIcon width={16} height={16} stroke={colors.greyLight02} />
    </button>
  );
};

export default MyLocationEditSeeMapBtn;
