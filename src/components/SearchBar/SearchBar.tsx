import React, { useState, useEffect } from 'react';
import SearchInputBar from './atoms/Input/SearchInputBar';
import SearchIconBtn from './atoms/IconBtn/SearchIconBtn';
import styles from './SearchBar.module.css';
interface Props {
  onClickSearchBtn: (text: string) => void;
  placeholder: string;
  firstValue?: string;
}

const SearchBar: React.FC<Props> = ({
  onClickSearchBtn,
  placeholder,
  firstValue = '',
}: Props) => {
  const [text, setText] = useState(firstValue);

  return (
    <div className={styles.wrapper}>
      <SearchInputBar text={text} setText={setText} placeholder={placeholder} />
      <SearchIconBtn onClick={() => onClickSearchBtn(text)} />
    </div>
  );
};

export default SearchBar;
