import React from 'react';
import SearchBar from '../SearchBar';
import styles from './FullSearchBar.module.css';
interface Props {
  onClickSearchBtn: (text: string) => void;
  placeholder: string;
}

const FullSearchBar: React.FC<Props> = ({
  onClickSearchBtn,
  placeholder,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <SearchBar
        onClickSearchBtn={onClickSearchBtn}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FullSearchBar;
