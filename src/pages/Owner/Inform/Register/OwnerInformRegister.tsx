import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullBtn from '../../../../components/Button/FullBtn/FullBtn';
import HeaderXBtn from '../../../../components/HeaderBackBtn/HeaderXBtn/HeaderXBtn';
import OwnerInformEditHeaderBtn from '../../../../components/Owner/Inform/Edit/atoms/Btns/Header/OwnerInformEditHeaderBtn';
import OwnerInformEditCheckBoxContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/CheckBox/OwnerInformEditCheckBoxContent';
import OwnerInformEditEventContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Event/OwnerInformEditEventContent';
import OwnerInformEditFilterContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Filter/OwnerInformEditFilterContent';
import OwnerInformEditImgContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Img/OwnerInformEditImgContent';
import OwnerInformEditInputContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Input/OwnerInformEditInputContent';
import OwnerInformEditMenuContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Menu/OwnerInformEditMenuContent';
import OwnerInformEdiStampContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Stamp/OwnerInformEdiStampContent';
import { useCarouselData } from '../../../../hooks/useCarouselData';
import { useOwnerStoreData } from '../../../../hooks/useOwnerStoreData';
import { OwnerStoreMenuData } from '../../../../store/Type/Owner/owner';
import useStore from '../../../../store/useStore';
import styles from './OwnerInformRegister.module.css';
const dataArr = [
  { name: '베이커리', isChecked: true },
  { name: '카페', isChecked: false },
  { name: '음식점', isChecked: false },
  { name: '주류', isChecked: false },
  { name: '기타', isChecked: false },
];
const OwnerInformRegister: React.FC = () => {
  const navigate = useNavigate();
  const userId = useStore((state) => state.userId);
  const { ownerStoreDataPostMutation } = useOwnerStoreData();
  const [sangho, setSangho] = useState('');
  const { carouselItemArr: filterArr, handleCheckedDataIndex } =
    useCarouselData(dataArr);
  const [couponGift, setCouponGift] = useState('');
  const [isEventChecked, setIsEventChecked] = useState(false);
  const [eventText, setEventText] = useState('');
  const [isCouponChecked, setIsCouponChecked] = useState(false);
  const [maxStamp, setMaxStamp] = useState(10);
  const handleClickFilter = (index: number) => {
    const prevIndex = filterArr.findIndex((x) => x.isChecked);
    handleCheckedDataIndex(prevIndex, index);
  };
  const [menuArr, setMenuArr] = useState<OwnerStoreMenuData[]>([]);
  const checkedCategoryFilter = filterArr.find((x) => x.isChecked);
  return (
    <div>
      <HeaderXBtn headerTitle='가게 정보 입력' onClickXBtn={() => navigate(-1)}>
        <div className={styles.headerBtnWrapper}>
          <OwnerInformEditHeaderBtn label='임시저장' onClick={() => {}} />
        </div>
      </HeaderXBtn>
      <div className={styles.overflowContentWrapper}>
        <OwnerInformEditImgContent />
      </div>
      <div className={styles.contentWrapper}>
        <OwnerInformEditInputContent
          title='상호명'
          inputValue={sangho}
          handleChangeInputValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSangho(e.target.value)
          }
          placeholder='상호명을 입력해주세요.'
        />
      </div>
      <div className={styles.overflowContentWrapper}>
        <OwnerInformEditFilterContent
          title='업종'
          filterArr={filterArr}
          handleClickFilter={handleClickFilter}
        />
      </div>
      <div className={styles.contentWrapper}>
        <OwnerInformEdiStampContent
          stampCount={maxStamp}
          handlePlus={() => setMaxStamp((num) => num + 1)}
          handleMinus={() => setMaxStamp((num) => (num > 0 ? num - 1 : 0))}
        />

        <OwnerInformEditInputContent
          title='쿠폰 사용 시 보상'
          inputValue={couponGift}
          handleChangeInputValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCouponGift(e.target.value)
          }
          placeholder='새로운 보상을 입력해주세요.'
        />
        <OwnerInformEditCheckBoxContent
          isChecked={isCouponChecked}
          label='쿠폰 사용 횟수별로 다르게 설정'
          handleCheck={() => setIsCouponChecked((prev) => !prev)}
        />
        <OwnerInformEditEventContent
          isChecked={isEventChecked}
          handleChangeEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEventText(e.target.value)
          }
          handleCheck={() => setIsEventChecked((prev) => !prev)}
          eventText={eventText}
        />
        <OwnerInformEditMenuContent
          menuArr={menuArr}
          handleAddMenu={(newMenu: OwnerStoreMenuData) =>
            setMenuArr((prevArr) => [...prevArr, newMenu])
          }
          handleDeleteMenu={(index: number) =>
            setMenuArr((prevArr) => {
              const copiedArr = [...prevArr];
              copiedArr.splice(index, 1);
              return copiedArr;
            })
          }
        />
      </div>
      <div className={styles.submitBtnWrapper}>
        <FullBtn
          label='입력 완료하기'
          onClick={() => {
            if (
              sangho &&
              checkedCategoryFilter &&
              couponGift &&
              menuArr.length > 0 &&
              maxStamp > 0
            ) {
              ownerStoreDataPostMutation.mutate({
                ownerId: userId || '',
                storeName: sangho,
                category: checkedCategoryFilter.name,
                address: '서울 광진구 아차산로 241 1층 106호',
                latitude: 37.5406341,
                longitude: 127.070144,
                reward: couponGift,
                maxStamp,
                mainImageUrl: 'http://example.com/main_image.jpg',
                storeImages: [
                  'http://example.com/image1.jpg',
                  'http://example.com/image2.jpg',
                ],
                menus: menuArr,
                event: eventText || null,
              });
            }
          }}
          disabled={
            !(
              sangho &&
              checkedCategoryFilter &&
              couponGift &&
              menuArr.length > 0 &&
              maxStamp > 0
            )
          }
        />
      </div>
    </div>
  );
};

export { OwnerInformRegister as Component };
