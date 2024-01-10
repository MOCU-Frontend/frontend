import React from 'react';
import styles from './MyLocationLocEditBtn.module.css';
import { ReactComponent as EditIcon } from '../../../../../../assets/icon/edit.svg';
import MyLocationLocEditBtnText from '../../Text/LocEditBtn/MyLocationLocEditBtnText';
import { colors } from '../../../../../../styles/colors';
interface Props {
  onClick: () => void;
}

const MyLocationLocEditBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <EditIcon width={24} height={24} fill={colors.subPurpleLight} />
      <MyLocationLocEditBtnText text='수정' />
    </button>
  );
};

export default MyLocationLocEditBtn;
