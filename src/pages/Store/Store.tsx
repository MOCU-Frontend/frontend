import React from 'react';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './Store.module.css';
import { ReactComponent as ShareIcon } from '../../assets/icon/share.svg';
import { colors } from '../../styles/colors';
import StoreInfoContent from '../../components/Store/atoms/Contents/Info/StoreInfoContent';
import StoreStampContent from '../../components/Store/atoms/Contents/Stamp/StoreStampContent';
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
      <StoreInfoContent title='크림베이글 건대점' category='베이커리' />
      <StoreStampContent />
    </div>
  );
};

export default Store;
