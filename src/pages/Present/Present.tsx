import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Present.module.css';
import SearchBarHeader from '../../components/SearchBar/SearchBarHeader/SearchBarHeader';

const Present = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}></div>
      <SearchBarHeader
        placeholder="찾고 싶은 선물을 검색해보세요"
        onClickBackBtn={() => navigate('/home')}
        onClickSearchBtn={() => {}}
      />
    </div>
  );
};

export default Present;
