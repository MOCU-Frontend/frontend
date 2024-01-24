import React from 'react';
import styles from './OwnerInformEditBtn.module.css';
import { ReactComponent as EditIcon } from '../../../../../assets/icon/edit.svg';
import { colors } from '../../../../../styles/colors';
interface Props {
  onClick: () => void;
}

const OwnerInformEditBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button className={styles.wholeWrapper} onClick={onClick}>
      <EditIcon width={24} height={24} fill={colors.white} />
    </button>
  );
};

export default OwnerInformEditBtn;
