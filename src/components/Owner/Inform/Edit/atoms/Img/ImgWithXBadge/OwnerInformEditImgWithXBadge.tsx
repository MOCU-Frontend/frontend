import React from 'react';
import OwnerInformEditXBadgeBtn from '../../Btns/XBadge/OwnerInformEditXBadgeBtn';
import styles from './OwnerInformEditImgWithXBadge.module.css';

interface Props {
  onClickXBtn: () => void;
}

const OwnerInformEditImgWithXBadge: React.FC<Props> = ({
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

export default OwnerInformEditImgWithXBadge;
