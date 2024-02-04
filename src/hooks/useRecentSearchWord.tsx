import { useState } from 'react';
import { RecentSearchData } from '../store/data/storeSearch';

export const useRecentSearchWord = () => {
  const recendSearchWordArrObject = localStorage.getItem(
    'mocu-recendSearchWordArr'
  );
  const recendSearchWordArr = recendSearchWordArrObject
    ? JSON.parse(recendSearchWordArrObject)
    : [];
  const [searchKeywordDataArr, setSearchKeywordDataArr] =
    useState<RecentSearchData[]>(recendSearchWordArr);

  const handleDeleteSeachKeyword = (index: number) => {
    if (!searchKeywordDataArr[index])
      throw new Error('invalid index seachKeyword!');
    setSearchKeywordDataArr((arr) => {
      const arrCopied = [...arr];
      arrCopied.splice(index, 1);
      localStorage.setItem(
        'mocu-recendSearchWordArr',
        JSON.stringify(arrCopied)
      );
      return arrCopied;
    });
  };
  const handleAddSeachKeyword = (searchWord: RecentSearchData) => {
    setSearchKeywordDataArr((arr) => {
      const arrCopied = [searchWord, ...arr];
      localStorage.setItem(
        'mocu-recendSearchWordArr',
        JSON.stringify(arrCopied)
      );
      return arrCopied;
    });
  };

  return {
    searchKeywordDataArr,
    handleDeleteSeachKeyword,
    handleAddSeachKeyword,
  };
};
