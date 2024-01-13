import React, { useState } from 'react';
import styles from './SearchResult.module.css';
import { useNavigate } from 'react-router-dom';

import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../components/SearchBar/SearchBar';
import CheckFilterSelect from '../../components/CheckFilter/Select/CheckFilterSelect';
import StoreInfo from '../../components/SearchResult/atoms/StoreInfo/StoreInfo';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import SlideTabView from '../../components/SlideMenu/SlideTabView/SlideTabView';
import BtmSheetFilter from '../../components/SearchResult/atoms/BtmSheetFilter/BtmSheetFilter';
import BtmSheetOption from '../../components/SearchResult/atoms/BtmSheetOption/BtmSheetOption';
import { ReactComponent as ResetImage } from '../../assets/icon/reset.svg';
import {
  initialArrangeFilterDataArr,
  initialSectorFilterDataArr,
  initialOptionDataArr,
  searchResultData,
} from '../../store/data/searchResult';

const SearchResult = () => {
  const navigate = useNavigate();

  // BottomSheet를 보이게 하는지 상태관리
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  // 필터를 클릭했을 때
  const handleFilterSelectClick = (id: string) => {
    setSelectedMenu(id);
    setIsBottomSheetVisible(true);
  };

  // BtmSheetFilter 상태 관리

  const [arrangeFilterData, setArrangeFilterData] = useState(
    initialArrangeFilterDataArr
  );

  const handleClickArrangeFilterItem = (prevIndex: number, index: number) => {
    setArrangeFilterData((prevState) => {
      const copiedArr = [...prevState];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[index].isChecked = true;
      return copiedArr;
    });
  };

  const [sectorFilterData, setSectorFilterData] = useState(
    initialSectorFilterDataArr
  );

  const handleClickSectorFilterItem = (prevIndex: number, index: number) => {
    setSectorFilterData((prevState) => {
      const copiedArr = [...prevState];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[index].isChecked = true;
      return copiedArr;
    });
  };

  // BtmSheetOption 상태 관리
  const [OptionData, setOptionData] = useState(initialOptionDataArr);

  const handleOptionClick = (index: number) => {
    const checkedItems = OptionData.filter((item) => item.isChecked);
    const newOptionData = OptionData.map((item, i) => {
      if (i === index) {
        // isChecked가 true인 항목이 하나만 남았고, 그 항목을 클릭했다면
        // isChecked를 false로 만들지 않음
        if (checkedItems.length === 1 && item.isChecked) {
          return item;
        }

        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    setOptionData(newOptionData);
  };

  // 초기화 버튼 클릭했을 때
  const handleResetClick = () => {
    setOptionData(initialOptionDataArr);
  };

  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };

  const menuItemDataArr = [
    {
      title: '정렬',
      isChecked: true,
      content: (
        <BtmSheetFilter
          filterTitle='정렬'
          filterArray={arrangeFilterData}
          onClick={handleClickArrangeFilterItem}
        />
      ),
    },
    {
      title: '업종',
      isChecked: false,
      content: (
        <BtmSheetFilter
          filterTitle='업종'
          filterArray={sectorFilterData}
          onClick={handleClickSectorFilterItem}
        />
      ),
    },
    {
      title: '옵션',
      isChecked: false,
      content: (
        <BtmSheetOption
          onClick={handleOptionClick}
          OptionDataArray={OptionData}
        />
      ),
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(menuItemDataArr[0].title);

  const selectedArrangeFilterItem = arrangeFilterData.find((x) => x.isChecked);
  const selectedSectorFilterItem = sectorFilterData.find((x) => x.isChecked);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn
          headerPaddingSize='search'
          onClickBackBtn={() => navigate(-1)}
        >
          <SearchBar
            placeholder='찾고 싶은 가게를 검색해 보세요'
            onClickSearchBtn={(value) => navigate(`/storesearch/${value}`)}
          />
        </HeaderBackBtn>
      </div>

      <div className={styles.filtersWrapper}>
        <CheckFilterSelect
          isChecked={false}
          label={
            selectedArrangeFilterItem
              ? selectedArrangeFilterItem.title
              : 'no selected item!'
          }
          size='small'
          border={1}
          borderColor='sub-purple-light'
          borderRadius='large'
          onClick={() => handleFilterSelectClick('정렬')}
        />
        <CheckFilterSelect
          isChecked={false}
          label={
            selectedSectorFilterItem
              ? selectedSectorFilterItem.title
              : 'no selected item!'
          }
          size='small'
          border={1}
          borderColor='sub-purple-light'
          borderRadius='large'
          onClick={() => handleFilterSelectClick('업종')}
        />

        {OptionData.map(
          (data, index) =>
            data.isChecked && (
              <CheckFilterSelect
                key={data.title + index}
                isChecked={false}
                label={data.title}
                size='small'
                border={1}
                borderColor='sub-purple-light'
                borderRadius='large'
                onClick={() => handleFilterSelectClick('옵션')}
              />
            )
        )}
      </div>

      <div className={styles.wrapContent}>
        {searchResultData.map((data, index) => (
          <StoreInfo
            key={data.title + index}
            title={data.title}
            couponCount={data.couponCount}
            achieve={data.achieve}
            distance={data.distance}
            onClickCouponeBtn={() => {}}
            onClickStoreDetailBtn={() => {}}
          />
        ))}
      </div>

      {isBottomSheetVisible && (
        <BottomSheet onDragBottom={handleDragBottom}>
          {/* <div className={styles.emptySpace} onClick={handleDragBottom} /> */}
          <SlideTabView
            menuItemDataArr={menuItemDataArr.map((item) => ({
              ...item,
              isChecked: item.title === selectedMenu,
            }))}
            handleCheckedDataIndex={(prevIndex, newIndex) => {
              setSelectedMenu(menuItemDataArr[newIndex].title);
            }}
          />
          {selectedMenu === '옵션' && (
            <button className={styles.wrapReset} onClick={handleResetClick}>
              <ResetImage />
              <div className={styles.resetText}>전체 초기화</div>
            </button>
          )}
        </BottomSheet>
      )}
    </div>
  );
};

export default SearchResult;
