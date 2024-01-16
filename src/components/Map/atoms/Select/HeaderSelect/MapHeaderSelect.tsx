import React from 'react';
import MapHeaderTitleText from '../../Text/HeaderTitle/MapHeaderTitleText';
import { ReactComponent as ArrowDown } from '../../../../../assets/icon/arrowDown.svg';
import styles from './MapHeaderSelect.module.css';
import { colors } from '../../../../../styles/colors';

interface Props {
  text: string;
  onClick: () => void;
}

const MapHeaderSelect: React.FC<Props> = ({ text, onClick }: Props) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <MapHeaderTitleText text={text} />
      <ArrowDown width={24} height={24} stroke={colors.mainPurple} />
    </button>
  );
};

export default MapHeaderSelect;
