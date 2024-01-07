import React from 'react';
import styles from './Splash.module.css';
import { ReactComponent as Logo } from '../../assets/icon/logo01.svg';
import { ReactComponent as LogoText } from '../../assets/icon/logoText.svg';

const Splash: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <Logo width={170} height={163} />
      <LogoText width={98} height={38} />
      <h1 className={styles.subText}>모두의 모바일 쿠폰</h1>
    </section>
  );
};

export default Splash;
