import React from 'react';
import styles from './BtmSheetFilter.module.css';
import { ReactComponent as CheckImage } from '../../../../assets/icon/checkWithoutCircle.svg';

type FilterList = {
  title: string;
  isChecked: boolean;
};

interface Props {
  /**
   * 제목
   */
  FilterTitle: string;

  /**
   * 전달된 배열
   */
  FilterArray: FilterList[];

  /**
   * 버튼 클릭할 때
   */
  onClick: (index: number) => void;
}

const BtmSheetFilter: React.FC<Props> = ({
  FilterTitle,
  FilterArray,
  onClick,
}: Props) => {
  return (
    <div className={styles.wrapFilter}>
      {FilterArray.map((item, index) => (
        <button
          key={index}
          className={styles.wrapList}
          onClick={() => onClick(index)}
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
