import React from 'react';
import OwnerInformEditPictureInformText from '../../Texts/PictureInform/OwnerInformEditPictureInformText';
import styles from './OwnerInformEditMoreImgBtn.module.css';
import { ReactComponent as GalleryIcon } from '../../../../../../../assets/icon/gallery.svg';
import { colors } from '../../../../../../../styles/colors';
interface Props {
  pictureNumText: string;
}

const OwnerInformEditMoreImgBtn: React.FC<Props> = ({
  pictureNumText,
}: Props) => {
  return (
    <button className={styles.wholeWrapper}>
      <GalleryIcon width={20} height={20} stroke={colors.mainPurple} />
      <OwnerInformEditPictureInformText
        text={pictureNumText}
        color={colors.mainPurple}
      />
    </button>
  );
};

export default OwnerInformEditMoreImgBtn;
