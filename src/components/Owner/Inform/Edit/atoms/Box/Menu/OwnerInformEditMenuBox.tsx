import React, { ReactNode } from 'react';
import styles from './OwnerInformEditMenuBox.module.css';

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const OwnerInformEditMenuBox: React.FC<Props> = ({
  children,
  onClick = () => {},
}: Props) => {
  return (
    <div className={styles.wholeWrapper} onClick={onClick}>
      {children}
    </div>
  );
};

export default OwnerInformEditMenuBox;
