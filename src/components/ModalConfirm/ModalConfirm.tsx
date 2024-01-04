import React from 'react';
import Button from '../Button/Button';
import ModalWithHeadAndX from '../ModalWithHeadAndX/ModalWithHeadAndX';
import styles from './ModalConfirm.module.css';
interface Props {
  headerTitle: string;
  bodyText?: string;
  subText?: string;
  informText?: string;
}

const ModalConfirm: React.FC<Props> = ({
  headerTitle,
  bodyText,
  subText,
  informText,
}: Props) => {
  return (
    <ModalWithHeadAndX title={headerTitle}>
      <section className={styles.bodySect}>
        {bodyText && <h1 className={styles.bodyText}>{bodyText}</h1>}
        <div className={styles.informDiv}>
          {subText && <p className={styles.subText}>{subText}</p>}
          {informText && <p className={styles.informText}>{informText}</p>}
        </div>
      </section>
      <div className={styles.btnDiv}>
        <Button
          label='아니요'
          size='medium'
          backgroundColor='white'
          textColor='main-purple'
          borderColor='main-purple'
          borderRadius='medium'
          border={1}
        />
        <Button
          label='예'
          size='medium'
          backgroundColor='main-purple'
          textColor='white'
          borderRadius='medium'
        />
      </div>
    </ModalWithHeadAndX>
  );
};

export default ModalConfirm;
