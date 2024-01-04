import React from 'react';
import styles from './ModalInformText.module.css';

interface Props {
  text: string;
  size: 'medium' | 'small';
}

const ModalInformText: React.FC<Props> = ({ size, text }: Props) => {
  let textStyle = `${styles.informText}`;
  switch (size) {
    case 'medium':
      textStyle += ` ${styles.informTextMedium}`;
      break;
    case 'small':
      textStyle += ` ${styles.informTextMedium}`;
      break;
    default:
      throw new Error('no size ModalSubText');
  }
  return <p className={textStyle}>{text}</p>;
};

export default ModalInformText;
