import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './StoreDangol.module.css';
import { ReactComponent as ShareIcon } from '../../../assets/icon/help.svg';
import { colors } from '../../../styles/colors';
import CheckFilterSelect from '../../../components/CheckFilter/Select/CheckFilterSelect';
import CheckFilter from '../../../components/CheckFilter/CheckFilter';
import {
  initialMenuItemDataArr,
  MenuItemData,
} from '../../../store/data/searchResult';
import BottomSheet from '../../../components/BottomSheet/BottomSheet';
import SlideTabViewFilterOrOption from '../../../components/SlideMenu/SlideTabView/FilterOrOption/SlideTabViewFilterOrOption';
import StoreInfoInStamp from '../../../components/Stamp/atoms/StoreInfoInStamp/StoreInfoInStamp';
import StoreDangolSeeMoreBtn from '../../../components/Store/Dangol/atoms/Btn/SeeMore/StoreDangolSeeMoreBtn';

interface Props {}

const StoreDangol: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };

  const [menuItemDataArr, setMenuItemDataArr] = useState<MenuItemData[]>(
    initialMenuItemDataArr
  );
  const [couponStoreDataArr, setCouponStoreDataArr] = useState([
    {
      title: '카페롱',
      couponCount: 8,
      achieve: '바닐라 마카롱',
      distance: 100,
    },
    {
      title: '드로잉레시피',
      couponCount: 10,
      achieve: '오븐 스파게티',
      distance: 100,
    },
    {
      title: '크림베이글 건대점',
      couponCount: 9,
      achieve: '아이스 아메리카노 한 잔',
      distance: 100,
    },
  ]);
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

  // 필터를 클릭했을 때
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

  const handleClickResetOptionBtn = (menuIndex: number) => {
    if (!menuItemDataArr[menuIndex]) throw new Error('invalid menuIndex!!');
    if (menuItemDataArr[menuIndex].bodyType === 'filter')
      throw new Error('can reset only in option type!!');
    setMenuItemDataArr((prevArr) => {
      const copiedArr = [...prevArr];
      copiedArr[menuIndex].bodyDataArr.forEach((item) => {
        item.isChecked = false;
      });
      return copiedArr;
    });
  };

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
        <StoreDangolSeeMoreBtn
          btnText='단골로 설정 가능한 가게 2'
          onClick={() => navigate('add')}
        />
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

        {menuItemDataArr[2].bodyDataArr.map(
          (data, index) =>
            data.isChecked && (
              <CheckFilter
                key={data.title + index}
                isChecked={false}
                label={data.title}
                border={1}
                borderColor='main-purple'
                onClick={() => handleFilterSelectClick(2)}
              />
            )
        )}
      </div>

      <div className={styles.wrapContent}>
        {couponStoreDataArr.map((data, index) => (
          <StoreInfoInStamp
            key={data.title + index}
            title={data.title}
            couponCount={data.couponCount}
            achieve={data.achieve}
            distance={data.distance}
            onClickCouponBtn={() => {}}
            onClickStoreDetailBtn={() => {}}
            onClickMapBtn={() => navigate('/map')}
          />
        ))}
      </div>

      {isBottomSheetVisible && (
        <BottomSheet
          onDragBottom={handleDragBottom}
          onClickNotBottomSheet={handleDragBottom}
        >
          <SlideTabViewFilterOrOption
            menuItemDataArr={menuItemDataArr}
            handleCheckedDataIndex={handleClickMenuItem}
            handleClickMenuBodyItem={handleClickMenuBodyItem}
            handleClickResetOptionBtn={handleClickResetOptionBtn}
          />
        </BottomSheet>
      )}
    </div>
  );
};

export default StoreDangol;
