import React from 'react';
import OwnerInformEditBasicBox from '../../Box/OwnerInformEditBasicBox';
import { ReactComponent as PlusIcon } from '../../../../../../../assets/icon/plus.svg';
import styles from './OwnerInformEditMoreBtn.module.css';
import { colors } from '../../../../../../../styles/colors';
import OwnerInformEditBodyText from '../../Texts/Body/OwnerInformEditBodyText';

interface Props {
  bodyText: string;
  onClick: () => void;
}

const OwnerInformEditMoreBtn: React.FC<Props> = ({
  bodyText,
  onClick,
}: Props) => {
  return (
    <OwnerInformEditBasicBox onClick={onClick}>
      <div className={styles.innerWrapper}>
        <PlusIcon width={24} height={24} stroke={colors.greyDark01} />
        <OwnerInformEditBodyText text={bodyText} />
      </div>
    </OwnerInformEditBasicBox>
  );
};

export default OwnerInformEditMoreBtn;
