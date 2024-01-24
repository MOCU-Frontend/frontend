import React from 'react';
import styles from './OwnerInformEditPictureInformText.module.css';

interface Props {
  text: string;
}

const OwnerInformEditPictureInformText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerInformEditPictureInformText;
