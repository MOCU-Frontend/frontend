import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../../../../components/HeaderBackBtn/HeaderBackBtn';
import { colors } from '../../../../../../../styles/colors';
import styles from './StoreDangolAdd.module.css';
import { ReactComponent as ShareIcon } from '../../../../../../../assets/icon/help.svg';
import StoreDangolAddDeleteBtn from '../../../../../../../components/Store/Dangol/Add/atoms/Btn/Delete/StoreDangolAddDeleteBtn';
import BodyTitleText from '../../../../../../../components/Text/BodyTitleText/BodyTitleText';
import StoreDangolAddItem from '../../../../../../../components/Store/Dangol/Add/atoms/StoreItem/StoreDangolAddItem';
import FullBtn from '../../../../../../../components/Button/FullBtn/FullBtn';
import ModalDelete from '../../../../../../../components/Modal/ModalDelete/ModalDelete';
import ModalCompleteDangol from '../../../../../../../components/Modal/ModalCompleteDangol/ModalCompleteDangol';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchUserDangolPossibleData } from '../../../../../../../apis/user/fetchUserDangolPossibleData';
import { userDangolDeleteResponse } from '../../../../../../../store/Type/User/userDangolDeleteResponse';
import { UserDangolAddResponse } from '../../../../../../../store/Type/User/userDangolAddResponse';
import useStore from '../../../../../../../store/useStore';
import instance from '../../../../../../../apis/instance';

interface Props {}

const StoreDangolAdd: React.FC<Props> = ({}: Props) => {
  // 아무것도 선택하지 않으면 -1,
  // 선택하면 selectedStoreIndex는 index가 된다.
  const [selectedStoreIndex, setSelectedStoreIndex] = useState<number>(-1);
  const userId = useStore((state) => state.userId);
  const nowUserLocation = useStore((state) => state.nowUserLocation);
  const {
    data: userDangolData,
    isLoading: isuserDangolDataLoading,
    isError: isuserDangolDataError,
  } = useQuery({
    queryKey: ['userDangolData'],

    // 임시로
    queryFn: () =>
      fetchUserDangolPossibleData(
        userId || '',
        nowUserLocation?.latitude || 37.5404257,
        nowUserLocation?.longitude || 127.07209
      ),
    enabled: !!userId && !!nowUserLocation,
  });

  const DangolDeleteMutation = useMutation({
    mutationFn: (newData: { userId: string; storeId: number }) => {
      return instance.patch('/users/my-storelist/add-new/delete', newData);
    },
    onSuccess: (res) => {
      const data: userDangolDeleteResponse = res.data;
      console.log(data);
    },
  });

  const handleDangolDeleteClick = (userId: string, storeId: number) => {
    DangolDeleteMutation.mutate({
      storeId: storeId,
      userId: userId,
    });
    setIsShowModalDelete(false);
  };

  const DangolAddMutation = useMutation({
    mutationFn: (newData: {
      userId: string;
      storeId: number;
      request: boolean;
    }) => {
      return instance.patch('/users/regular-request', newData);
    },
    onSuccess: (res) => {
      const data: UserDangolAddResponse = res.data;
      console.log(data);
    },
  });

  const handleDangolAddClick = (
    userId: string,
    storeId: number,
    request: boolean
  ) => {
    setIsShowModalDangol(true);
    DangolAddMutation.mutate({
      storeId: storeId,
      userId: userId,
      request: request,
    });
  };

  const navigate = useNavigate();
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isShowModalDangol, setIsShowModalDangol] = useState(false);

  const handleClickDangolStoreCheckBox = (index: number) => {
    setSelectedStoreIndex(index);
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
          isChecked={selectedStoreIndex !== -1}
        />
      </div>
      <div className={styles.wrapContent}>
        {userDangolData !== undefined &&
          userDangolData.map((data, index) => (
            <StoreDangolAddItem
              key={data.storeName + index}
              selectedStoreIndex={selectedStoreIndex}
              index={index}
              title={data.storeName}
              couponCount={data.numOfStamp}
              achieve={data.reward}
              distance={data.distance}
              onClickCheckBox={() => handleClickDangolStoreCheckBox(index)}
              onClickStoreDetailBtn={() => {
                handleDangolAddClick(userId || '', data.storeId, true);
              }}
            />
          ))}
      </div>
      <div className={styles.fullBtnWrapper}>
        {userDangolData && (
          <FullBtn
            label='단골로 설정'
            onClick={() =>
              handleDangolAddClick(
                userId || '',
                userDangolData[selectedStoreIndex].storeId,
                true
              )
            }
            disabled={selectedStoreIndex === -1}
          />
        )}
      </div>
      {isShowModalDelete && userDangolData && (
        <ModalDelete
          bodyText='선택하신 가게를 정말 삭제할까요?'
          subText={userDangolData[selectedStoreIndex].storeName}
          nextText={`다음 혜택: ${userDangolData[selectedStoreIndex].reward}`}
          informText='*15초 후 자동으로 이전 메인 페이지로 돌아갑니다.'
          headerTitle=''
          onClickNo={() => setIsShowModalDelete(false)}
          onClickX={() => setIsShowModalDelete(false)}
          onClickYes={() =>
            handleDangolDeleteClick(
              // userId 임시
              userId || '',
              userDangolData[selectedStoreIndex].storeId
            )
          }
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

export { StoreDangolAdd as Component };
