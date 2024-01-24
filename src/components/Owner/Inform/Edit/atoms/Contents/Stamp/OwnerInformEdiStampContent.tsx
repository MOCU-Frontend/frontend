import React from 'react';
import OwnerInformSecTitleText from '../../../../atoms/Texts/SecTitle/OwnerInformSecTitleText';
import OwnerInformEditBasicBox from '../../Box/OwnerInformEditBasicBox';
import OwnerInformEditCounterBtn from '../../Btns/Counter/OwnerInformEditCounterBtn';
import OwnerInformEditBodyText from '../../Texts/Body/OwnerInformEditBodyText';
import OwnerInformEditCounterText from '../../Texts/Counter/OwnerInformEditCounterText';
import styles from './OwnerInformEdiStampContent.module.css';

interface Props {
  stampCount: number;
  handleMinus: () => void;
  handlePlus: () => void;
}

const OwnerInformEdiStampContent: React.FC<Props> = ({
  stampCount = 10,
  handleMinus,
  handlePlus,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text='쿠폰 사용이 가능한 적립 도장' />
      <OwnerInformEditBasicBox>
        <div className={styles.counterBoxWrapper}>
          <div className={styles.counterWrapper}>
            <OwnerInformEditCounterBtn onClick={handleMinus} label='-' />
            <OwnerInformEditCounterText text={`${stampCount}`} />
            <OwnerInformEditCounterBtn onClick={handlePlus} label='+' />
          </div>
          <OwnerInformEditBodyText text='개 도장 적립하면 쿠폰 사용 가능' />
        </div>
      </OwnerInformEditBasicBox>
    </div>
  );
};

export default OwnerInformEdiStampContent;
