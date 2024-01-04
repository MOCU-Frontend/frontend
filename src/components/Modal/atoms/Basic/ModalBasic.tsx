import React, { ReactNode } from 'react';
import styles from './ModalBasic.module.css';
interface Props {
  borderRadius?: 'medium';
  children?: ReactNode;
}

const ModalBasic: React.FC<Props> = ({
  borderRadius = 'medium',
  children,
}: Props) => {
  let modalClassNames = `${styles.modal}`;
  switch (borderRadius) {
    case 'medium':
      modalClassNames += ` ${styles.modalRoundedMedium}`;
      break;
    default:
      throw new Error('no borderRadius!');
  }
  return (
    <section className={styles.modalScreen}>
      <div className={modalClassNames}>{children}</div>
    </section>
  );
};

export default ModalBasic;
