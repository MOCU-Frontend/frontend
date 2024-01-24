import React from 'react';
import OwnerInformEditPictureInformText from '../../Texts/PictureInform/OwnerInformEditPictureInformText';
import styles from './OwnerInformEditMenuMoreImgBtn.module.css';
import { ReactComponent as GalleryIcon } from '../../../../../../../assets/icon/gallery.svg';
import { colors } from '../../../../../../../styles/colors';
interface Props {
  onClick: () => void;
}

const OwnerInformEditMenuMoreImgBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button className={styles.wholeWrapper} onClick={onClick}>
      <GalleryIcon width={20} height={20} stroke={colors.grey} />
      <OwnerInformEditPictureInformText text='추가' color={colors.grey} />
    </button>
  );
};

export default OwnerInformEditMenuMoreImgBtn;
