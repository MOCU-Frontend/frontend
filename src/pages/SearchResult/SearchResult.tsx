import React, { useState } from 'react';
import styles from './SearchResult.module.css';
import { useNavigate } from 'react-router-dom';

import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../components/SearchBar/SearchBar';
import CheckFilterSelect from '../../components/CheckFilter/Select/CheckFilterSelect';
import StoreInfo from '../../components/SearchResult/atoms/StoreInfo/StoreInfo';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import SlideTabView from '../../components/SlideMenu/SlideTabView/SlideTabView';
import BtmSheetFilter, {
  FilterListData1,
  FilterListData2,
} from '../../components/SearchResult/atoms/BtmSheetFilter/BtmSheetFilter';
import BtmSheetOption, {
  OptionDataArr,
} from '../../components/SearchResult/atoms/BtmSheetOption/BtmSheetOption';

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
  const [selectedTitle1, setSelectedTitle1] = useState(
    FilterListData1.find((item) => item.isChecked)?.title || ''
  );
  const [selectedTitle2, setSelectedTitle2] = useState(
    FilterListData2.find((item) => item.isChecked)?.title || ''
  );

  const [selectedOption, setSelectedOption] = useState(
    OptionDataArr.find((item) => item.isChecked)?.title || ''
  );

  const navigate = useNavigate();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleFilterSelectClick = (id: string) => {
    setSelectedMenu(id);
    setIsBottomSheetVisible(true);
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
          FilterTitle="정렬"
          setSelectedTitle={setSelectedTitle1}
          closeBottomSheet={handleDragBottom}
        />
      ),
    },
    {
      title: '업종',
      isChecked: false,
      content: (
        <BtmSheetFilter
          FilterTitle="업종"
          setSelectedTitle={setSelectedTitle2}
          closeBottomSheet={handleDragBottom}
        />
      ),
    },
    {
      title: '옵션',
      isChecked: false,
      content: <BtmSheetOption closeBottomSheet={handleDragBottom} />,
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(menuItemDataArr[0].title);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn
          headerPaddingSize="search"
          onClickBackBtn={() => navigate(-1)}
        >
          <SearchBar
            placeholder="찾고 싶은 가게를 검색해 보세요"
            onClickSearchBtn={() => {}}
          />
        </HeaderBackBtn>
      </div>

      <div className={styles.filtersWrapper}>
        <CheckFilterSelect
          isChecked={false}
          label={selectedTitle1}
          size="small"
          border={1}
          borderColor="sub-purple-light"
          borderRadius="large"
          onClick={() => handleFilterSelectClick('정렬')}
        />
        <CheckFilterSelect
          isChecked={false}
          label={selectedTitle2}
          size="small"
          border={1}
          borderColor="sub-purple-light"
          borderRadius="large"
          onClick={() => handleFilterSelectClick('업종')}
        />

        {OptionDataArr.map(
          (data, index) =>
            data.isChecked && (
              <CheckFilterSelect
                isChecked={false}
                label={data.title}
                size="small"
                border={1}
                borderColor="sub-purple-light"
                borderRadius="large"
                onClick={() => handleFilterSelectClick('옵션')}
              />
            )
        )}
      </div>

      <div className={styles.wrapContent}>
        {searchResultData.map((data, index) => (
          <StoreInfo
            key={index}
            title={data.title}
            couponCount={data.couponCount}
            achieve={data.achieve}
            distance={data.distance}
          />
        ))}
      </div>

      {isBottomSheetVisible && (
        <BottomSheet onDragBottom={handleDragBottom}>
          <SlideTabView
            menuItemDataArr={menuItemDataArr.map((item) => ({
              ...item,
              isChecked: item.title === selectedMenu,
            }))}
            handleCheckedDataIndex={(prevIndex, newIndex) => {
              setSelectedMenu(menuItemDataArr[newIndex].title);
            }}
          />
        </BottomSheet>
      )}
    </div>
  );
};

export default SearchResult;
