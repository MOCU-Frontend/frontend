import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Stamp.module.css';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import CheckFilterSelect from '../../components/CheckFilter/Select/CheckFilterSelect';
import StoreInfoInStamp from '../../components/Stamp/atoms/StoreInfoInStamp/StoreInfoInStamp';
import MapCouponModal from '../../components/Map/atoms/Modal/Coupon/MapCouponModal';

import {
  searchResultData,
  initialMenuItemDataArr,
  MenuItemData,
} from '../../store/data/searchResult';

type ModalLevel = 'confirm' | 'waiting' | 'done';
type CouponModalLevel = 'confirm' | 'waiting' | 'done' | 'regularCustomer';

const Stamp = () => {
  const navigate = useNavigate();

  const [isCouponModalVisible, setIsCouponModalVisible] = useState(false);
  const [couponModalLevel, setCouponModalLevel] =
    useState<CouponModalLevel | null>(null);

  const handleClickCouponBtn = () => {
    setCouponModalLevel('confirm');
    setIsCouponModalVisible(true);
  };

  const handleCloseCouponModal = () => {
    setIsCouponModalVisible(false);
    setCouponModalLevel(null); // Reset modal level when the modal is closed
  };

  const handleRegularCustomer = () => {
    console.log('Setting as a regular customer...');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn
          onClickBackBtn={() => navigate('/home')}
          headerTitle="적립 현황"
        />
      </div>

      <div className={styles.filtersWrapper}>
        <CheckFilterSelect
          label="최신순"
          isChecked={false}
          border={1}
          borderColor={'main-purple'}
        />
        <CheckFilterSelect
          label="카테고리"
          isChecked={false}
          border={1}
          borderColor={'main-purple'}
        />
        <CheckFilterSelect
          label="이벤트"
          isChecked={false}
          border={1}
          borderColor={'main-purple'}
        />
        <CheckFilterSelect
          label="사용 가능 쿠폰"
          isChecked={false}
          border={1}
          borderColor={'main-purple'}
        />
      </div>

      <div className={styles.contentWrapper}>
        {searchResultData.map((data, index) => (
          <StoreInfoInStamp
            key={data.title + index}
            title={data.title}
            couponCount={data.couponCount}
            achieve={data.achieve}
            distance={data.distance}
            onClickCouponBtn={handleClickCouponBtn}
            onClickStoreDetailBtn={() => {}}
          />
        ))}
      </div>

      {isCouponModalVisible && (
        <MapCouponModal
          couponModalLevel={couponModalLevel}
          setCouponModalLevel={setCouponModalLevel}
          onCancelModal={handleCloseCouponModal}
          isRegularCustomer={false}
          handleRegularCustomer={handleRegularCustomer}
        />
      )}
    </div>
  );
};

export default Stamp;
