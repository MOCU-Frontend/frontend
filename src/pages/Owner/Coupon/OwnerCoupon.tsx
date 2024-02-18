import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchOwnerCouponData } from '../../../apis/owner/coupon';
import CheckFilter from '../../../components/CheckFilter/CheckFilter';
import CheckFilterSelect from '../../../components/CheckFilter/Select/CheckFilterSelect';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import OwnerCouponItem from '../../../components/Owner/Coupon/atoms/Item/OwnerCouponItem';
import SlideMenuTab from '../../../components/SlideMenu/atoms/MenuTab/SlideMenuTab';
import styles from './OwnerCoupon.module.css';
type MenuData = {
  title: string;
  isChecked: boolean;
};
interface Props {}

const OwnerCoupon: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
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
    queryFn: () => fetchOwnerCouponData(5, '적립 많은 순'),
  });

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
          isChecked={false}
          border={1}
          borderColor='grey-light-02'
          onClick={() => {}}
        />
        <CheckFilterSelect
          label='적립 높은순'
          backgroundColor='grey-light-00'
          textColor='grey-dark-01'
          isChecked={false}
          border={1}
          borderColor='grey-light-02'
          onClick={() => {}}
        />
      </div>
      {ownerCouponData &&
        ownerCouponData.map((data, index) => (
          <OwnerCouponItem
            key={data.userName + index}
            isDangol={false}
            userName={data.userName}
            accumText={`${data.numOfStamp}/${data.maxStamp}`}
            couponNum={data.useCount}
          />
        ))}
    </div>
  );
};

export default OwnerCoupon;
