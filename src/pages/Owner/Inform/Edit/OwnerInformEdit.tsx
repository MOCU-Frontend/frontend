import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderXBtn from '../../../../components/HeaderBackBtn/HeaderXBtn/HeaderXBtn';
import OwnerInformEditHeaderBtn from '../../../../components/Owner/Inform/Edit/atoms/Btns/Header/OwnerInformEditHeaderBtn';
import OwnerInformEditCheckBoxContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/CheckBox/OwnerInformEditCheckBoxContent';
import OwnerInformEditEventContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Event/OwnerInformEditEventContent';
import OwnerInformEditFilterContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Filter/OwnerInformEditFilterContent';
import OwnerInformEditImgContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Img/OwnerInformEditImgContent';
import OwnerInformEditInputContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Input/OwnerInformEditInputContent';
import OwnerInformEditInputsContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Inputs/OwnerInformEditInputsContent';
import OwnerInformEditMenuContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Menu/OwnerInformEditMenuContent';
import OwnerInformEdiStampContent from '../../../../components/Owner/Inform/Edit/atoms/Contents/Stamp/OwnerInformEdiStampContent';
import styles from './OwnerInformEdit.module.css';

const OwnerInformEdit: React.FC = () => {
  const navigate = useNavigate();
  const [sangho, setSangho] = useState('');
  const [couponGiftArr, setCouponGiftArr] = useState([
    {
      title: '1번째 보상',
      placeholder: '새로운 보상을 입력해주세요.',
      inputValue: '',
    },
    {
      title: '2번째 보상',
      placeholder: '새로운 보상을 입력해주세요.',
      inputValue: '',
    },
  ]);
  const [isEventChecked, setIsEventChecked] = useState(false);
  const [eventText, setEventText] = useState('');
  const [isCouponChecked, setIsCouponChecked] = useState(false);
  const handleChangeCouponGiftArrInputValue = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!couponGiftArr[index]) throw new Error('invalid index!!');
    setCouponGiftArr((prevArr) => {
      const copiedArr = [...prevArr];
      copiedArr[index].inputValue = e.target.value;
      return copiedArr;
    });
  };
  return (
    <div>
      <HeaderXBtn headerTitle='가게 정보 수정' onClickXBtn={() => navigate(-1)}>
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
          filterArr={[
            { name: '베이커리', isChecked: true },
            { name: '카페', isChecked: false },
            { name: '음식점', isChecked: false },
            { name: '주류', isChecked: false },
            { name: '기타', isChecked: false },
          ]}
        />
      </div>
      <div className={styles.contentWrapper}>
        <OwnerInformEdiStampContent
          stampCount={0}
          handlePlus={() => {}}
          handleMinus={() => {}}
        />
        <OwnerInformEditInputsContent
          title='쿠폰 사용 시 보상'
          subInputInformArr={couponGiftArr}
          moreBtnText='다음 단계 보상 추가하기'
          onClickMoreBtn={() => {}}
          handleChangeInputValue={handleChangeCouponGiftArrInputValue}
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
          menuArr={[
            { name: '아이스아메리카노', price: 4500 },
            { name: '블루베리치즈베이글', price: 5200 },
          ]}
        />
      </div>
    </div>
  );
};

export default OwnerInformEdit;
