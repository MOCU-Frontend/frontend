import React from 'react';
import OwnerInformSecBodyText from '../../../atoms/Texts/SecBody/OwnerInformSecBodyText';
import OwnerInformEditBasicBox from '../Box/OwnerInformEditBasicBox';
import styles from './OwnerInformEditLoc.module.css';
import { ReactComponent as ArrowRightIcon } from '../../../../../../assets/icon/arrowRight.svg';
import { colors } from '../../../../../../styles/colors';
interface Props {
  locText: string;
  onClick: () => void;
}

const OwnerInformEditLoc: React.FC<Props> = ({ locText, onClick }: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformEditBasicBox onClick={onClick}>
        <div className={styles.locWrapper}>
          <OwnerInformSecBodyText text={locText} />
          <ArrowRightIcon width={16} height={16} stroke={colors.greyLight02} />
        </div>
      </OwnerInformEditBasicBox>
    </div>
  );
};

export default OwnerInformEditLoc;
