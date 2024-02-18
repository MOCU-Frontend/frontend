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
import OwnerInformMenuSecContent from '../../../components/Owner/Inform/atoms/Contents/MenuSec/OwnerInformMenuSecContent';
import { useOwnerStoreData } from '../../../hooks/useOwnerStoreData';

interface Props {}

const OwnerInform: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  const { ownerStoreData } = useOwnerStoreData(5);

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
            category={ownerStoreData ? ownerStoreData.category : ''}
            title={ownerStoreData ? ownerStoreData.storeName : ''}
          />
          <OwnerInformLocContent
            locText={ownerStoreData ? ownerStoreData.address : ''}
          />
        </div>
        <OwnerInformBasicSecContent
          title='쿠폰 사용이 가능한 적립 도장'
          bodyText={`${
            ownerStoreData ? ownerStoreData.maxStamp : ''
          }개 도장 적립하면 쿠폰 사용이 가능`}
        />

        <OwnerInformBasicSecContent
          title='쿠폰 사용 시 보상'
          bodyText={ownerStoreData ? ownerStoreData.reward : ''}
        />
        <OwnerInformBasicSecContent
          title='이벤트'
          bodyText={ownerStoreData ? ownerStoreData.event || ' ' : ''}
        />
        <OwnerInformMenuSecContent
          title='메뉴'
          menuItemArr={ownerStoreData ? ownerStoreData.menus : []}
        />
      </main>

      <div className={styles.editBtnWrapper}>
        <OwnerInformEditBtn onClick={() => navigate('edit')} />
      </div>
    </div>
  );
};

export default OwnerInform;
