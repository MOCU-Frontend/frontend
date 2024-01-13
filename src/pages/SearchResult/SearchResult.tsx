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

type FilterList = {
  title: string;
  isChecked: boolean;
};

const initialFilterListData1: FilterList[] = [
  {
    title: '거리순',
    isChecked: true,
  },
  {
    title: '적립률순',
    isChecked: false,
  },
  {
    title: '별점 높은순',
    isChecked: false,
  },
  {
    title: '리뷰 많은 순',
    isChecked: false,
  },
];

const initialFilterListData2: FilterList[] = [
  {
    title: '음식점',
    isChecked: true,
  },
  {
    title: '카페',
    isChecked: false,
  },
  {
    title: '베이커리',
    isChecked: false,
  },
  {
    title: '주류',
    isChecked: false,
  },
  {
    title: '기타',
    isChecked: false,
  },
];

type OptionData = {
  title: string;
  isChecked: boolean;
};

const initialOptionDataArr = [
  {
    title: '이벤트 중',
    isChecked: true,
  },
  {
    title: '쿠폰 사용 임박',
    isChecked: true,
  },
  {
    title: '적립 진행 중만',
    isChecked: false,
  },
  {
    title: '안 가본 곳만',
    isChecked: false,
  },
  {
    title: '기타 옵션',
    isChecked: false,
  },
];

type StoreData = {
  title: string;
  couponCount: number;
  achieve: string;
  distance: number;
};

const searchResultData: StoreData[] = [
  {
    title: '크림베이글 건대점',
    couponCount: 9,
    achieve: '아이스 아메리카노',
    distance: 150,
  },
  {
    title: '카페 안즈',
    couponCount: 9,
    achieve: '아이스 아메리카노',
    distance: 150,
  },
  {
    title: '에이투비',
    couponCount: 10,
    achieve: '크로플',
    distance: 150,
  },
  {
    title: '브런치카페',
    couponCount: 10,
    achieve: '샌드위치',
    distance: 150,
  },
  {
    title: '카페 아르무아',
    couponCount: 0,
    achieve: '아메리카노',
    distance: 150,
  },
];

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

  const [filterListData1, setFilterListData1] = useState(
    initialFilterListData1
  );
  const [selectedTitle1, setSelectedTitle1] = useState(
    initialFilterListData1[0].title
  );

  const handleItemClick1 = (index: number) => {
    const newFilterListData1 = filterListData1.map((item, i) => {
      if (i === index) {
        setSelectedTitle1(item.title);
        return { ...item, isChecked: true };
      }
      return { ...item, isChecked: false };
    });

    setFilterListData1(newFilterListData1);
  };

  const [filterListData2, setFilterListData2] = useState(
    initialFilterListData2
  );
  const [selectedTitle2, setSelectedTitle2] = useState(
    initialFilterListData2[0].title
  );

  const handleItemClick2 = (index: number) => {
    const newFilterListData2 = filterListData2.map((item, i) => {
      if (i === index) {
        setSelectedTitle2(item.title);
        return { ...item, isChecked: true };
      }
      return { ...item, isChecked: false };
    });

    setFilterListData2(newFilterListData2);
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
          FilterTitle='정렬'
          FilterArray={filterListData1}
          onClick={handleItemClick1}
        />
      ),
    },
    {
      title: '업종',
      isChecked: false,
      content: (
        <BtmSheetFilter
          FilterTitle='업종'
          FilterArray={filterListData2}
          onClick={handleItemClick2}
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
          label={selectedTitle1}
          size='small'
          border={1}
          borderColor='sub-purple-light'
          borderRadius='large'
          onClick={() => handleFilterSelectClick('정렬')}
        />
        <CheckFilterSelect
          isChecked={false}
          label={selectedTitle2}
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
