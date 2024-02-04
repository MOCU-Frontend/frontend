import React from 'react';
import HeaderBackBtn from '../../HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../SearchBar';
interface Props {
  onClickBackBtn: () => void;
  onClickSearchBtn: (value: string) => void;
  placeholder: string;
  firstValue?: string;
}

const SearchBarHeader: React.FC<Props> = ({
  onClickBackBtn,
  onClickSearchBtn,
  placeholder,
  firstValue = '',
}: Props) => {
  return (
    <HeaderBackBtn headerPaddingSize='search' onClickBackBtn={onClickBackBtn}>
      <SearchBar
        onClickSearchBtn={onClickSearchBtn}
        placeholder={placeholder}
        firstValue={firstValue}
      />
    </HeaderBackBtn>
  );
};

export default SearchBarHeader;
