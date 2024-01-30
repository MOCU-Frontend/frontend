import React from 'react';
import { colors } from '../../../../../../../styles/colors';
import StoreDangolAddDeleteBtnText from '../../Text/DeleteBtn/StoreDangolAddDeleteBtnText';
import styles from './StoreDangolAddDeleteBtn.module.css';
import { ReactComponent as DeleteIcon } from '../../../../../../../assets/icon/delete.svg';

interface Props {
  isChecked: boolean;
  onClick: () => void;
}

const StoreDangolAddDeleteBtn: React.FC<Props> = ({
  isChecked,
  onClick,
}: Props) => {
  return (
    <button
      className={styles.wholeWrapper}
      onClick={onClick}
      disabled={!isChecked}
    >
      <DeleteIcon
        width={24}
        height={24}
        stroke={isChecked ? colors.mapRed : colors.greyLight02}
      />
      <StoreDangolAddDeleteBtnText
        text='삭제'
        color={isChecked ? colors.mapRed : colors.greyLight02}
      />
    </button>
  );
};

export default StoreDangolAddDeleteBtn;
