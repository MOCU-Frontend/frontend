import React from 'react';
import styles from './OwnerInformEditPictureInformText.module.css';

interface Props {
  text: string;
  color: string;
}

const OwnerInformEditPictureInformText: React.FC<Props> = ({
  text,
  color,
}: Props) => {
  return (
    <p className={styles.text} style={{ color }}>
      {text}
    </p>
  );
};

export default OwnerInformEditPictureInformText;
