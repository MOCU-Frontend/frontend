import React, { useState } from 'react';
import SearchInputBar from './atoms/Input/SearchInputBar';
import SearchIconBtn from './atoms/IconBtn/SearchIconBtn';
import styles from './SearchBar.module.css';
interface Props {
  onClickSearchBtn: (text: string) => void;
  placeholder: string;
}

const SearchBar: React.FC<Props> = ({
  onClickSearchBtn,
  placeholder,
}: Props) => {
  const [text, setText] = useState('');
  return (
    <div className={styles.wrapper}>
      <SearchInputBar text={text} setText={setText} placeholder={placeholder} />
      <SearchIconBtn onClick={() => onClickSearchBtn(text)} />
    </div>
  );
};

export default SearchBar;
