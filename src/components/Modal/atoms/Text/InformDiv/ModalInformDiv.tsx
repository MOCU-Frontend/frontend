import React from 'react';
import ModalInformText from '../InformText/ModalInformText';
import ModalSubText from '../SubText/ModalSubText';
import styles from './ModalInformDiv.module.css';

interface Props {
  subText: string;
  informText: string;
  size: 'medium' | 'small';
}

const ModalInformDiv: React.FC<Props> = ({
  subText,
  informText,
  size,
}: Props) => {
  return (
    <div className={styles.informDiv}>
      <ModalSubText text={subText} size={size} />
      <ModalInformText text={informText} size={size} />
    </div>
  );
};

export default ModalInformDiv;
