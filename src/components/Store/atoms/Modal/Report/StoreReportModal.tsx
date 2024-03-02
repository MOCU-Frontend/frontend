import React from 'react';
import ModalConfirm from '../../../../Modal/ModalConfirm/ModalConfirm';

interface Props {
  onClickYes: () => void;
  onClickNo: () => void;
  onClickX: () => void;
  reportedUserName: string;
}

const StoreReportModal: React.FC<Props> = ({
  onClickNo,
  onClickX,
  onClickYes,
  reportedUserName,
}: Props) => {
  return (
    <>
      <ModalConfirm
        headerTitle='댓글 신고'
        bodyText='이 댓글을 신고할까요?'
        subText={`작성자: ${reportedUserName}`}
        onClickYes={onClickYes}
        onClickNo={onClickNo}
        onClickX={onClickX}
      />
    </>
  );
};

export default StoreReportModal;
