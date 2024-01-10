import React from 'react';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './MyLocation.module.css';

interface Props {}

const MyLocation: React.FC<Props> = ({}: Props) => {
  return (
    <section className={styles.wholeWrapper}>
      <HeaderBackBtn headerTitle='내 장소' />
      <main>sad</main>
      ㅁㄹㄴㅁㄹ
    </section>
  );
};

export default MyLocation;
