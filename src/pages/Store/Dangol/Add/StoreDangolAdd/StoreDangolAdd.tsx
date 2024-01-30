import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import { colors } from '../../../../../styles/colors';
import styles from './StoreDangolAdd.module.css';
import { ReactComponent as ShareIcon } from '../../../../../assets/icon/help.svg';
import StoreDangolAddDeleteBtn from '../../../../../components/Store/Dangol/Add/atoms/Btn/Delete/StoreDangolAddDeleteBtn';
import BodyTitleText from '../../../../../components/Text/BodyTitleText/BodyTitleText';
import StoreInfoInStamp from '../../../../../components/Stamp/atoms/StoreInfoInStamp/StoreInfoInStamp';
import StoreDangolAddItem from '../../../../../components/Store/Dangol/Add/atoms/StoreItem/StoreDangolAddItem';

interface Props {}

const StoreDangolAdd: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
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
          color={colors.black}
        />
      </div>
      <div className={styles.deleteBtnWrapper}>
        <StoreDangolAddDeleteBtn onClick={() => {}} isChecked />
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
    </div>
  );
};

export default StoreDangolAdd;
