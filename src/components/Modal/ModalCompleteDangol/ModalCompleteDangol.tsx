import React from 'react';
import Button from '../../Button/Button';
import ModalBasic from '../atoms/Basic/ModalBasic';
import ModalHeader from '../atoms/Header/ModalHeader';
import ModalBodyText from '../atoms/Text/BodyText/ModalBodyText';
import ModalDeleteInformText from '../atoms/Text/DeleteInform/ModalDeleteInformText';
import styles from './ModalCompleteDangol.module.css';
interface Props {
  headerTitle: string;
  bodyText: string;
  informText: string;
  onClickBtn: () => void;
  onClickX: () => void;
  btnLabel: string;
}

const ModalCompleteDangol: React.FC<Props> = ({
  headerTitle,
  bodyText,
  informText,
  onClickBtn = () => {},
  onClickX = () => {},
  btnLabel,
}: Props) => {
  return (
    <ModalBasic>
      <ModalHeader title={headerTitle} onClickXBtn={onClickX} />
      <section className={styles.bodySect}>
        <ModalBodyText text={bodyText} />
        <ModalDeleteInformText text={informText} />
        <div className={styles.modalBtnWrapper}>
          <Button
            label={btnLabel}
            size='medium'
            backgroundColor='main-purple'
            textColor='white'
            borderRadius='medium'
            onClick={onClickBtn}
          />
        </div>
      </section>
    </ModalBasic>
  );
};

export default ModalCompleteDangol;
