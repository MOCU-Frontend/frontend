import React from 'react';
import BodyTitleText from '../../../../../components/Text/BodyTitleText/BodyTitleText';
import { colors } from '../../../../../styles/colors';
import styles from './OwnerInformNoticeRegister.module.css';
import { ReactComponent as LogoIcon } from '../../../../../assets/icon/logo01.svg';
import FullBtn from '../../../../../components/Button/FullBtn/FullBtn';
import { useNavigate } from 'react-router-dom';

const OwnerInformNoticeRegister = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.titleWrapper}>
        <BodyTitleText color={colors.navy} text='가게 신규 등록' />
        <BodyTitleText
          color={colors.navy}
          text='모쿠에 등록될 가게 정보를 알려주세요! '
        />
      </div>
      <LogoIcon width={158} height={152} />
      <div className={styles.fullBtnWrapper}>
        <FullBtn
          label='가게 정보 등록하러 가기'
          onClick={() => navigate('/owner/inform/register', { replace: true })}
        />
      </div>
    </div>
  );
};

export { OwnerInformNoticeRegister as Component };
