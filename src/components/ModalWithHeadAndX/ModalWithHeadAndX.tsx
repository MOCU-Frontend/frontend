import React, { ReactNode } from 'react';
import Modal from '../Modal/Modal';
import styles from './ModalWithHeadAndX.module.css';
import { ReactComponent as UndoCenterRegular } from '../../assets/icon/undoCenterRegular.svg';
import { colors } from '../../styles/colors';
interface Props {
  children?: ReactNode;
  title: string;
}

const ModalWithHeadAndX: React.FC<Props> = ({
  children,
  title = 'basic title',
}: Props) => {
  return (
    <Modal>
      <header className={styles.header}>
        <p className={styles.title}>{title}</p>
        <button className={styles.undoBtn}>
          <UndoCenterRegular width={16} height={16} stroke={colors.navy} />
        </button>
      </header>
      {children}
    </Modal>
  );
};

export default ModalWithHeadAndX;
