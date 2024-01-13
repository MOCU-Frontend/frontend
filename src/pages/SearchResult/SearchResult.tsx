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
  initialArrangementFilterDataArr,
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

  const [arrangementFilterData, setArrangementFilterData] = useState(
    initialArrangementFilterDataArr
  );

  const handleClickArrangeFilterItem = (prevIndex: number, index: number) => {
    setArrangementFilterData((prevState) => {
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
  const [OptionDataArr, setOptionDataArr] = useState(initialOptionDataArr);

  const handleOptionClick = (index: number) => {
    setOptionDataArr((prevArr) => {
      const copiedArr = [...prevArr];
      if (!copiedArr[index]) throw new Error('not valid optionArr index!!');
      copiedArr[index].isChecked = !copiedArr[index].isChecked;
      return copiedArr;
    });
  };

  // 초기화 버튼 클릭했을 때
  const handleResetClick = () => {
    setOptionDataArr((prevArr) =>
      prevArr.map((data) => {
        data.isChecked = false;
        return data;
      })
    );
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
          filterArray={arrangementFilterData}
          onClick={handleClickArrangeFilterItem}
        />
      ),
    },
    {
      title: '업종',
      isChecked: false,
      content: (
        <BtmSheetFilter
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
          OptionDataArray={OptionDataArr}
        />
      ),
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(menuItemDataArr[0].title);

  const selectedArrangeFilterItem = arrangementFilterData.find(
    (x) => x.isChecked
  );
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

        {OptionDataArr.map(
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
