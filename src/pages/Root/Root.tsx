import React, { useState } from 'react';
import SlideTabView from '../../components/SlideMenu/SlideTabView/SlideTabView';
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
      <SlideTabView
        menuItemDataArr={bodyTabDataArr}
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
