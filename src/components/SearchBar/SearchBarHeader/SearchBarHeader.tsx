import React from 'react';
import HeaderBackBtn from '../../HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../SearchBar';
interface Props {
  onClickBackBtn: () => void;
  onClickSearchBtn: () => void;
  placeholder: string;
}

const SearchBarHeader: React.FC<Props> = ({
  onClickBackBtn,
  onClickSearchBtn,
  placeholder,
}: Props) => {
  return (
    <HeaderBackBtn headerPaddingSize='search' onClickBackBtn={onClickBackBtn}>
      <SearchBar
        onClickSearchBtn={onClickSearchBtn}
        placeholder={placeholder}
      />
    </HeaderBackBtn>
  );
};

export default SearchBarHeader;
