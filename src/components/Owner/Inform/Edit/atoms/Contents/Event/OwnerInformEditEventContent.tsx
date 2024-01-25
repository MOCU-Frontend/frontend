import React from 'react';
import OwnerInformSecTitleText from '../../../../atoms/Texts/SecTitle/OwnerInformSecTitleText';
import OwnerInformEditBasicInput from '../../Input/Basic/OwnerInformEditBasicInput';
import OwnerInformEditCheckBoxContent from '../CheckBox/OwnerInformEditCheckBoxContent';
import styles from './OwnerInformEditEventContent.module.css';

interface Props {
  handleCheck: () => void;
  isChecked: boolean;
  eventText: string;
  handleChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OwnerInformEditEventContent: React.FC<Props> = ({
  isChecked,
  handleCheck,
  eventText,
  handleChangeEvent,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text='이벤트' />
      <OwnerInformEditCheckBoxContent
        label='이벤트 시작하기'
        isChecked={isChecked}
        handleCheck={handleCheck}
      />
      {isChecked && (
        <OwnerInformEditBasicInput
          placeholder='첫 방문 시 음료 한 잔 무료'
          text={eventText}
          handleChange={handleChangeEvent}
        />
      )}
    </div>
  );
};

export default OwnerInformEditEventContent;
