import React from 'react';
import { ReactComponent as UndoCenterRegular } from '../../../../assets/icon/undoCenterRegular.svg';
import { colors } from '../../../../styles/colors';
import styles from './ModalHeader.module.css';

interface Props {
  title: string;
  onClickXBtn: () => void;
}

const ModalHeader: React.FC<Props> = ({ title, onClickXBtn }: Props) => {
  return (
    <header className={styles.header}>
      <p className={styles.title}>{title}</p>
      <button className={styles.undoBtn} onClick={onClickXBtn}>
        <UndoCenterRegular width={16} height={16} stroke={colors.navy} />
      </button>
    </header>
  );
};

export default ModalHeader;
