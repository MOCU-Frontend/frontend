import React from 'react';
import styles from './OwnerInformEditXBadgeBtn.module.css';
import { ReactComponent as UndoIcon } from '../../../../../../../assets/icon/undoCenterRegular.svg';
import { colors } from '../../../../../../../styles/colors';
interface Props {
  onClick: () => void;
}

const OwnerInformEditXBadgeBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button className={styles.wholeWrapper} onClick={onClick}>
      <UndoIcon width={16} height={16} stroke={colors.white} />
    </button>
  );
};

export default OwnerInformEditXBadgeBtn;
