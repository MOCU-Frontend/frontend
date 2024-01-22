import React from 'react';
import Button from '../../../../Button/Button';
import styles from './ReviewBtnContent.module.css';

interface Props {
  onClickCancelBtn: () => void;
  onClickConfirmBtn: () => void;
  confirmBtnDisabled: boolean;
}

const ReviewBtnContent: React.FC<Props> = ({
  onClickCancelBtn,
  onClickConfirmBtn,
  confirmBtnDisabled,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <Button
        label='작성취소'
        onClick={onClickCancelBtn}
        backgroundColor='white'
        textColor='navy'
        border={1}
        borderColor='navy'
      />
      <Button
        label='리뷰 등록'
        onClick={onClickConfirmBtn}
        disabled={confirmBtnDisabled}
      />
    </div>
  );
};

export default ReviewBtnContent;
