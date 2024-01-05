import React from 'react';
import styles from './SearchInputBar.module.css';
interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

const SearchInputBar: React.FC<Props> = ({
  text,
  setText,
  placeholder,
}: Props) => {
  return (
    <input
      type='search'
      className={styles.input}
      value={text}
      placeholder={placeholder}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default SearchInputBar;
