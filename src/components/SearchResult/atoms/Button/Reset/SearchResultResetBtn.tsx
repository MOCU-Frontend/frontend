import React from 'react';
import styles from './SearchResultResetBtn.module.css';
import { ReactComponent as ResetImage } from '../../../../../assets/icon/reset.svg';
import { colors } from '../../../../../styles/colors';
import SearchResultResetBtnText from '../../Text/ResetBtn/SearchResultResetBtnText';

interface Props {
  onClick: () => void;
}

const SearchResultResetBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <ResetImage width={24} height={24} stroke={colors.subPurplelight} />
      <SearchResultResetBtnText text='전체 초기화' />
    </button>
  );
};

export default SearchResultResetBtn;
