import React from 'react';
import ModalBasic from '../atoms/Basic/ModalBasic';
import ModalBodyText from '../atoms/Text/BodyText/ModalBodyText';
import ModalInformDiv from '../atoms/Text/InformDiv/ModalInformDiv';
import ModalSubText from '../atoms/Text/SubText/ModalSubText';
import styles from './ModalWaiting.module.css';
import { ReactComponent as HourGlass } from '../../../assets/icon/hourGlassBigSolid.svg';
import { colors } from '../../../styles/colors';
interface Props {
  bodyText: string;
  bodySubText: string;
  subText: string;
  informText: string;
}

const ModalWaiting: React.FC<Props> = ({
  bodyText,
  bodySubText,
  subText,
  informText,
}: Props) => {
  return (
    <ModalBasic>
      <div className={styles.wholeWrapper}>
        <ModalBodyText text={bodyText} />
        <ModalSubText text={bodySubText} size='medium' />
        <HourGlass width={48} height={48} fill={colors.subPurpleLight} />
        <ModalInformDiv
          subText={subText}
          informText={informText}
          size='small'
        />
      </div>
    </ModalBasic>
  );
};

export default ModalWaiting;
