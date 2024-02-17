import React from 'react';
import styles from './Login.module.css';
import { ReactComponent as LogoText } from '../../assets/icon/logoText.svg';
import { ReactComponent as KakaoLoginBtnIcon } from '../../assets/icon/kakaoLoginBtn.svg';
import { colors } from '../../styles/colors';
import LoginSubTitleBox from '../../components/Login/atoms/TitleBox/Sub/LoginSubTitleBox';

const Login: React.FC = () => {
  return (
    <>
      <div className={styles.logoWrapper}>
        <LogoText width={98} height={38} fill={colors.mainPurple} />
      </div>
      <main className={styles.mainSect}>
        <div className={styles.mainBorderWrapper}>
          <div className={styles.titleBoxWrapper}>
            <LoginSubTitleBox text='간편로그인' />
          </div>
          <button className={styles.btnWrapper} onClick={() => {}}>
            <KakaoLoginBtnIcon />
          </button>
        </div>
      </main>
    </>
  );
};

export default Login;
