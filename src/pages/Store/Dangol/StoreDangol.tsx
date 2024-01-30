import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './StoreDangol.module.css';

interface Props {}

const StoreDangol: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='내 단골 가게'
        onClickBackBtn={() => navigate(-1)}
      />
    </div>
  );
};

export default StoreDangol;
