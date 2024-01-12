import React from 'react';
import BottomSheetNoBackground from '../../../../../BottomSheet/BottomSheetNoBackground';
import FullBtn from '../../../../../Button/FullBtn/FullBtn';
import MyNowLocationBottomSheetBtn from '../Button/BottomSheet/MyNowLocationBottomSheetBtn';
import MyNowLocationBottomSheetTitleText from '../Texts/BottomSheetTitle/MyNowLocationBottomSheetTitleText';
import styles from './MyNowLocationBottomSheet.module.css';

type LocationBtnStatus = '도로명' | '지번';

interface Props {
  onDragBottom: () => void;
  locationText: string;
  btnStatus: LocationBtnStatus;
  handleChangeBtnStatus: () => void;
  handleClickSetLocationBtn: () => void;
}

const MyNowLocationBottomSheet: React.FC<Props> = ({
  onDragBottom,
  locationText,
  btnStatus,
  handleChangeBtnStatus,
  handleClickSetLocationBtn,
}: Props) => {
  return (
    <BottomSheetNoBackground onDragBottom={onDragBottom}>
      <div className={styles.wrapper}>
        <div className={styles.paddingWrapper}>
          <MyNowLocationBottomSheetTitleText text={locationText} />
          <MyNowLocationBottomSheetBtn
            btnText={btnStatus === '지번' ? '지번으로 보기' : '도로명으로 보기'}
            onClick={handleChangeBtnStatus}
          />
        </div>
        <FullBtn
          label='이 위치로 설정하기'
          onClick={handleClickSetLocationBtn}
        />
      </div>
    </BottomSheetNoBackground>
  );
};

export default MyNowLocationBottomSheet;
