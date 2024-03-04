import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckFilter from '../../../components/CheckFilter/CheckFilter';
import CheckFilterSelect from '../../../components/CheckFilter/Select/CheckFilterSelect';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import OwnerRequestItem from '../../../components/Owner/Request/atoms/Item/OwnerRequestItem';
import styles from './OwnerRequest.module.css';
import useStore from '../../../store/useStore';
import {
  initialOwnerRequestMenuItemDataArr,
  ownerRequestInitialOptionDataArr,
} from '../../../store/data/searchResult';
import { MenuItemData } from '../../../store/data/stamp';
import BottomSheet from '../../../components/BottomSheet/BottomSheet';
import SlideTabViewFilter from '../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import { useFilterMenu } from '../../../hooks/useFilterMenu';
import { useOptionMenu } from '../../../hooks/useOptionMenu';
import { useOwnerRequestQuery } from '../../../apis/owner/Request/useOwnerRequestQuery';

const OwnerRequest = () => {
  const storeId = useStore((state) => state.storeId);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };
  const { menuItemDataArr, handleClickMenuBodyItem, handleClickMenuItem } =
    useFilterMenu(initialOwnerRequestMenuItemDataArr);
  const handleFilterSelectClick = (newIndex: number) => {
    const prevIndex = menuItemDataArr.findIndex((x) => x.isChecked);
    if (prevIndex === -1) throw new Error('no checked menu item!!');
    handleClickMenuItem(prevIndex, newIndex);
    setIsBottomSheetVisible(true);
  };
  const { optionDataArr, sortedOptionDataArr, handleOptionClick } =
    useOptionMenu(ownerRequestInitialOptionDataArr);

  const selectedArrangeFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;
  const {
    ownerRequestQuery: { data: ownerRequestData },
  } = useOwnerRequestQuery(storeId, optionDataArr, selectedArrangeFilterItem);

  const navigate = useNavigate();
  return (
    <div>
      <HeaderBackBtn
        headerTitle='고객 요청 관리'
        onClickBackBtn={() => navigate(-1)}
      />
      <div className={styles.filtersWrapper}>
        {sortedOptionDataArr.map((data, index) => (
          <CheckFilter
            key={data.title + index}
            isChecked={data.isChecked}
            backgroundColor='grey-light-00'
            textColor='grey-dark-01'
            label={data.title}
            border={1}
            borderColor='grey-light-02'
            onClick={() => {
              handleOptionClick(data.id);
            }}
          />
        ))}

        <CheckFilterSelect
          label={selectedArrangeFilterItem?.title || '보상 • 적립 전체'}
          backgroundColor='grey-light-00'
          textColor='grey-dark-01'
          isChecked={false}
          border={1}
          borderColor='grey-light-02'
          onClick={() => handleFilterSelectClick(0)}
        />
      </div>
      <div className={styles.itemsWrapper}>
        {ownerRequestData &&
          ownerRequestData.map((data, index) => {
            const date = new Date(data.modifiedDate);
            return (
              <OwnerRequestItem
                key={data.name + index}
                category={
                  data.acceptOption === 'accept'
                    ? '수락 완료 요청'
                    : '미수락 요청'
                }
                userName={data.name}
                dateText={`${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}`}
              />
            );
          })}
      </div>
      {isBottomSheetVisible && (
        <BottomSheet
          onDragBottom={handleDragBottom}
          onClickNotBottomSheet={handleDragBottom}
          children={
            <SlideTabViewFilter
              menuItemDataArr={menuItemDataArr}
              handleCheckedDataIndex={handleClickMenuItem}
              handleClickMenuBodyItem={handleClickMenuBodyItem}
              onClickCompleteBtn={handleDragBottom}
            />
          }
        ></BottomSheet>
      )}
    </div>
  );
};

export { OwnerRequest as Component };
