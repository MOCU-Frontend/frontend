import React, { ReactNode } from 'react';
import styles from './OwnerInformEditBasicBox.module.css';

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const OwnerInformEditBasicBox: React.FC<Props> = ({
  children,
  onClick = () => {},
}: Props) => {
  return (
    <div className={styles.wholeWrapper} onClick={onClick}>
      {children}
    </div>
  );
};

export default OwnerInformEditBasicBox;
