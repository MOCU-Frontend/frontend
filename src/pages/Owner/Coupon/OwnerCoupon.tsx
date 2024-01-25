import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [couponData, setCouponData] = useState([
    { isDangol: true, userName: '민초', accumText: '10/10', couponNum: 6 },
    { isDangol: true, userName: '모쿠', accumText: '10/10', couponNum: 2 },
    { isDangol: false, userName: '송희', accumText: '9/10', couponNum: 2 },
    { isDangol: true, userName: '빵돌이', accumText: '6/10', couponNum: 10 },
    { isDangol: false, userName: '도토리', accumText: '5/10', couponNum: 6 },
  ]);
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
      {couponData.map((data, index) => (
        <OwnerCouponItem
          key={data.userName + index}
          isDangol={data.isDangol}
          userName={data.userName}
          accumText={data.accumText}
          couponNum={data.couponNum}
        />
      ))}
    </div>
  );
};

export default OwnerCoupon;
