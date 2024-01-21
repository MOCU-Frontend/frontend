import React from 'react';
import StoreAccumBtnText from '../../Text/AccumBtn/StoreAccumBtnText';
import styles from './StoreAccumBtn.module.css';
import { ReactComponent as RightArrowIcon } from '../../../../../assets/icon/arrowRight.svg';
import { colors } from '../../../../../styles/colors';

interface Props {
  onClick: () => void;
}

const StoreAccumBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button className={styles.wholeWrapper} onClick={onClick}>
      <StoreAccumBtnText text='추가로 쿠폰 적립하기' />
      <RightArrowIcon width={16} height={16} stroke={colors.greyLight02} />
    </button>
  );
};

export default StoreAccumBtn;
