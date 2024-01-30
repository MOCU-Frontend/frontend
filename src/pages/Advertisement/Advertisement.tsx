import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './Advertisement.module.css';

interface Props {}

const Advertisement: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn headerTitle='광고' onClickBackBtn={() => navigate(-1)} />
    </div>
  );
};

export default Advertisement;
