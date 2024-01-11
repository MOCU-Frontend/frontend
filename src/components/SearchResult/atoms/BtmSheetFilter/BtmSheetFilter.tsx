import React, { useState } from 'react';
import styles from './BtmSheetFilter.module.css';
import { ReactComponent as CheckImage } from '../../../../assets/icon/checkWithoutCircle.svg';
interface Props {
  /**
   * 제목
   */
  FilterTitle: string;

  setSelectedTitle: (title: string) => void;

  closeBottomSheet: () => void;
}

type FilterList = {
  title: string;
  isChecked: boolean;
};

export const FilterListData1: FilterList[] = [
  {
    title: '거리순',
    isChecked: true,
  },
  {
    title: '적립률순',
    isChecked: false,
  },
  {
    title: '별점 높은순',
    isChecked: false,
  },
  {
    title: '리뷰 많은 순',
    isChecked: false,
  },
];

export const FilterListData2: FilterList[] = [
  {
    title: '음식점',
    isChecked: true,
  },
  {
    title: '카페',
    isChecked: false,
  },
  {
    title: '베이커리',
    isChecked: false,
  },
  {
    title: '주류',
    isChecked: false,
  },
  {
    title: '기타',
    isChecked: false,
  },
];

const BtmSheetFilter: React.FC<Props> = ({
  FilterTitle,
  setSelectedTitle,
  closeBottomSheet,
}: Props) => {
  let initialFilterListData: FilterList[];

  switch (FilterTitle) {
    case '정렬':
      initialFilterListData = FilterListData1;
      break;
    case '업종':
      initialFilterListData = FilterListData2;
      break;
    default:
      initialFilterListData = [];
  }

  // useState를 사용하여 filterListData 상태를 관리합니다.
  const [filterListData, setFilterListData] = useState(initialFilterListData);

  const handleItemClick = (index: number) => {
    const newFilterListData = filterListData.map((item, i) => {
      if (i === index) {
        setSelectedTitle(item.title); // 클릭된 아이템의 title을 설정합니다.
        return { ...item, isChecked: true };
      }
      return { ...item, isChecked: false };
    });

    setFilterListData(newFilterListData);
    closeBottomSheet(); // BottomSheet를 닫습니다.
  };

  return (
    <div className={styles.wrapFilter}>
      {filterListData.map((item, index) => (
        <button
          key={index}
          className={styles.wrapList}
          onClick={() => handleItemClick(index)}
        >
          <div
            className={
              item.isChecked ? styles.listTextTrue : styles.listTextFalse
            }
          >
            {item.title}
          </div>
          <div className={styles.listImage}>
            {item.isChecked && <CheckImage />}
          </div>
        </button>
      ))}
    </div>
  );
};

export default BtmSheetFilter;
