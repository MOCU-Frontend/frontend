import React, { useEffect } from 'react';
import ModalConfirm from '../../../../Modal/ModalConfirm/ModalConfirm';
import ModalDone from '../../../../Modal/ModalDone/ModalDone';
import ModalWaiting from '../../../../Modal/ModalWaiting/ModalWaiting';

interface Props {
  stampModalLevel: ModalLevel | null;
  setStampModalLevel: React.Dispatch<React.SetStateAction<ModalLevel | null>>;
  onCancelModal: () => void;
  handleRequestStamp: (onSuccess: () => void) => void;
  onClickDoneModalRightBtn?: () => void;
}
type ModalLevel = 'confirm' | 'waiting' | 'done';

const MapStampModal: React.FC<Props> = ({
  stampModalLevel,
  setStampModalLevel,
  onCancelModal,
  handleRequestStamp,
  onClickDoneModalRightBtn,
}: Props) => {
  const handleCancelModal = () => {
    onCancelModal();
    setStampModalLevel(null);
  };
  useEffect(() => {
    if (stampModalLevel === 'waiting') {
      handleRequestStamp(() => setStampModalLevel('done'));
    }
  }, [stampModalLevel]);
  switch (stampModalLevel) {
    case 'confirm':
      return (
        <ModalConfirm
          headerTitle='스탬프 적립'
          bodyText='스탬프를 적립할까요?'
          subText='크림베이글 건대점'
          informText='현재 9/10'
          onClickNo={handleCancelModal}
          onClickYes={() => setStampModalLevel('waiting')}
          onClickX={handleCancelModal}
        />
      );
    case 'waiting':
      return (
        <ModalWaiting
          bodyText='스탬프 적립 대기 중'
          bodySubText='가게에서 요청을 확인하고 있어요.'
          subText='크림베이글 건대점'
          informText='적립 10/10 예정'
        />
      );
    case 'done':
      return (
        <ModalDone
          bodyText='스탬프 적립 완료!'
          bodySubText='가게에서 적립 요청을 수락했습니다.'
          subText='크림베이글 건대점'
          informText='적립 10/10'
          leftBtnLabel='닫기'
          rightBtnLabel='리뷰 남기러 가기'
          onClickLeftBtn={handleCancelModal}
          onClickRightBtn={
            onClickDoneModalRightBtn
              ? onClickDoneModalRightBtn
              : handleCancelModal
          }
        />
      );
    default:
      return <></>;
  }
};

export default MapStampModal;
