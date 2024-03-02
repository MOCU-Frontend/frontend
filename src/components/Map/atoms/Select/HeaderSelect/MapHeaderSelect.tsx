import React from 'react';
import MapHeaderTitleText from '../../Text/HeaderTitle/MapHeaderTitleText';
import { ReactComponent as ArrowDown } from '../../../../../assets/icon/arrowDown.svg';
import styles from './MapHeaderSelect.module.css';

interface Props {
  text: string;
  onClick: () => void;
  color: string;
  size: 'small' | 'medium';
}

const MapHeaderSelect: React.FC<Props> = ({
  text,
  onClick,
  color,
  size,
}: Props) => {
  return (
    <button
      className={styles.wrapper}
      style={{ gap: size === 'medium' ? '4px' : '0' }}
      onClick={onClick}
    >
      <MapHeaderTitleText text={text} color={color} size={size} />
      <ArrowDown width={24} height={24} stroke={color} />
    </button>
  );
};

export default MapHeaderSelect;
