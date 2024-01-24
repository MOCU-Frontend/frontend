import React from 'react';
import OwnerInformEditXBadgeBtn from '../../Btns/XBadge/OwnerInformEditXBadgeBtn';
import styles from './OwnerInformEditMenuImgWithXBadge.module.css';

interface Props {
  onClickXBtn: () => void;
}

const OwnerInformEditMenuImgWithXBadge: React.FC<Props> = ({
  onClickXBtn,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.xBadgeWrapper}>
        <OwnerInformEditXBadgeBtn onClick={onClickXBtn} />
      </div>
    </div>
  );
};

export default OwnerInformEditMenuImgWithXBadge;
