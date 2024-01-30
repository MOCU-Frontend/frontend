import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './StampHeaderFilter.module.css';

import HeaderBackBtn from '../../../HeaderBackBtn/HeaderBackBtn';
import CheckFilterSelect from '../../../CheckFilter/Select/CheckFilterSelect';
import CheckFilter from '../../../CheckFilter/CheckFilter';

import {
  searchResultData,
  initialMenuItemDataArr,
  MenuItemData,
  FilterList,
} from '../../../../store/data/stamp';

interface Props {
  /*
   *
   * 뒤로 가기 버튼을 클릭했을 때
   */
  onBackBtnClick: () => void;

  /*
   *
   * 제목
   */
  title: string;

  /*
   *
   * 정렬에서 선택된 항목
   */
  selectedArrangeFilterItem: MenuItemData | undefined;

  /*
   *
   * 업종에서 선택된 항목
   */
  selectedSectorFilterItem: MenuItemData | undefined;

  /*
   *
   * 필터에서 사용가능한 항목
   */
  filterItems: FilterList[];
  /*
   *
   * 필터를 클릭했을 때
   */
  onFilterSelectClick: (index: number) => void;
}

const StampHeaderFilter: React.FC<Props> = ({
  onBackBtnClick,
  title,
  selectedArrangeFilterItem,
  selectedSectorFilterItem,
  filterItems,
  onFilterSelectClick,
}) => {
  return (
    <div className={styles.headerFilterWrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn onClickBackBtn={onBackBtnClick} headerTitle={title} />
      </div>

      <div className={styles.filtersWrapper}>
        <CheckFilterSelect
          label={
            selectedArrangeFilterItem
              ? selectedArrangeFilterItem.title
              : 'no selected item!'
          }
          isChecked={false}
          border={1}
          borderColor={'main-purple'}
          onClick={() => onFilterSelectClick(0)}
        />
        <CheckFilterSelect
          label={
            selectedSectorFilterItem
              ? selectedSectorFilterItem.title
              : 'no selected item!'
          }
          isChecked={false}
          border={1}
          borderColor={'main-purple'}
          onClick={() => onFilterSelectClick(1)}
        />

        {filterItems.map(
          (data, index) =>
            data.isChecked && (
              <CheckFilter
                key={data.title + index}
                isChecked={false}
                label={data.title}
                border={1}
                borderColor="main-purple"
                onClick={() => onFilterSelectClick(2)}
              />
            )
        )}
      </div>
    </div>
  );
};

export default StampHeaderFilter;