import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import instance from '../../../apis/instance';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckFilter from '../../../components/CheckFilter/CheckFilter';
import CheckFilterSelect from '../../../components/CheckFilter/Select/CheckFilterSelect';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import OwnerRequestItem from '../../../components/Owner/Request/atoms/Item/OwnerRequestItem';
import { OwnerRequestDataResponse } from '../../../store/Type/Owner/Request/ownerRequest';
import styles from './OwnerRequest.module.css';
import { fetchOwnerRequestData } from '../../../apis/owner/request';
import useStore from '../../../store/useStore';
import { initialOwnerRequestMenuItemDataArr } from '../../../store/data/searchResult';
import { MenuItemData } from '../../../store/data/stamp';
import BottomSheet from '../../../components/BottomSheet/BottomSheet';
import SlideTabViewFilter from '../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
interface Props {}

const OwnerRequest: React.FC<Props> = ({}: Props) => {
  const storeId = useStore((state) => state.storeId);
  const {
    data: ownerRequestData,
    isLoading: isOwnerRequestDataLoading,
    isError: isOwnerRequestDataError,
  } = useQuery({
    queryKey: ['OwnerRequest'],
    queryFn: () =>
      fetchOwnerRequestData(
        storeId || 0,
        isCheckedAcceptOption,
        selectedArrangeFilterItem
          ? selectedArrangeFilterItem.title === '보상 적립 전체'
          : true,
        selectedArrangeFilterItem
          ? selectedArrangeFilterItem.title === '보상 요청만'
          : false,
        selectedArrangeFilterItem
          ? selectedArrangeFilterItem.title === '적립 요청만'
          : false,
        0
      ),
    enabled: !!storeId,
  });

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };

  const [menuItemDataArr, setMenuItemDataArr] = useState<MenuItemData[]>(
    initialOwnerRequestMenuItemDataArr
  );

  const [isCheckedAcceptOption, setIsCheckedAcceptOption] = useState(false);

  const handleClickMenuBodyItem = (
    menuIndex: number,
    newIndex: number,
    prevIndex?: number
  ) => {
    if (!menuItemDataArr[menuIndex]) throw new Error('invalid menuIndex!!');
    if (!menuItemDataArr[menuIndex].bodyDataArr[newIndex])
      throw new Error('invalid newIndex!!');
    if (
      prevIndex !== undefined &&
      !menuItemDataArr[menuIndex].bodyDataArr[prevIndex]
    )
      throw new Error('invalid prevIndex!!');
    setMenuItemDataArr((prev) => {
      const copiedMenuItemDataArr = [...prev];
      if (prevIndex !== undefined) {
        copiedMenuItemDataArr[menuIndex].bodyDataArr[prevIndex].isChecked =
          false;
        copiedMenuItemDataArr[menuIndex].bodyDataArr[newIndex].isChecked = true;
      } else {
        copiedMenuItemDataArr[menuIndex].bodyDataArr[newIndex].isChecked =
          !copiedMenuItemDataArr[menuIndex].bodyDataArr[newIndex].isChecked;
      }
      return copiedMenuItemDataArr;
    });
  };

  const handleClickMenuItem = (prevIndex: number, newIndex: number) => {
    setMenuItemDataArr((prev) => {
      const copiedArr = [...prev];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[newIndex].isChecked = true;
      return copiedArr;
    });
  };

  const handleFilterSelectClick = (newIndex: number) => {
    const prevIndex = menuItemDataArr.findIndex((x) => x.isChecked);
    if (prevIndex === -1) throw new Error('no checked menu item!!');
    handleClickMenuItem(prevIndex, newIndex);
    setIsBottomSheetVisible(true);
  };

  const selectedArrangeFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;

  const navigate = useNavigate();
  return (
    <div>
      <HeaderBackBtn
        headerTitle='고객 요청 관리'
        onClickBackBtn={() => navigate(-1)}
      />
      <div className={styles.filtersWrapper}>
        <CheckFilter
          label='수락 안 한 요청만'
          backgroundColor='grey-light-00'
          textColor='grey-dark-01'
          isChecked={isCheckedAcceptOption}
          border={1}
          borderColor='grey-light-02'
          onClick={() => setIsCheckedAcceptOption((prev) => !prev)}
        />
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
              // handleClickResetOptionBtn={handleClickResetOptionBtn}
              onClickCompleteBtn={handleDragBottom}
            />
          }
        ></BottomSheet>
      )}
    </div>
  );
};

export { OwnerRequest as Component };
