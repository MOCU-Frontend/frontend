import React from 'react';
import styles from './MapTargetBtn.module.css';
import { ReactComponent as Target } from '../../../../assets/icon/now.svg';
import { colors } from '../../../../styles/colors';
interface Props {
  onClick: () => void;
}

const MapTargetBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      <Target width={24} height={24} fill={colors.greyDark01} />
    </button>
  );
};

export default MapTargetBtn;
