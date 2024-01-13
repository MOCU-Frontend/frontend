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

  const [menuItemDataArr, setMenuItemDataArr] = useState([
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
  ]);

  const handleClickMenuItem = (prevIndex: number, newIndex: number) => {
    setMenuItemDataArr((prev) => {
      const copiedArr = [...prev];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[newIndex].isChecked = true;
      return copiedArr;
    });
  };

  // 필터를 클릭했을 때
  const handleFilterSelectClick = (newIndex: number) => {
    const prevIndex = menuItemDataArr.findIndex((x) => x.isChecked);
    if (prevIndex === -1) throw new Error('no checked menu item!!');
    handleClickMenuItem(prevIndex, newIndex);
    setIsBottomSheetVisible(true);
  };

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
          onClick={() => handleFilterSelectClick(0)}
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
          onClick={() => handleFilterSelectClick(1)}
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
                onClick={() => handleFilterSelectClick(2)}
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
            menuItemDataArr={menuItemDataArr}
            handleCheckedDataIndex={handleClickMenuItem}
          />
          {/* {selectedMenu === '옵션' && (
            <button className={styles.wrapReset} onClick={handleResetClick}>
              <ResetImage />
              <div className={styles.resetText}>전체 초기화</div>
            </button>
          )} */}
        </BottomSheet>
      )}
    </div>
  );
};

export default SearchResult;
