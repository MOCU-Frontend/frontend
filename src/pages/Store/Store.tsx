import React from 'react';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './Store.module.css';
import { ReactComponent as ShareIcon } from '../../assets/icon/share.svg';
import { colors } from '../../styles/colors';
interface Props {}

const Store: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn backBtnColor={colors.white}>
          <div className={styles.shareBtnWrapper}>
            <button className={styles.shareBtn}>
              <ShareIcon width={24} height={24} fill={colors.white} />
            </button>
          </div>
        </HeaderBackBtn>
      </div>
      <div className={styles.imgDummyBox}></div>
    </div>
  );
};

export default Store;
