import React from 'react';
import styles from './ModalMissionSubText.module.css';
interface Props {
  text: string;
}

const ModalMissionSubText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default ModalMissionSubText;
