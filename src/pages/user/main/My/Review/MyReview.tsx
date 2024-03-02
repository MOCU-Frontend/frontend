import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyReviewHistoryContent from '../../../../../components/My/Review/atoms/Content/History/MyReviewHistoryContent';
import MyReviewNewContent from '../../../../../components/My/Review/atoms/Content/New/MyReviewNewContent';
import MyReviewNew from '../../../../../components/My/Review/atoms/New/MyReviewNew';
import SlideMenuTab from '../../../../../components/SlideMenu/atoms/MenuTab/SlideMenuTab';
import styles from './MyReview.module.css';

const MyReview: React.FC = () => {
  const navigate = useNavigate();
  const [menuDataArr, setMenuDataArr] = useState([
    { title: '내 리뷰 쓰기', isChecked: true },
    { title: '작성 내역', isChecked: false },
  ]);
  const handleCheckedMenuDataIndex = (prevIndex: number, newIndex: number) => {
    if (!menuDataArr[prevIndex]) throw new Error('invalid prevIndex!');
    if (!menuDataArr[newIndex]) throw new Error('invalid newIndex!');
    setMenuDataArr((prevArr) => {
      const copiedArr = [...prevArr];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[newIndex].isChecked = true;
      return copiedArr;
    });
  };
  const checkedMenuData = menuDataArr.find((x) => x.isChecked);
  if (!checkedMenuData) throw new Error('no checked menu Data!');
  return (
    <>
      <HeaderBackBtn
        onClickBackBtn={() => navigate(-1)}
        headerTitle='내 리뷰'
      />
      <div className={styles.slideMenuTabWrapper}>
        <SlideMenuTab
          menuDataArr={menuDataArr}
          handleCheckedDataIndex={handleCheckedMenuDataIndex}
        />
      </div>

      {checkedMenuData.title === '내 리뷰 쓰기' && <MyReviewNewContent />}
      {checkedMenuData.title === '작성 내역' && <MyReviewHistoryContent />}
    </>
  );
};

export { MyReview as Component };
