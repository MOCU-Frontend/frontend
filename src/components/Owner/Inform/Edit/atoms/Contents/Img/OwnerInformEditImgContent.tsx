import React from 'react';
import OwnerInformSecTitleText from '../../../../atoms/Texts/SecTitle/OwnerInformSecTitleText';
import OwnerInformEditMoreImgBtn from '../../Btns/MoreImg/OwnerInformEditMoreImgBtn';
import OwnerInformEditImgWithXBadge from '../../Img/ImgWithXBadge/OwnerInformEditImgWithXBadge';
import styles from './OwnerInformEditImgContent.module.css';

interface Props {}

const OwnerInformEditImgContent: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text='사진 등록' />
      <div className={styles.overflowWrapper}>
        <div className={styles.imgsWrapper}>
          <OwnerInformEditMoreImgBtn pictureNumText='6/10' />
          <OwnerInformEditImgWithXBadge onClickXBtn={() => {}} />
          <OwnerInformEditImgWithXBadge onClickXBtn={() => {}} />
          <OwnerInformEditImgWithXBadge onClickXBtn={() => {}} />
          <OwnerInformEditImgWithXBadge onClickXBtn={() => {}} />
          <OwnerInformEditImgWithXBadge onClickXBtn={() => {}} />
          <OwnerInformEditImgWithXBadge onClickXBtn={() => {}} />
          <OwnerInformEditImgWithXBadge onClickXBtn={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default OwnerInformEditImgContent;
