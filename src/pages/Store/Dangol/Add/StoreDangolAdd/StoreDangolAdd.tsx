import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import { colors } from '../../../../../styles/colors';
import styles from './StoreDangolAdd.module.css';
import { ReactComponent as ShareIcon } from '../../../../../assets/icon/help.svg';

interface Props {}

const StoreDangolAdd: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
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
    </div>
  );
};

export default StoreDangolAdd;
