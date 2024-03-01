import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchOwnerCouponData } from '../../../apis/owner/coupon';
import BottomSheet from '../../../components/BottomSheet/BottomSheet';
import CheckFilter from '../../../components/CheckFilter/CheckFilter';
import CheckFilterSelect from '../../../components/CheckFilter/Select/CheckFilterSelect';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import OwnerCouponItem from '../../../components/Owner/Coupon/atoms/Item/OwnerCouponItem';
import SlideMenuTab from '../../../components/SlideMenu/atoms/MenuTab/SlideMenuTab';
import SlideTabViewFilter from '../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import { initialOwnerCouponMenuItemDataArr } from '../../../store/data/searchResult';
import { MenuItemData } from '../../../store/data/stamp';
import useStore from '../../../store/useStore';
import styles from './OwnerCoupon.module.css';
type MenuData = {
  title: string;
  isChecked: boolean;
};
interface Props {}

const OwnerCoupon: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  const userId = useStore((state) => state.userId);
  const [menu, setMenu] = useState<MenuData[]>([
    { title: '현황리스트', isChecked: true },
    { title: '데이터차트', isChecked: false },
  ]);
  const handleCheckedDataIndex = (prevIndex: number, newIndex: number) => {
    if (!menu[prevIndex]) throw new Error('invalid prevIndex!!');
    if (!menu[newIndex]) throw new Error('invalid newIndex!!');
    setMenu((prevArr) => {
      const copiedArr = [...prevArr];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[newIndex].isChecked = true;
      return copiedArr;
    });
  };

  const {
    data: ownerCouponData,
    isLoading: isOwnerCouponDataLoading,
    isError: isOwnerCouponDataError,
  } = useQuery({
    queryKey: ['OwnerCoupon'],
    queryFn: () =>
      fetchOwnerCouponData(
        userId || '',
        isCheckedDangolOption,
        selectedArrangeFilterItem
          ? selectedArrangeFilterItem.title
          : '적립 높은 순'
      ),
  });
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };

  const [menuItemDataArr, setMenuItemDataArr] = useState<MenuItemData[]>(
    initialOwnerCouponMenuItemDataArr
  );

  const [isCheckedDangolOption, setIsCheckedDangolOption] = useState(false);

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

  return (
    <div>
      <HeaderBackBtn
        headerTitle='고객 적립 현황'
        onClickBackBtn={() => navigate(-1)}
      />
      <div className={styles.menuWrapper}>
        <SlideMenuTab
          menuDataArr={menu}
          handleCheckedDataIndex={handleCheckedDataIndex}
        />
      </div>

      <div className={styles.filtersWrapper}>
        <CheckFilter
          label='단골만'
          backgroundColor='grey-light-00'
          textColor='grey-dark-01'
          isChecked={isCheckedDangolOption}
          border={1}
          borderColor='grey-light-02'
          onClick={() => setIsCheckedDangolOption((prev) => !prev)}
        />
        <CheckFilterSelect
          label={selectedArrangeFilterItem?.title || '적립 높은 순'}
          backgroundColor='grey-light-00'
          textColor='grey-dark-01'
          isChecked={false}
          border={1}
          borderColor='grey-light-02'
          onClick={() => handleFilterSelectClick(0)}
        />
      </div>
      {ownerCouponData &&
        ownerCouponData.map((data, index) => (
          <OwnerCouponItem
            key={data.userName + index}
            isDangol={data.regular}
            userName={data.userName}
            accumText={`${data.numOfStamp}/${data.maxStamp}`}
            couponNum={data.useCount}
          />
        ))}
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

export { OwnerCoupon as Component };
