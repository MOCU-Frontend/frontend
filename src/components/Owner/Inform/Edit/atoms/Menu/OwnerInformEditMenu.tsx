import React from 'react';
import OwnerInformEditMenuBox from '../Box/Menu/OwnerInformEditMenuBox';
import styles from './OwnerInformEditMenu.module.css';
import { ReactComponent as UndoIcon } from '../../../../../../assets/icon/undoCenterRegular.svg';
import { colors } from '../../../../../../styles/colors';
import OwnerInformMenuTitleText from '../../../atoms/Texts/MenuTitle/OwnerInformMenuTitleText';
import OwnerInformMenuSubText from '../../../atoms/Texts/MenuSub/OwnerInformMenuSubText';
import OwnerInformEditMenuImgWithXBadge from '../Img/MenuWithXBadge/OwnerInformEditMenuImgWithXBadge';
interface Props {
  name: string;
  price: number;
  onClickXBtn: () => void;
  onClickMenuXBtn: () => void;
}

const OwnerInformEditMenu: React.FC<Props> = ({
  name,
  price,
  onClickXBtn,
  onClickMenuXBtn,
}: Props) => {
  return (
    <OwnerInformEditMenuBox>
      <div className={styles.wholeWrapper}>
        <button onClick={onClickXBtn} className={styles.undoBtnWrapper}>
          <UndoIcon width={16} height={16} stroke={colors.greyDark00} />
        </button>
        <div className={styles.bodyWrapper}>
          <OwnerInformMenuTitleText text={name} />
          <OwnerInformMenuSubText text={`${price}원`} />
          <OwnerInformEditMenuImgWithXBadge onClickXBtn={onClickMenuXBtn} />
        </div>
      </div>
    </OwnerInformEditMenuBox>
  );
};

export default OwnerInformEditMenu;
