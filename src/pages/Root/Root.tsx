import React, { useState } from 'react';
import SlideMenuBodyTab from '../../components/SlideMenu/atoms/BodyTab/SlideMenuBodyTab';
import styles from './Root.module.css';

const Root = () => {
  const [bodyTabDataArr, setBodyTabDataArr] = useState([
    {
      title: '정렬',
      isChecked: true,
      content: <div>정렬</div>,
    },
    {
      title: '업종',
      isChecked: false,
      content: <div>업종</div>,
    },
  ]);
  return (
    <div className={styles.wrapper}>
      root
      <SlideMenuBodyTab
        tabDataArr={bodyTabDataArr}
        handleCheckedDataIndex={(prevIndex, newIndex) => {
          setBodyTabDataArr((prev) => {
            const arrCopy = [...prev];
            arrCopy[prevIndex].isChecked = false;
            arrCopy[newIndex].isChecked = true;
            return arrCopy;
          });
        }}
      />
    </div>
  );
};

export default Root;
