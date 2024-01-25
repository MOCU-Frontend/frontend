import React from 'react';
import OwnerInformEditHeaderBtnText from '../../Texts/HeaderBtn/OwnerInformEditHeaderBtnText';
import styles from './OwnerInformEditHeaderBtn.module.css';

interface Props {
  label: string;
  onClick: () => void;
}

const OwnerInformEditHeaderBtn: React.FC<Props> = ({
  label,
  onClick,
}: Props) => {
  return (
    <button className={styles.wholeWrapper} onClick={onClick}>
      <OwnerInformEditHeaderBtnText text={label} />
    </button>
  );
};

export default OwnerInformEditHeaderBtn;
