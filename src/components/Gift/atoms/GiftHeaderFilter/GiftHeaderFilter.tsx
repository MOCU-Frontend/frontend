import React from 'react';
import styles from './GiftHeaderFilter.module.css';

import SearchBarHeader from '../../../SearchBar/SearchBarHeader/SearchBarHeader';
import CheckFilterSelect from '../../../CheckFilter/Select/CheckFilterSelect';

import { MenuItemData } from '../../../../store/data/gift';

interface Props {
  /*
   *
   * 뒤로 가기 버튼을 클릭했을 때
   */
  onBackBtnClick: () => void;

  /*
   *
   * 검색 버튼을 클릭했을 때
   */
  onSearchBtnClick: (value: string) => void;

  /*
   *
   * 지역에서 선택된 항목
   */
  selectedDistanceFilterItem: MenuItemData | undefined;

  /*
   *
   * 카테고리에서 선택된 항목
   */
  selectedCategoryFilterItem: MenuItemData | undefined;

  /*
   *
   * 가격대에서 사용가능한 항목
   */
  selectedPriceFilterItem: MenuItemData | undefined;

  /*
   *
   * 필터를 클릭했을 때
   */
  handleFilterSelectClick: (index: number) => void;
}

const GiftHeaderFilter: React.FC<Props> = ({
  onBackBtnClick,
  onSearchBtnClick,
  selectedDistanceFilterItem,
  selectedCategoryFilterItem,
  selectedPriceFilterItem,
  handleFilterSelectClick,
}) => {
  return (
    <div className={styles.headerFilterWrapper}>
      <div className={styles.headerWrapper}>
        <SearchBarHeader
          placeholder='찾고 싶은 선물을 검색해보세요'
          onClickBackBtn={onBackBtnClick}
          onClickSearchBtn={onSearchBtnClick}
        />
      </div>

      <div className={styles.filtersWrapper}>
        <CheckFilterSelect
          label={
            selectedDistanceFilterItem
              ? selectedDistanceFilterItem.title
              : 'no selected item!'
          }
          isChecked={false}
          border={1}
          borderColor={'sub-purple-light'}
          onClick={() => handleFilterSelectClick(0)}
        />
        <CheckFilterSelect
          label={
            selectedCategoryFilterItem
              ? selectedCategoryFilterItem.title
              : 'no selected item!'
          }
          isChecked={false}
          border={1}
          borderColor={'sub-purple-light'}
          onClick={() => handleFilterSelectClick(1)}
        />
        <CheckFilterSelect
          label={
            selectedPriceFilterItem
              ? selectedPriceFilterItem.title
              : 'no selected item!'
          }
          isChecked={false}
          border={1}
          borderColor={'sub-purple-light'}
          onClick={() => handleFilterSelectClick(2)}
        />
      </div>
    </div>
  );
};

export default GiftHeaderFilter;
