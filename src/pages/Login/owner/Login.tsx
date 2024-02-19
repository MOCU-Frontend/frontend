import React from 'react';
import styles from './Login.module.css';
import { ReactComponent as LogoText } from '../../../assets/icon/logoText.svg';
import { ReactComponent as KakaoLoginBtnIcon } from '../../../assets/icon/kakaoLoginBtn.svg';
import { colors } from '../../../styles/colors';
import LoginSubTitleBox from '../../../components/Login/atoms/TitleBox/Sub/LoginSubTitleBox';
import { Link } from 'react-router-dom';

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
          <Link
            className={styles.btnWrapper}
            to={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${'http://localhost:3000/login/owner/oauth'}&response_type=code`}
          >
            <KakaoLoginBtnIcon />
          </Link>
        </div>
      </main>
    </>
  );
};

export default Login;

// 로그아웃 https://kauth.kakao.com/oauth/logout?logout_redirect_uri=http://localhost:3000/logout&client_id=399f271d0e69923b6b6207c1b98718e7
