import React from 'react';
import styles from './ModalSubText.module.css';
interface Props {
  text: string;
  size: 'medium' | 'small';
}

const ModalSubText: React.FC<Props> = ({ text, size }: Props) => {
  let textStyle = `${styles.subText}`;
  switch (size) {
    case 'medium':
      textStyle += ` ${styles.subTextMedium}`;
      break;
    case 'small':
      textStyle += ` ${styles.subTextSmall}`;
      break;
    default:
      throw new Error('no size ModalSubText');
  }
  return <p className={textStyle}>{text}</p>;
};

export default ModalSubText;
