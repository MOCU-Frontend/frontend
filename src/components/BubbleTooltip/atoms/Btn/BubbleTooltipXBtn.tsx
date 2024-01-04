import React from 'react';
import { ReactComponent as UndoIcon } from '../../../../assets/icon/undoCenterRegular.svg';
import { colors } from '../../../../styles/colors';
import styles from './BubbleTooltipXBtn.module.css';

interface Props {
  onClickXBtn: () => void;
}

const BubbleTooltipXBtn: React.FC<Props> = ({ onClickXBtn }: Props) => {
  return (
    <button className={styles.btn} onClick={onClickXBtn}>
      <UndoIcon width={24} height={24} stroke={colors.white} />
    </button>
  );
};

export default BubbleTooltipXBtn;
