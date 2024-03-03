import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './StoreDangol.module.css';
import { ReactComponent as ShareIcon } from '../../../../../assets/icon/help.svg';
import { colors } from '../../../../../styles/colors';
import CheckFilterSelect from '../../../../../components/CheckFilter/Select/CheckFilterSelect';
import CheckFilter from '../../../../../components/CheckFilter/CheckFilter';
import {
  initialDangolMenuItemDataArr,
  storeDangolinitialOptionDataArr,
} from '../../../../../store/data/searchResult';
import BottomSheet from '../../../../../components/BottomSheet/BottomSheet';
import SlideTabViewFilter from '../../../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import StoreInfoInStamp from '../../../../../components/Stamp/atoms/StoreInfoInStamp/StoreInfoInStamp';
import StoreDangolSeeMoreBtn from '../../../../../components/Store/Dangol/atoms/Btn/SeeMore/StoreDangolSeeMoreBtn';
import { useQuery } from '@tanstack/react-query';
import { StoreList } from '../../../../../store/Type/User/userDangolResponse';
import { fetchDangolData } from '../../../../../apis/dangol/dangol';
import useStore from '../../../../../store/useStore';
import { useFilterMenu } from '../../../../../hooks/useFilterMenu';
import { useOptionMenu } from '../../../../../hooks/useOptionMenu';

const StoreDangol = () => {
  const userId = useStore((state) => state.userId);
  const nowUserLocation = useStore((state) => state.nowUserLocation);
  const navigate = useNavigate();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };
  const { menuItemDataArr, handleClickMenuBodyItem, handleClickMenuItem } =
    useFilterMenu(initialDangolMenuItemDataArr);
  const handleFilterSelectClick = (newIndex: number) => {
    const prevIndex = menuItemDataArr.findIndex((x) => x.isChecked);
    if (prevIndex === -1) throw new Error('no checked menu item!!');
    handleClickMenuItem(prevIndex, newIndex);
    setIsBottomSheetVisible(true);
  };
  const selectedArrangeFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  );
  const selectedSectorFilterItem = menuItemDataArr[1].bodyDataArr.find(
    (x) => x.isChecked
  );
  const { optionDataArr, sortedOptionDataArr, handleOptionClick } =
    useOptionMenu(storeDangolinitialOptionDataArr);

  const { data: userDangolData } = useQuery({
    queryKey: ['Dangol'],
    queryFn: () =>
      fetchDangolData(
        userId || '',
        selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '최신순',
        selectedSectorFilterItem ? selectedSectorFilterItem.title : '전체',
        optionDataArr[0].isChecked,
        optionDataArr[1].isChecked,
        nowUserLocation?.latitude || 37.5404257,
        nowUserLocation?.longitude || 127.07209,
        0
      ),
    enabled: !!userId && !!nowUserLocation,
  });
  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='단골 가게'
        onClickBackBtn={() => navigate(-1)}
      >
        <div className={styles.helpBtnWrapper}>
          <button className={styles.helpBtn}>
            <ShareIcon width={24} height={24} stroke={colors.greyDark00} />
          </button>
        </div>
      </HeaderBackBtn>
      <div className={styles.seeMoreBtnWrapper}>
        {userDangolData !== undefined && (
          <StoreDangolSeeMoreBtn
            btnText={`단골로 설정 가능한 가게 ${userDangolData.availableCount}`}
            onClick={() => navigate('add')}
          />
        )}
      </div>

      <div className={styles.filtersWrapper}>
        <CheckFilterSelect
          isChecked={false}
          label={
            selectedArrangeFilterItem
              ? selectedArrangeFilterItem.title
              : 'no selected item!'
          }
          border={1}
          borderColor='main-purple'
          arrowColor={colors.mainPurple}
          onClick={() => handleFilterSelectClick(0)}
        />
        <CheckFilterSelect
          isChecked={false}
          label={
            selectedSectorFilterItem
              ? selectedSectorFilterItem.title
              : 'no selected item!'
          }
          border={1}
          borderColor='main-purple'
          arrowColor={colors.mainPurple}
          onClick={() => handleFilterSelectClick(1)}
        />

        {sortedOptionDataArr.map((data, index) => (
          <CheckFilter
            key={data.title + index}
            isChecked={data.isChecked}
            label={data.title}
            border={1}
            borderColor='main-purple'
            onClick={() => handleOptionClick(data.id)}
          />
        ))}
      </div>

      <div className={styles.wrapContent}>
        {userDangolData !== undefined &&
          userDangolData.storeList.map((data: StoreList, index: number) => (
            <StoreInfoInStamp
              key={data.name + index}
              title={data.name}
              couponCount={data.numOfStamp}
              achieve={data.reward}
              distance={Math.round(data.distance)}
              onClickCouponBtn={() => {}}
              onClickStoreDetailBtn={() => {
                navigate(`/store/${data.name}`);
              }}
              onClickMapBtn={() => navigate('/map')}
            />
          ))}
      </div>

      {isBottomSheetVisible && (
        <BottomSheet
          onDragBottom={handleDragBottom}
          onClickNotBottomSheet={handleDragBottom}
        >
          <SlideTabViewFilter
            menuItemDataArr={menuItemDataArr}
            handleCheckedDataIndex={handleClickMenuItem}
            handleClickMenuBodyItem={handleClickMenuBodyItem}
            onClickCompleteBtn={handleDragBottom}
          />
        </BottomSheet>
      )}
    </div>
  );
};

export { StoreDangol as Component };
