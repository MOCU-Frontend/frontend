import React, { useEffect } from 'react';
import ModalConfirm from '../../../../Modal/ModalConfirm/ModalConfirm';
import ModalDone from '../../../../Modal/ModalDone/ModalDone';
import ModalWaiting from '../../../../Modal/ModalWaiting/ModalWaiting';

interface Props {
  couponModalLevel: CouponModalLevel | null;
  setCouponModalLevel: React.Dispatch<
    React.SetStateAction<CouponModalLevel | null>
  >;
  onCancelModal: () => void;
  isRegularCustomer: boolean;
  handleRegularCustomer: () => void;
}
type CouponModalLevel = 'confirm' | 'waiting' | 'done' | 'regularCustomer';

const MapCouponModal: React.FC<Props> = ({
  couponModalLevel,
  setCouponModalLevel,
  onCancelModal,
  isRegularCustomer,
  handleRegularCustomer,
}: Props) => {
  const handleCancelModal = () => {
    onCancelModal();
    setCouponModalLevel(null);
  };

  useEffect(() => {
    if (couponModalLevel === 'waiting') {
      setTimeout(() => {
        setCouponModalLevel('done');
      }, 2000);
    } else if (couponModalLevel === 'done') {
      setTimeout(() => {
        if (isRegularCustomer) {
          handleCancelModal();
        } else {
          setCouponModalLevel('regularCustomer');
        }
      }, 2000);
    }
  }, [couponModalLevel]);

  switch (couponModalLevel) {
    case 'confirm':
      return (
        <ModalConfirm
          headerTitle='쿠폰 사용'
          bodyText='쿠폰을 사용할까요?'
          subText='크림베이글 건대점'
          informText='아이스 아메리카노 한 잔'
          onClickNo={handleCancelModal}
          onClickYes={() => setCouponModalLevel('waiting')}
          onClickX={handleCancelModal}
        />
      );
    case 'waiting':
      return (
        <ModalWaiting
          bodyText='쿠폰 사용 대기 중'
          bodySubText='가게에서 요청을 확인하고 있어요.'
          subText='크림베이글 건대점'
          informText='아이스 아메리카노 한 잔'
        />
      );
    case 'done':
      return (
        <ModalDone
          bodyText='쿠폰 사용 완료!'
          bodySubText='가게에서 받을 보상을 확인해주세요.'
          subText='크림베이글 건대점'
          informText='아이스 아메리카노 1잔'
        />
      );
    case 'regularCustomer':
      return (
        <ModalConfirm
          headerTitle='단골 설정'
          bodyText='이 가게를 단골로 설정할까요?'
          subText='단골 설정 시, 새로운 이벤트를 푸시로 알려드려요!'
          onClickNo={handleCancelModal}
          onClickYes={() => {
            handleRegularCustomer();
            handleCancelModal();
          }}
          onClickX={handleCancelModal}
        />
      );
    default:
      return <></>;
  }
};

export default MapCouponModal;
