import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import { colors } from '../../../styles/colors';
import styles from './OwnerInform.module.css';
import { ReactComponent as ShareIcon } from '../../../assets/icon/share.svg';
import { ReactComponent as MoreIcon } from '../../../assets/icon/more.svg';
import OwnerInformEditBtn from '../../../components/Owner/Inform/Button/Edit/OwnerInformEditBtn';
import OwnerInformInfoContent from '../../../components/Owner/Inform/atoms/Contents/Info/OwnerInformInfoContent';
import OwnerInformLocContent from '../../../components/Owner/Inform/atoms/Contents/Loc/OwnerInformLocContent';
import OwnerInformBasicSecContent from '../../../components/Owner/Inform/atoms/Contents/BasicSec/OwnerInformBasicSecContent';
import OwnerInformSubSecsContent from '../../../components/Owner/Inform/atoms/Contents/SubSecs/OwnerInformSubSecsContent';
import OwnerInformMenuSecContent from '../../../components/Owner/Inform/atoms/Contents/MenuSec/OwnerInformMenuSecContent';

interface Props {}

const OwnerInform: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn
          backBtnColor={colors.white}
          onClickBackBtn={() => navigate(-1)}
        >
          <div className={styles.headerBtnsWrapper}>
            <button className={styles.shareBtn}>
              <ShareIcon width={24} height={24} fill={colors.white} />
            </button>
            <button className={styles.moreBtn}>
              <MoreIcon width={24} height={24} fill={colors.white} />
            </button>
          </div>
        </HeaderBackBtn>
      </div>
      <div className={styles.imgDummyBox}></div>
      <main className={styles.mainWrapper}>
        <div className={styles.mainTopWrapper}>
          <OwnerInformInfoContent
            category='베이커리'
            title='크림베이글 건대점'
          />
          <OwnerInformLocContent locText='서울 특별시 광진구 아차산로 31길 20-4' />
        </div>
        <OwnerInformBasicSecContent
          title='쿠폰 사용이 가능한 적립 도장'
          bodyText='10개 도장 적립하면 쿠폰 사용이 가능'
        />
        <OwnerInformSubSecsContent
          title='쿠폰 사용 시 보상'
          subInform={[
            { title: '1단계 보상', bodyText: '아이스 아메리카노 한 잔' },
            { title: '2단계 보상', bodyText: '플레인 베이글 한 개' },
          ]}
        />
        <OwnerInformBasicSecContent
          title='이벤트'
          bodyText='첫 방문 시 음료 한 잔 무료'
        />
        <OwnerInformMenuSecContent
          title='메뉴'
          menuItemArr={[
            { name: '아이스아메리카노', price: 4500 },
            { name: '플레인', price: 4500 },
          ]}
        />
      </main>

      <div className={styles.editBtnWrapper}>
        <OwnerInformEditBtn onClick={() => navigate('edit')} />
      </div>
    </div>
  );
};

export default OwnerInform;
