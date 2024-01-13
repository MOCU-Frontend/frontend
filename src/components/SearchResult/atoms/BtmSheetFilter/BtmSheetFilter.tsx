import React from 'react';
import styles from './BtmSheetFilter.module.css';
import { ReactComponent as CheckImage } from '../../../../assets/icon/checkWithoutCircle.svg';

type FilterList = {
  title: string;
  isChecked: boolean;
};

interface Props {
  /**
   * 전달된 배열
   */
  filterArray: FilterList[];

  /**
   * 버튼 클릭할 때
   */
  onClick: (prevIndex: number, index: number) => void;
}

const BtmSheetFilter: React.FC<Props> = ({ filterArray, onClick }: Props) => {
  const checkedFilterIndex = filterArray.findIndex((x) => x.isChecked);
  const handleClickFilterBtn = (newIndex: number) => {
    if (checkedFilterIndex !== -1) {
      onClick(checkedFilterIndex, newIndex);
    } else {
      throw new Error('no checked filter!!!');
    }
  };
  return (
    <div className={styles.wrapFilter}>
      {filterArray.map((item, index) => (
        <button
          key={index}
          className={styles.wrapList}
          onClick={() => handleClickFilterBtn(index)}
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
