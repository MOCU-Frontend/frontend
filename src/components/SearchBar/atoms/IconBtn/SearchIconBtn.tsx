import React from 'react';
import { ReactComponent as SearchIcon } from '../../../../assets/icon/search.svg';
import { colors } from '../../../../styles/colors';
import styles from './SearchIconBtn.module.css';
interface Props {
  onClick: () => void;
}

const SearchIconBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      <SearchIcon
        width={24}
        height={24}
        stroke={colors.navy}
        color={colors.navy}
      />
    </button>
  );
};

export default SearchIconBtn;
