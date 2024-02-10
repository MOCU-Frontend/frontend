import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import { colors } from '../../../../../styles/colors';
import styles from './StoreDangolAdd.module.css';
import { ReactComponent as ShareIcon } from '../../../../../assets/icon/help.svg';
import StoreDangolAddDeleteBtn from '../../../../../components/Store/Dangol/Add/atoms/Btn/Delete/StoreDangolAddDeleteBtn';
import BodyTitleText from '../../../../../components/Text/BodyTitleText/BodyTitleText';
import StoreDangolAddItem from '../../../../../components/Store/Dangol/Add/atoms/StoreItem/StoreDangolAddItem';
import FullBtn from '../../../../../components/Button/FullBtn/FullBtn';
import ModalReportSuccess from '../../../../../components/Modal/ModalReportSuccess/ModalReportSuccess';
import ModalConfirm from '../../../../../components/Modal/ModalConfirm/ModalConfirm';
import ModalDelete from '../../../../../components/Modal/ModalDelete/ModalDelete';
import ModalCompleteDangol from '../../../../../components/Modal/ModalCompleteDangol/ModalCompleteDangol';

interface Props {}

const StoreDangolAdd: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isShowModalDangol, setIsShowModalDangol] = useState(false);
  const [dangolStoreDataArr, setDangolStoreDataArr] = useState([
    {
      title: '카페롱',
      couponCount: 8,
      achieve: '바닐라 마카롱',
      distance: 100,
      isChecked: false,
    },
    {
      title: '드로잉레시피',
      couponCount: 10,
      achieve: '오븐 스파게티',
      distance: 100,
      isChecked: false,
    },
    {
      title: '크림베이글 건대점',
      couponCount: 9,
      achieve: '아이스 아메리카노 한 잔',
      distance: 100,
      isChecked: false,
    },
  ]);
  const checkedStoreDataArr = dangolStoreDataArr.filter(
    (data) => data.isChecked
  );
  const handleClickDangolStoreCheckBox = (index: number) => {
    if (!dangolStoreDataArr[index]) throw new Error('invalid index!');
    setDangolStoreDataArr((prevArr) => {
      const copiedArr = [...prevArr];
      copiedArr[index].isChecked = !copiedArr[index].isChecked;
      return copiedArr;
    });
  };
  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='단골 가게'
        onClickBackBtn={() => navigate(-1)}
      >
        <div className={styles.helpBtnWrapper}>
          <button className={styles.helpBtn}>
            <ShareIcon width={24} height={24} stroke={colors.greyDark00} />
          </button>
        </div>
      </HeaderBackBtn>
      <div className={styles.titleWrapper}>
        <BodyTitleText
          text='단골로 설정할 가게를 선택하여 설정을 완료해주세요.'
          color={colors.navy}
        />
      </div>
      <div className={styles.deleteBtnWrapper}>
        <StoreDangolAddDeleteBtn
          onClick={() => setIsShowModalDelete(true)}
          isChecked={checkedStoreDataArr.length > 0}
        />
      </div>
      <div className={styles.wrapContent}>
        {dangolStoreDataArr.map((data, index) => (
          <StoreDangolAddItem
            key={data.title + index}
            title={data.title}
            couponCount={data.couponCount}
            achieve={data.achieve}
            distance={data.distance}
            isChecked={data.isChecked}
            onClickCheckBox={() => handleClickDangolStoreCheckBox(index)}
            onClickStoreDetailBtn={() => {}}
          />
        ))}
      </div>
      <div className={styles.fullBtnWrapper}>
        <FullBtn
          label='단골로 설정'
          onClick={() => setIsShowModalDangol(true)}
          disabled={checkedStoreDataArr.length === 0}
        />
      </div>
      {isShowModalDelete && (
        <ModalDelete
          bodyText='선택하신 가게를 정말 삭제할까요?'
          subText='조용한 주택'
          nextText='다음 혜택: 분다버그 2캔'
          informText='*15초 후 자동으로 이전 메인 페이지로 돌아갑니다.'
          headerTitle=''
          onClickNo={() => setIsShowModalDelete(false)}
          onClickX={() => setIsShowModalDelete(false)}
          onClickYes={() => setIsShowModalDelete(false)}
        />
      )}
      {isShowModalDangol && (
        <ModalCompleteDangol
          headerTitle=''
          bodyText='단골설정 완료!'
          informText='*15초 후 자동으로 이전 페이지로 돌아갑니다.'
          onClickBtn={() => setIsShowModalDangol(false)}
          btnLabel='내 단골 가게 확인하기'
          onClickX={() => setIsShowModalDangol(false)}
        />
      )}
    </div>
  );
};

export default StoreDangolAdd;
